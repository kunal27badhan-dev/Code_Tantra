const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const { generateQuizQuestions, getModelInfo } = require('../services/ollamaService');
const { getSkillLevel, getRecommendations } = require('../services/skillService');

// Get Ollama config
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

// Help message for accidental GET requests
router.get('/generate', (req, res) => {
  res.status(405).json({
    error: 'Method Not Allowed',
    message: 'Use POST /api/quiz/generate with JSON body: { topics:[], languages:[], domains:[] }'
  });
});

router.post('/generate', async (req, res) => {
  try {
    // Support both old format {topics, languages, domains} and new format {domain, language, count}
    let topics, languages, domains, count = 5;
    
    if (req.body.topics && req.body.languages && req.body.domains) {
      // Old format
      topics = req.body.topics;
      languages = req.body.languages;
      domains = req.body.domains;
    } else if (req.body.domain && req.body.language) {
      // New format - convert to old format
      topics = [req.body.domain];
      languages = [req.body.language];
      domains = [req.body.domain];
      count = req.body.count || 5;
    } else {
      return res.status(400).json({ 
        error: 'Missing required fields. Use either {topics, languages, domains} or {domain, language, count}' 
      });
    }
    
    console.log('Generating quiz for:', { topics, languages, domains, count });
    
    // Call the AI Engine service
    const result = await generateQuizQuestions(domains[0], languages, count);
    const allQuestions = result.questions;
    const metadata = result.metadata;
    
    console.log(`[AI-Engine] Model: ${metadata.model} v${metadata.version}`);
    
    const quiz = new Quiz({
      questions: allQuestions,
      topics,
      languages,
      domains
    });
    
    await quiz.save();
    
    const questionsForFrontend = allQuestions.map(({ correctAnswer, ...q }) => q);
    
    res.json({
      quizId: quiz._id,
      questions: questionsForFrontend,
      totalQuestions: allQuestions.length,
      aiModel: metadata
    });
    
  } catch (error) {
    console.error('Quiz generation error:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

router.post('/submit', async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    
    if (!quizId || !answers) {
      return res.status(400).json({ 
        error: 'Missing required fields: quizId, answers' 
      });
    }
    
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    
    let score = 0;
    const results = [];
    
    quiz.questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      
      if (isCorrect) score++;
      
      results.push({
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        difficulty: question.difficulty
      });
    });
    
    const skillLevel = getSkillLevel(score, quiz.questions.length);
    const recommendations = getRecommendations(skillLevel, quiz.languages);
    
    quiz.answers = answers;
    quiz.score = score;
    quiz.skillLevel = skillLevel;
    await quiz.save();
    
    res.json({
      score,
      totalQuestions: quiz.questions.length,
      percentage: Math.round((score / quiz.questions.length) * 100),
      skillLevel,
      recommendations,
      results
    });
    
  } catch (error) {
    console.error('Quiz submission error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

router.get('/result/:quizId', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    
    res.json({
      score: quiz.score,
      skillLevel: quiz.skillLevel,
      topics: quiz.topics,
      languages: quiz.languages,
      createdAt: quiz.createdAt
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to get quiz results' });
  }
});

module.exports = router;
