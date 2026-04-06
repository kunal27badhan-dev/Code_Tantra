function getLabelFilter(skillLevel) {
  const normalized = (skillLevel || '').toString().trim().toLowerCase();
  const skillLabelMap = {
    beginner: 'label:"good first issue"',
    intermediate: 'label:"help wanted"',
    advanced: '(label:"bug" OR label:"enhancement")'
  };

  return skillLabelMap[normalized] || skillLabelMap.beginner;
}

async function getGoodFirstIssues(languages, skillLevel) {
  const results = [];
  const labelFilter = getLabelFilter(skillLevel);
  
  for (const language of languages.slice(0, 3)) {
    try {
      const query = `${labelFilter} language:${language} state:open`;
      const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&per_page=10`;
      
      const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Quiz-App/1.0'
      };
      
      // Add GitHub token if available
      if (process.env.GITHUB_TOKEN) {
        headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      }
      
      const response = await fetch(url, { headers });
      
      if (!response.ok) {
        console.error(`GitHub API error for ${language}: ${response.status}`);
        continue;
      }
      
      const data = await response.json();
      
      const issues = data.items.slice(0, 10).map(issue => ({
        title: issue.title,
        url: issue.html_url,
        repo: issue.repository_url.replace('https://api.github.com/repos/', ''),
        comments: issue.comments,
        language: language,
        labels: issue.labels.map(label => label.name),
        createdAt: issue.created_at,
        updatedAt: issue.updated_at
      }));
      
      results.push(...issues);
      
    } catch (error) {
      console.error(`Error fetching issues for ${language}:`, error);
    }
  }
  
  return results
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 10);
}

module.exports = { getGoodFirstIssues };
