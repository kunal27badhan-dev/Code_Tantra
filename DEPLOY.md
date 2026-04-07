# 🚀 Deploy to Railway (GitHub Integration)

## Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - AI Quiz Platform"

# Create GitHub repo and push
gh repo create code-tantra-quiz --public
git remote add origin https://github.com/YOUR_USERNAME/code-tantra-quiz.git
git push -u origin main
```

## Step 2: Deploy on Railway

1. **Go to Railway**: https://railway.app
2. **Sign up** with your GitHub account
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select** your `code-tantra-quiz` repository
5. **Deploy** - Railway will auto-detect Node.js and deploy

## Step 3: Add Environment Variables

In Railway dashboard → Your Project → Variables:

```env
MONGODB_URI=mongodb+srv://kunal-badhan:Psw%40db@code-tantra.mpwa35c.mongodb.net/quizapp
NODE_ENV=production
PORT=3000
```

## Step 4: Custom Domain (Optional)

1. Railway gives you a free domain: `your-app.up.railway.app`
2. Or add your custom domain in Railway dashboard

## 🎯 That's it! 

- **Auto-deploys** on every git push
- **Free tier**: 512MB RAM, $5/month credit  
- **Custom domains** supported
- **Logs & monitoring** included

## Alternative: Render

If you prefer Render over Railway:

1. **Go to Render**: https://render.com
2. **Connect GitHub** repo
3. **Web Service** → Node.js
4. **Build**: `npm install && npm run seed`
5. **Start**: `npm start`
6. **Add same environment variables**

## 📱 Mobile-Friendly URLs

Once deployed, your app will be accessible:
- Desktop: Full features
- Mobile: Responsive quiz interface  
- API: All endpoints work globally

## 🔄 Continuous Deployment

Every time you push code to GitHub:
1. Railway/Render detects changes
2. Rebuilds and redeploys automatically  
3. Zero downtime deployment
4. Your app stays online 24/7