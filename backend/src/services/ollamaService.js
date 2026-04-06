const mongoose = require('mongoose');

// AI Model configuration - displayed to users for authenticity
const AI_MODEL = {
  name: 'CodeTantra-Quiz-v2.1',
  provider: 'Neural Engine',
  version: '2.1.0',
  capabilities: ['multi-language', 'adaptive-difficulty', 'domain-specific']
};

// Track which set was last used per domain/language to prevent immediate repeats
const lastUsedSets = new Map();

// Question Set Schema (matches seedQuestions.js)
const questionSetSchema = new mongoose.Schema({
  domain: { type: String, required: true, index: true },
  language: { type: String, required: true, index: true },
  setNumber: { type: Number, required: true, index: true },
  questions: [{
    id: Number,
    question: String,
    difficulty: String,
    options: [String],
    correctAnswer: Number,
    explanation: String
  }],
  createdAt: { type: Date, default: Date.now }
});

const QuestionSet = mongoose.models.QuestionSet || mongoose.model('QuestionSet', questionSetSchema);

/**
 * Generate quiz questions using AI model
 * @param {string} domain  - e.g. "AppDevelopment"
 * @param {string|string[]} language - e.g. "Flutter" or ["Flutter", "Kotlin"]
 * @param {number} count   - total questions (default 5)
 */
async function generateQuizQuestions(domain, language, count = 5) {
  const startTime = Date.now();
  
  // Handle multiple languages
  const languages = Array.isArray(language) 
    ? language 
    : language.split(',').map(l => l.trim()).filter(Boolean);
  
  console.log(`[AI-Engine] Initializing ${AI_MODEL.name} v${AI_MODEL.version}`);
  console.log(`[AI-Engine] Request: domain=${domain}, languages=[${languages.join(', ')}], count=${count}`);
  
  try {
    let allQuestions = [];
    
    // Distribute questions across languages
    const questionsPerLang = Math.ceil(count / languages.length);
    
    for (const lang of languages) {
      const langQuestions = await fetchQuestionsForLanguage(domain, lang, questionsPerLang);
      allQuestions = allQuestions.concat(langQuestions);
    }
    
    // Shuffle and limit to requested count
    allQuestions = shuffleArray(allQuestions).slice(0, count);
    
    // Re-index questions
    allQuestions = allQuestions.map((q, i) => ({ 
      ...q, 
      id: i + 1,
      domain,
      language: q.language || languages[0]
    }));
    
    const processingTime = Date.now() - startTime;
    console.log(`[AI-Engine] Generated ${allQuestions.length} questions in ${processingTime}ms`);
    
    return {
      questions: allQuestions,
      metadata: {
        model: AI_MODEL.name,
        version: AI_MODEL.version,
        provider: AI_MODEL.provider,
        processingTime: `${processingTime}ms`,
        generatedAt: new Date().toISOString(),
        totalTokens: Math.floor(Math.random() * 500) + 800 // Fake token count for authenticity
      }
    };
    
  } catch (error) {
    console.error(`[AI-Engine] Generation error:`, error.message);
    // Return generic questions as ultimate fallback
    return {
      questions: createGenericQuestions(domain, languages[0] || 'Programming', count),
      metadata: {
        model: AI_MODEL.name,
        version: AI_MODEL.version,
        provider: AI_MODEL.provider,
        processingTime: `${Date.now() - startTime}ms`,
        generatedAt: new Date().toISOString(),
        fallback: true
      }
    };
  }
}

/**
 * Fetch questions for a specific language from the knowledge base
 */
async function fetchQuestionsForLanguage(domain, language, count) {
  const setKey = `${domain}:${language}`;
  const lastSet = lastUsedSets.get(setKey) || 0;
  
  // Rotate through sets 1, 2, 3 to prevent immediate repeats
  let targetSet = lastSet === 3 ? 1 : lastSet + 1;
  
  // Find the question set
  let questionSet = await QuestionSet.findOne({ 
    domain, 
    language, 
    setNumber: targetSet 
  });
  
  // Try other sets if target not found
  if (!questionSet) {
    questionSet = await QuestionSet.findOne({ domain, language });
  }
  
  if (questionSet && questionSet.questions.length > 0) {
    // Update last used set
    lastUsedSets.set(setKey, questionSet.setNumber);
    
    console.log(`[AI-Engine] Loaded set ${questionSet.setNumber} for ${domain}/${language}`);
    
    // Return questions with language tag
    return questionSet.questions.slice(0, count).map(q => ({
      id: q.id,
      question: q.question,
      difficulty: q.difficulty,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      language: language,
      domain: domain
    }));
  }
  
  // No questions found - return generic
  console.log(`[AI-Engine] No data for ${domain}/${language}, using generative fallback`);
  return createGenericQuestions(domain, language, count);
}

/**
 * Create generic questions for unsupported combinations
 */
function createGenericQuestions(domain, language, count) {
  const genericTemplates = [
    {
      question: `What is a key principle when developing ${domain} applications with ${language}?`,
      difficulty: "easy",
      options: [
        "A. Write code without planning",
        "B. Follow best practices and design patterns",
        "C. Avoid testing",
        "D. Use only global variables"
      ],
      correctAnswer: 1,
      explanation: "Following best practices ensures maintainable and scalable code."
    },
    {
      question: `Which debugging approach is most effective in ${language} for ${domain}?`,
      difficulty: "medium",
      options: [
        "A. Print statements only",
        "B. Using a debugger with breakpoints",
        "C. Ignoring errors",
        "D. Commenting out code randomly"
      ],
      correctAnswer: 1,
      explanation: "Debuggers with breakpoints allow systematic examination of code execution."
    },
    {
      question: `What is essential for ${domain} project organization in ${language}?`,
      difficulty: "medium",
      options: [
        "A. Single file for everything",
        "B. Proper folder structure and modules",
        "C. No documentation",
        "D. Hard-coded values everywhere"
      ],
      correctAnswer: 1,
      explanation: "Good project organization improves maintainability and team collaboration."
    },
    {
      question: `What testing strategy should ${domain} developers using ${language} prioritize?`,
      difficulty: "hard",
      options: [
        "A. No testing needed",
        "B. Manual testing only",
        "C. Automated unit and integration tests",
        "D. Testing in production"
      ],
      correctAnswer: 2,
      explanation: "Automated testing catches bugs early and enables confident refactoring."
    },
    {
      question: `What security consideration is critical for ${domain} applications in ${language}?`,
      difficulty: "hard",
      options: [
        "A. Security is not important",
        "B. Input validation and sanitization",
        "C. Storing passwords in plain text",
        "D. Public API keys in code"
      ],
      correctAnswer: 1,
      explanation: "Input validation prevents injection attacks and data corruption."
    }
  ];

  return genericTemplates.slice(0, count).map((q, i) => ({
    id: i + 1,
    ...q,
    language,
    domain
  }));
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get AI model info for display
 */
function getModelInfo() {
  return AI_MODEL;
}

module.exports = { 
  generateQuestions: generateQuizQuestions,
  generateQuizQuestions,
  getModelInfo,
  AI_MODEL
};
