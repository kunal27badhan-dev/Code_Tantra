// Basic data service for quiz system
const fs = require('fs');
const path = require('path');

class DataService {
  constructor() {
    this.dataDir = path.join(__dirname, '../../data');
    this.ensureDataDirectory();
  }

  ensureDataDirectory() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  // Store quiz session data
  saveQuizSession(sessionId, data) {
    const filePath = path.join(this.dataDir, `quiz_${sessionId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return filePath;
  }

  // Get quiz session data  
  getQuizSession(sessionId) {
    const filePath = path.join(this.dataDir, `quiz_${sessionId}.json`);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    return null;
  }

  // Legacy function for compatibility
  async getRankedData(apiUrl, topN = 10) {
    // Fallback data for legacy /api/results endpoint
    return [
      { id: 1, title: "Sample Issue 1", score: 95, url: "https://github.com/example/repo1" },
      { id: 2, title: "Sample Issue 2", score: 87, url: "https://github.com/example/repo2" }
    ].slice(0, topN);
  }

  // Clean old sessions (older than 24 hours)
  cleanOldSessions() {
    const files = fs.readdirSync(this.dataDir);
    const now = Date.now();
    const dayOld = 24 * 60 * 60 * 1000; // 24 hours

    files.forEach(file => {
      if (file.startsWith('quiz_')) {
        const filePath = path.join(this.dataDir, file);
        const stats = fs.statSync(filePath);
        if (now - stats.mtime.getTime() > dayOld) {
          fs.unlinkSync(filePath);
        }
      }
    });
  }
}

module.exports = new DataService();