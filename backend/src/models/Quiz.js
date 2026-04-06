const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true }
  }],
  answers: [{ type: Number }],
  score: { type: Number, default: 0 },
  skillLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  topics: [{ type: String }],
  languages: [{ type: String }],
  domains: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', QuizSchema);