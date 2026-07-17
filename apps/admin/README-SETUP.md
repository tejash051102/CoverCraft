# CoverCraft Admin Dashboard

Next.js 14 admin dashboard for managing CoverCraft platform.

## Features

- 📊 Dashboard with key metrics
- 👥 User management and moderation
- 📄 Template approval and management
- 🏫 Institution database management
- 📈 Analytics and reporting
- ⚙️ System settings and configuration

## Getting Started

```bash
cd apps/admin
pnpm install
pnpm dev
```

Access at `http://localhost:3002`

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Dashboard components
├── services/         # API integration
├── stores/          # State management
├── types/           # TypeScript types
└── utils/           # Utility functions
```

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

## Routes

- `/` - Dashboard overview
- `/users` - User management
- `/templates` - Template management
- `/institutions` - Institution database
- `/settings` - Admin settings
