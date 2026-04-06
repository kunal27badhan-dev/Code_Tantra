require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../..')));

// MongoDB Connection with Atlas (remove deprecated options)
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kunal-badhan:Psw%40db@code-tantra.mpwa35c.mongodb.net/quizapp')
.then(() => console.log('✅ MongoDB Atlas connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Static file serving for Hackthon assets
app.use('/assets', express.static(path.join(__dirname, '../../Hackthon')));

// Routes
const quizRoutes = require('./routes/quiz');
const githubRoutes = require('./routes/github');

app.use('/api/quiz', quizRoutes);
app.use('/api/github', githubRoutes);

// Legacy routes (preserve existing functionality)
try {
  const { getRankedData } = require('../services/dataService');
  const config = require('../config');
  
  app.get('/api/results', async (req, res, next) => {
    try {
      const results = await getRankedData(config.apiUrl, config.topN);
      res.json({
        success: true,
        count: results.length,
        data: results
      });
    } catch (error) {
      next(error);
    }
  });
} catch (err) {
  console.log('Legacy routes not available - creating fallback /api/results endpoint');
  
  // Fallback endpoint for /api/results
  app.get('/api/results', async (req, res) => {
    res.json({
      success: true,
      message: 'Legacy API - use /api/github/issues for GitHub data',
      redirect: '/api/github/issues?language=javascript'
    });
  });
}

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.get('/frontend', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend.html'));
});

app.get('/issues', (req, res) => {
  res.sendFile(path.join(__dirname, '../../issues.html'));
});

// Quiz system routes - use root level HTML files  
app.get('/quiz', (req, res) => {
  const filePath = path.join(__dirname, '../../quiz-start.html');
  console.log('📂 Serving quiz index:', filePath);
  res.sendFile(filePath);
});

app.get('/quiz-take', (req, res) => {
  const filePath = path.join(__dirname, '../../quiz-wired.html');
  console.log('📂 Serving quiz page:', filePath);
  res.sendFile(filePath);
});

app.get('/evaluation', (req, res) => {
  const filePath = path.join(__dirname, '../../result.html');
  console.log('📂 Serving evaluation:', filePath);
  res.sendFile(filePath);
});

app.get('/result', (req, res) => {
  // Enhanced results page
  res.sendFile(path.resolve(__dirname, '../../result.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling for file not found
app.use((err, req, res, next) => {
  if (err.status === 404) {
    console.error('❌ File not found:', req.path);
    console.error('   Attempted to serve:', err.path || 'unknown');
    
    // Send a helpful error page
    res.status(404).json({
      error: 'Page not found',
      path: req.path,
      message: 'The requested page could not be found. Check the file paths.',
      availableRoutes: [
        '/ - Home page',
        '/quiz - Quiz setup', 
        '/quiz-take - Take quiz',
        '/result - View results',
        '/health - Health check'
      ]
    });
  } else {
    console.error('❌ Server error:', err.message);
    console.error(err.stack);
    res.status(500).json({ 
      error: 'Internal server error',
      message: err.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('\n========================================');
  console.log('🚀 Quiz Backend Server Running!');
  console.log('========================================');
  console.log(`🏠 Home:            http://localhost:${PORT}/`);
  console.log(`🎯 Frontend:        http://localhost:${PORT}/frontend`);
  console.log(`📋 Issues:          http://localhost:${PORT}/issues`);
  console.log(`🎲 Quiz:            http://localhost:${PORT}/quiz`);
  console.log(`📊 Results:         http://localhost:${PORT}/result`);
  console.log(`🔌 Quiz API:        http://localhost:${PORT}/api/quiz/generate`);
  console.log(`🐙 GitHub API:      http://localhost:${PORT}/api/github/issues`);
  console.log(`💚 Health:          http://localhost:${PORT}/health`);
  console.log('========================================\n');
});

module.exports = app;