# Code Tantra - AI Skills Quiz Platform

🎯 **Live Demo**: Coming soon on Railway  
🔗 **GitHub**: https://github.com/your-username/code-tantra  
🎮 **Features**: AI-powered quiz + GitHub issue discovery

## 🚀 Quick Start

### Local Development
```bash
git clone <your-repo>
cd code-tantra
npm install
npm run seed    # Seed MongoDB with 255 questions
npm start       # Start server on port 3000
```

### Environment Variables
```env
MONGODB_URI=mongodb+srv://kunal-badhan:Psw%40db@code-tantra.mpwa35c.mongodb.net/quizapp
PORT=3000
NODE_ENV=production
GITHUB_TOKEN=your_github_token_optional
```

## 🌐 Deployment

### Railway (Recommended - Free + GitHub Integration)
1. Push code to GitHub
2. Connect Railway to your GitHub repo
3. Railway auto-deploys on every push
4. Add environment variables in Railway dashboard

### Architecture
- **Frontend**: Static HTML/CSS/JS served by Express
- **Backend**: Node.js + Express API
- **Database**: MongoDB Atlas (cloud)
- **Questions**: 255 pre-generated, rotates through 3 sets

## 📡 API Endpoints

- `GET /` - Landing page
- `GET /quiz` - Quiz interface  
- `POST /api/quiz/generate` - Generate quiz questions
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/github/issues` - Get GitHub issues by skill level

## 🎮 User Flow

1. **Take Quiz** → Select domain & languages → Answer 20 questions
2. **Get Results** → See skill level (beginner/intermediate/advanced) 
3. **Explore Issues** → Find GitHub projects matching your skill level

## 🤖 Features

- **AI-Style Questions**: 255 curated questions across 7 domains
- **Smart Rotation**: 3 question sets per topic, no immediate repeats  
- **Skill Assessment**: Beginner/Intermediate/Advanced based on performance
- **GitHub Integration**: Real "good first issue" recommendations
- **Responsive Design**: Works on all devices

## 📊 Domains Covered

- Web Development (JavaScript, React, TypeScript, Node.js)
- App Development (Flutter, React Native, Swift, Kotlin)  
- Data Science (Python, R)
- DevOps (Docker, Kubernetes)
- Machine Learning (Python, TensorFlow)
- Cyber Security (Python)
- Game Development (Unity, Unreal Engine)

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **APIs**: GitHub REST API
- **Deployment**: Railway (GitHub integration)

## 📈 Stats

- 255 Questions across 51 sets
- 7 Domains, 16+ Languages
- Real-time GitHub issue fetching
- Mobile-responsive design