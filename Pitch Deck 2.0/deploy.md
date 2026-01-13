# 🚀 Deployment Guide to Vercel

## Prerequisites
- Node.js 18+ installed
- Vercel account (free tier available)
- Gemini API key (optional, for AI features)

## Step 1: Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

## Step 2: Build and Test Locally
```bash
# Install dependencies
npm install

# Test development build
npm run dev

# Test production build
npm run build
npm run preview
```

## Step 3: Deploy to Vercel

### Method A: Vercel CLI (Recommended)
```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: siakad-uidc-pitch-deck
# - Directory: ./
# - Override settings? N
```

### Method B: GitHub + Vercel Dashboard
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings (auto-detected)
6. Deploy

## Step 4: Set Environment Variables

### In Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add:
   - `GEMINI_API_KEY`: Your Gemini AI API key (optional)

### Via Vercel CLI:
```bash
vercel env add GEMINI_API_KEY
# Enter your API key when prompted
```

## Step 5: Custom Domain (Optional)
1. In Vercel dashboard, go to Domains
2. Add your custom domain
3. Configure DNS settings as instructed

## 🔧 Troubleshooting

### Build Errors
- Ensure Node.js version is 18+
- Check all dependencies are installed
- Verify TypeScript compilation: `npm run type-check`

### Environment Variables
- Ensure all required env vars are set in Vercel
- Check variable names match exactly
- Redeploy after adding new variables

### Performance Issues
- Enable Vercel Analytics in dashboard
- Check build logs for optimization opportunities
- Consider enabling Edge Functions if needed

## 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All slides navigate properly
- [ ] Mobile responsiveness works
- [ ] Environment variables are set
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Performance optimized

## 🌐 Expected URLs

- **Production**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://your-domain.com` (if configured)
- **Preview**: Generated for each deployment

---

**Ready to deploy? Run `vercel` in your terminal!**