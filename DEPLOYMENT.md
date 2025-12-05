# 🚀 Deployment Guide

This guide will help you deploy the Email Routing Manager to Vercel with proper configuration.

## 📋 Prerequisites

- Node.js 18+ installed
- Vercel account
- Supabase account (recommended for production)
- Cloudflare account with Email Routing API

## 🔧 Environment Setup

### 1. Setup Environment Variables

Copy the example environment file:
```bash
npm run setup:env
```

Edit the `.env` file with your credentials:

```env
# Database Configuration
DATABASE_URL="file:./dev.db"
SUPABASE_DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres

# Supabase Configuration (for production)
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Authentication
JWT_SECRET=your_jwt_secret_key_here
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://your-domain.vercel.app

# Cloudflare API Configuration
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_D1_DATABASE=your_cloudflare_d1_database
CLOUDFLARE_WORKER_API=your_cloudflare_worker_api
CLOUDFLARE_KV_STORAGE=your_cloudflare_kv_storage

# Application Configuration
NODE_ENV=production
PORT=3000
```

### 2. Supabase Setup (Optional but Recommended)

1. Create a new Supabase project
2. Get your project URL and keys from Supabase dashboard
3. Update `.env` file with your Supabase credentials
4. Run `npx prisma db push` to create database tables

### 3. Cloudflare Setup

1. Create a Cloudflare API token with Email Routing permissions
2. Get your Account ID from Cloudflare dashboard
3. Navigate to to Config page in the application
4. Enter your Cloudflare credentials to enable email routing

## 🚀 Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
npm run deploy:vercel
```

### Method 2: Using Git Integration

1. Push to GitHub (already done)
2. Connect your GitHub repository to Vercel
3. Deploy from Vercel dashboard

## 🔧 Vercel Environment Variables

After deployment, configure these environment variables in Vercel dashboard:

### Required Variables
- `DATABASE_URL` - Your database connection string
- `JWT_SECRET` - Random string for JWT signing
- `NEXTAUTH_SECRET` - Random string for NextAuth
- `NEXTAUTH_URL` - Your Vercel domain URL

### Optional Variables (for Supabase)
- `SUPABASE_DATABASE_URL` - Supabase PostgreSQL connection
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

### Cloudflare Variables
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
- `CLOUDFLARE_D1_DATABASE` - Cloudflare D1 database ID
- `CLOUDFLARE_WORKER_API` - Cloudflare worker API
- `CLOUDFLARE_KV_STORAGE` - Cloudflare KV storage

## 🗄️ Database Setup

### For Development (SQLite)
```bash
npx prisma generate
npx prisma db push
```

### For Production (Supabase)
1. Create Supabase project
2. Get connection string from Supabase dashboard
3. Update `SUPABASE_DATABASE_URL` in environment variables
4. Run:
```bash
npx prisma generate
npx prisma db push
```

## 🔍 Troubleshooting

### Common Issues

#### Prisma Client Error
```
Error: Prisma has detected that this project was built on Vercel
```
**Solution**: The build script already runs `prisma generate` before building

#### Database Connection Error
```
Error: Can't reach database server
```
**Solution**: Check your `DATABASE_URL` or `SUPABASE_DATABASE_URL` environment variables

#### Cloudflare API Error
```
Error: Invalid API token
```
**Solution**: Verify your Cloudflare API token has Email Routing permissions

#### Build Error
```
Error: Module not found
```
**Solution**: Run `npm install` to install dependencies

### Environment Variable Issues

1. **Check if variables are set**:
```bash
vercel env ls
```

2. **Add missing variables**:
```bash
vercel env add VARIABLE_NAME value
```

3. **Pull variables to local**:
```bash
vercel env pull .env.production
```

## 📊 Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set
- [ ] Database is accessible
- [ ] Cloudflare API token is valid
- [ ] Build runs successfully locally
- [ ] All dependencies are installed
- [ ] Prisma client is generated

## 🎯 Post-Deployment

1. **Test the application** at your Vercel domain
2. **Check all functionality**:
   - Login system
   - Email routing creation
   - Configuration management
   - API connectivity
3. **Monitor logs** in Vercel dashboard
4. **Set up custom domain** (optional)

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Supabase Dashboard](https://app.supabase.com)
- [Cloudflare Dashboard](https://dash.cloudflare.com)
- [GitHub Repository](https://github.com/garword/goy)

## 💡 Tips

1. **Use Supabase for production** - More reliable than SQLite
2. **Keep API keys secure** - Never commit them to git
3. **Test locally first** - Ensure everything works before deploying
4. **Monitor usage** - Keep an eye on API quotas and costs
5. **Use environment-specific configs** - Different settings for dev/prod

## 🆘 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review environment variables
3. Test with local build
4. Create an issue in the repository

---

Happy deploying! 🚀