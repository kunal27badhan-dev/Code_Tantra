const express = require('express');
const router = express.Router();
const { getGoodFirstIssues } = require('../services/githubService');

router.get('/issues', async (req, res) => {
  try {
    const { language, languages, skillLevel } = req.query;
    
    let languageList = [];
    if (language) {
      languageList = [language];
    } else if (languages) {
      languageList = languages.split(',').map(lang => lang.trim());
    } else {
      languageList = ['javascript'];
    }
    
    console.log('Fetching GitHub issues for:', {
      languages: languageList,
      skillLevel
    });
    
    const issues = await getGoodFirstIssues(languageList, skillLevel);
    
    res.json({
      success: true,
      count: issues.length,
      languages: languageList,
      skillLevel: skillLevel || 'beginner',
      issues
    });
    
  } catch (error) {
    console.error('GitHub issues error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch GitHub issues',
      details: error.message 
    });
  }
});

module.exports = router;
