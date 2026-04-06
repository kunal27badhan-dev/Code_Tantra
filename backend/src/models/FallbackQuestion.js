const mongoose = require('mongoose');

const fallbackQuestionSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
    index: true
  },
  language: {
    type: String, 
    required: true,
    index: true
  },
  setNumber: {
    type: Number,
    default: 1,
    index: true
  },
  questions: [{
    id: Number,
    question: String,
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium'
    },
    options: [String],
    correctAnswer: Number,
    explanation: String
  }]
}, {
  timestamps: true
});

// Compound index for efficient queries
fallbackQuestionSchema.index({ domain: 1, language: 1, setNumber: 1 });

module.exports = mongoose.model('FallbackQuestion', fallbackQuestionSchema);