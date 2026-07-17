# CoverCraft Web Application

Next.js 14 web application with modern UI, Fabric.js canvas editor, and drag-and-drop design.

## Features

- 🎨 Fabric.js/Konva.js powered drag-and-drop editor
- 🎯 Responsive design with Tailwind CSS
- 🚀 Server-side rendering with Next.js 14
- 📱 Mobile-first approach
- 🌙 Dark mode support
- ⚡ Fast performance with optimizations

## Getting Started

```bash
cd apps/web
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── services/        # API and external services
├── stores/          # Zustand state management
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Environment Variables

Create `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```
