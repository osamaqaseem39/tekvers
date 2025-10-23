# Deployment Guide - TekVers Website

This guide covers different deployment options for the TekVers website.

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project"
5. Import your repository
6. Vercel will automatically detect Next.js and configure the build settings
7. Click "Deploy"

### Option 2: Deploy with Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

### Option 2: GitHub Integration
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

## ☁️ Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" > "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out`
5. Deploy

## 🐳 Deploy with Docker

### Create Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run
```bash
# Build Docker image
docker build -t tekvers-website .

# Run container
docker run -p 3000:3000 tekvers-website
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://tekvers.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/osamaqaseem39
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/tek_vers
```

For production, set these variables in your deployment platform.

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images**: Use Next.js Image component
2. **Enable Compression**: Configure gzip/brotli
3. **Set Cache Headers**: Configure appropriate caching
4. **Minimize Bundle**: Use dynamic imports where possible

### Vercel Optimizations
- Automatic image optimization
- Edge functions
- Global CDN
- Automatic HTTPS

## 🔍 SEO Configuration

### Update Metadata
1. Update `app/layout.tsx` with your domain
2. Add your Google Analytics ID
3. Configure social media meta tags
4. Add sitemap.xml and robots.txt

### Google Analytics
```javascript
// Add to app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🚀 Custom Domain Setup

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

### Netlify
1. Go to Site settings
2. Navigate to "Domain management"
3. Add custom domain
4. Configure DNS

## 📱 Mobile Optimization

- Responsive design is built-in
- Test on various devices
- Use Chrome DevTools for mobile testing
- Optimize for Core Web Vitals

## 🔒 Security Considerations

- Enable HTTPS (automatic on Vercel/Netlify)
- Set security headers
- Use environment variables for sensitive data
- Regular dependency updates

## 📈 Monitoring and Analytics

### Recommended Tools
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error tracking and monitoring
- **Hotjar**: User experience insights

## 🛠️ Troubleshooting

### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Image Loading**: Verify image paths and formats
3. **Styling Issues**: Ensure Tailwind CSS is properly configured
4. **Performance**: Use Lighthouse for optimization suggestions

### Debug Commands
```bash
# Check build locally
npm run build
npm run start

# Analyze bundle
npm install -g @next/bundle-analyzer
npm run build && npx @next/bundle-analyzer

# Check for TypeScript errors
npm run lint
```

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs for errors
- Contact platform support
- Open an issue on GitHub

---

**Happy Deploying! 🚀**
