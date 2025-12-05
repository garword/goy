# 📧 Email Routing Manager

A comprehensive Cloudflare email routing management system built with Next.js 15, TypeScript, and Supabase. This application provides a secure and intuitive dashboard for managing email forwarding rules through Cloudflare's Email Routing API.

## ✨ Features

### 🎯 Core Functionality
- **📧 Email Routing Management** - Create, view, and delete email forwarding rules
- **🌐 Multi-Domain Support** - Manage email routing for multiple Cloudflare domains
- **🔐 Secure Authentication** - Simple yet effective login system with remember me functionality
- **🌍 Internationalization** - Full support for Indonesian and English languages
- **🎨 Dark/Light Mode** - Beautiful UI with seamless theme switching

### 🛠️ Technical Features
- **⚡ Next.js 15** - Latest React framework with App Router
- **📘 TypeScript** - Type-safe development experience
- **🗄️ Supabase Integration** - Cloud-native PostgreSQL database
- **🎨 Tailwind CSS + shadcn/ui** - Modern, responsive UI components
- **🔒 Secure API Integration** - Safe Cloudflare API token management
- **📱 Mobile Responsive** - Optimized for all device sizes

### 🚀 Advanced Features
- **🤖 Auto-Generated Emails** - Indonesian name-based email aliases with random suffixes
- **📋 Configuration Dashboard** - Centralized API key and destination email management
- **📊 Real-time Statistics** - Live tracking of email routing rules and domains
- **🔄 Auto-refresh** - Automatic configuration status checking
- **📋 Copy to Clipboard** - Quick email address copying functionality

## 🏗️ Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Lucide React** icons
- **Framer Motion** animations
- **React Hook Form + Zod** validation
- **Next Themes** for dark mode
- **Next Intl** for internationalization

### Backend & Database
- **Supabase** (PostgreSQL) for data storage
- **Prisma ORM** for database operations
- **Cloudflare Email Routing API** integration
- **Next.js API Routes** for backend logic

### Authentication & Security
- **Custom authentication system** with secure token management
- **JWT-based session handling**
- **Secure API key storage** in database
- **Input validation** and sanitization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Supabase account and project (optional, can use SQLite)
- Cloudflare account with Email Routing enabled

### 1. Clone and Install
```bash
git clone https://github.com/garword/goy.git
cd goy
npm install
```

### 2. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env
```

Then edit `.env` file with your credentials:

```env
# Database Configuration
DATABASE_URL="file:./dev.db"
SUPABASE_DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres

# Supabase Configuration (optional - for production)
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Authentication
JWT_SECRET=your_jwt_secret_key_here
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Cloudflare API Configuration
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_D1_DATABASE=your_cloudflare_d1_database
CLOUDFLARE_WORKER_API=your_cloudflare_worker_api
CLOUDFLARE_KV_STORAGE=your_cloudflare_kv_storage

# Application Configuration
NODE_ENV=development
PORT=3000
```

### 3. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (SQLite for development, Supabase for production)
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

## 🔧 Configuration

### Supabase Setup (Optional)
1. Create a new Supabase project
2. Get your project URL and anon keys from Supabase dashboard
3. Update `.env` file with your Supabase credentials
4. Run `npx prisma db push` to create database tables

### Cloudflare Setup
1. Create a Cloudflare API token with Email Routing permissions
2. Get your Account ID from Cloudflare dashboard
3. Navigate to to Config page in the application
4. Enter your Cloudflare credentials to enable email routing

## 🚀 Deployment

### Deploy to Vercel

1. **Prepare Environment Variables**:
   - Go to Vercel dashboard
   - Add all environment variables from `.env` file
   - Set `NODE_ENV=production`
   - Update `NEXTAUTH_URL` to your Vercel domain

2. **Deploy**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

3. **Post-Deployment Setup**:
   - Configure environment variables in Vercel dashboard
   - Ensure database is accessible (use Supabase for production)
   - Test all functionality

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── cloudflare/    # Cloudflare integration endpoints
│   │   └── email-routing/ # Email routing management
│   ├── dashboard/         # Main dashboard pages
│   ├── login/            # Authentication page
│   └── layout.tsx       # Root layout with providers
├── components/            # Reusable React components
│   ├── ui/              # shadcn/ui components
│   └── language-selector.tsx
├── contexts/             # React contexts
│   └── auth-context.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   ├── db.ts           # Database configuration
│   ├── supabase.ts     # Supabase client setup
│   ├── translations.ts # Internationalization
│   └── cloudflare-api.ts # Cloudflare API helpers
└── prisma/             # Database schema and migrations
    └── schema.prisma
```

## 🎨 Features Overview

### Authentication System
- **Login Credentials**: Username: `windaa`, Password: `cantik`
- **Remember Me**: Persistent sessions with customizable duration
- **Secure Storage**: Tokens stored securely with expiration handling
- **Auto-redirect**: Intelligent routing based on authentication status

### Email Routing Management
- **Auto-generation**: Indonesian name-based email aliases
- **Manual creation**: Custom email aliases
- **Domain selection**: Support for multiple Cloudflare domains
- **Destination management**: Predefined and custom destination emails
- **Real-time updates**: Live synchronization with Cloudflare API

### Configuration Dashboard
- **API Key Management**: Secure storage of Cloudflare credentials
- **Destination Emails**: Management of forwarding email addresses
- **Status Monitoring**: Real-time configuration status checking
- **Security Features**: Hidden API keys with show/hide functionality

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark Mode**: Seamless theme switching with system preference detection
- **Internationalization**: Full Indonesian and English language support
- **Accessibility**: WCAG compliant components with keyboard navigation
- **Micro-interactions**: Smooth animations and transitions

## 🔒 Security Features

- **Secure API Key Storage**: All credentials encrypted in database
- **Input Validation**: Comprehensive validation using Zod schemas
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Session Management**: Secure token-based authentication
- **API Rate Limiting**: Protection against API abuse
- **HTTPS Enforcement**: Secure communication protocols

## 📊 Database Schema

The application uses three main tables:

1. **users** - Authentication and user management
2. **email_routing** - Email forwarding rules and configurations
3. **cloudflare_config** - API credentials and settings

## 🔧 Troubleshooting

### Common Issues

1. **Prisma Client Error**: Run `npx prisma generate` before build
2. **Database Connection**: Check `DATABASE_URL` in `.env` file
3. **API Errors**: Verify Cloudflare credentials and permissions
4. **Build Failures**: Ensure all environment variables are set

### Development Tips

```bash
# Reset database
npm run db:reset

# View database logs
npm run db:push --verbose

# Generate Prisma client
npm run db:generate
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the FAQ section

## 🔗 Live Demo

Coming soon! The application is currently in development.

---

Built with ❤️ using Next.js 15, TypeScript, and Supabase.