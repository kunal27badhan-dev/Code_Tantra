function getSkillLevel(score, totalQuestions = 20) {
  const percentage = (score / totalQuestions) * 100;
  
  if (score >= 14) return 'advanced';    // 70%+
  if (score >= 8) return 'intermediate'; // 40%+
  return 'beginner';                     // <40%
}

function getRecommendations(skillLevel, languages) {
  const recommendations = {
    beginner: {
      focus: 'Build foundational skills',
      suggestions: [
        'Complete basic tutorials',
        'Practice coding exercises',
        'Read documentation',
        'Join beginner communities'
      ]
    },
    intermediate: {
      focus: 'Contribute to open source',
      suggestions: [
        'Start with good first issues',
        'Read project documentation',
        'Practice code reviews',
        'Build small projects'
      ]
    },
    advanced: {
      focus: 'Lead and mentor',
      suggestions: [
        'Mentor junior developers',
        'Lead open source projects',
        'Write technical articles',
        'Speak at conferences'
      ]
    }
  };
  
  return recommendations[skillLevel] || recommendations.beginner;
}

module.exports = { 
  getSkillLevel, 
  getRecommendations 
};