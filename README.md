# AIO Labs - Production Deployment

A production-grade AI infrastructure platform built with TanStack Start, React, and TypeScript.

## 🚀 Quick Deploy

### Vercel (Recommended)

1. **Connect Repository**: Link this repo to Vercel
2. **Environment Variables**: Set the following in Vercel dashboard:

```bash
# Required for AI functionality
OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-4o-mini

# Required for data storage
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Required for email notifications
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=reports@yourdomain.com

# Optional: Analytics
VITE_POSTHOG_KEY=your_posthog_key
VITE_POSTHOG_HOST=https://app.posthog.com

# Optional: Rate limiting
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

3. **Deploy**: Vercel will automatically build and deploy

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Fill in your API keys in .env

# Start development server
npm run dev
```

## 🏗️ Architecture

- **Frontend**: React 19 + TanStack Router + Tailwind CSS
- **Backend**: TanStack Start (serverless functions)
- **AI**: OpenAI GPT-4 integration
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Deployment**: Vercel
- **Language**: Bilingual (Arabic/English) with RTL support

## 🔒 Security Features

- Server-side API key protection
- Request validation and sanitization
- Rate limiting (12 requests/minute per IP)
- CSP headers
- XSS protection
- SQL injection prevention

## 📊 Analytics

PostHog integration for:

- User interactions
- Feature usage
- Conversion tracking
- Language preferences

## 🌍 Internationalization

- **Arabic**: Najdi dialect with Thmanyah font
- **English**: Enterprise-grade copy
- Automatic RTL/LTR switching
- SEO-optimized metadata

## 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── features/           # Feature-specific modules
│   ├── agents/         # AI agent runtime
│   ├── architecture-generator/  # System design tool
│   ├── case-studies/   # Success stories
│   ├── home/          # Landing page
│   └── opportunity-scanner/  # Lead qualification
├── lib/               # Shared utilities
│   ├── ai/           # AI integration
│   ├── analytics/    # PostHog setup
│   ├── env.ts        # Environment validation
│   ├── language/     # i18n system
│   └── seo/          # Metadata & structured data
├── routes/           # TanStack Router pages
└── server.ts         # API endpoints & middleware
```

## 🚨 Production Notes

- All AI operations include fallback modes
- Database operations are non-blocking
- Email sending fails gracefully
- Analytics loads asynchronously
- Bundle is code-split for performance

## 📈 Performance

- Lazy-loaded heavy components
- Optimized font loading
- Image optimization ready
- Mobile-first responsive design
- Reduced motion support

## 🤝 Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Ensure accessibility compliance
5. Test in both Arabic and English modes
