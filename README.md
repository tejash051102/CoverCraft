# CoverCraft India

An AI-powered academic cover page builder that helps students create professional assignment, practical, project, internship, and report cover pages in minutes. Featuring customizable templates, drag-and-drop editing, institution logo support, and PDF export. Works seamlessly on mobile and desktop.

🎓✨ **The Canva for Indian Students' Academic Documents**

## 🎯 Vision

CoverCraft transforms how Indian students create professional academic cover pages by providing:
- **Drag-and-drop Canva-like editor** for intuitive design
- **Institution-specific branding** with 50,000+ Indian schools, colleges, and universities
- **AI-powered design suggestions** and auto-generation
- **Multiple export formats** (PDF, PNG, JPG, SVG, Print-ready)
- **Cross-platform** (Web, iOS, Android, Tablets)
- **Offline-first mobile app** with cloud sync

## 📚 Supported Document Types

- Assignment Cover
- Practical File Cover
- Project Report Cover
- Internship Report
- Industrial Training Report
- Seminar Report
- Research Paper
- Thesis & Dissertation
- Lab Manual
- Notebook Cover
- Portfolio Cover
- Resume
- Certificates
- ID Cards

## ✨ Key Features

### 🎨 Professional Editor
- Drag-and-drop canvas (A4, A3, Letter, Legal, custom sizes)
- Layer management (lock, duplicate, group, align)
- Smart guides, rulers, grid, zoom controls
- Undo/Redo, keyboard shortcuts
- 15+ professionally designed templates

### 🏫 Institution Database
- 50,000+ Indian educational institutions
- Automatic logo and color application
- University-specific formatting rules
- Search with state/city/type filters
- User submissions for missing institutions

### 🤖 AI-Powered Features
- AI cover page generation from text
- Design suggestions and auto-alignment
- Automatic field detection
- PDF/DOCX to cover page conversion
- Background removal for photos

### ☁️ Cloud & Sync
- Auto-save with version history
- Offline editing (mobile)
- Auto-sync when online
- Cloud storage management
- Favorites and recent files

### 📥 Export & Share
- High-quality PDF (300 DPI)
- PNG, JPG, SVG, DOCX
- Direct print support
- Share via WhatsApp, Email, Google Drive
- QR code generation

### 👥 Multi-User Features
- Student profiles with auto-fill
- Institution accounts
- Faculty portals
- QR code sharing for assignments
- Template marketplace

### 🌍 Localization
- English, Hindi, Marathi, Gujarati
- Tamil, Telugu, Kannada, Punjabi
- Bengali, Malayalam, Odia

## 🏗 Tech Stack

### Frontend (Web)
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Canvas Editor**: Fabric.js / Konva.js
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Data Fetching**: React Query (TanStack Query)

### Mobile App (React Native)
- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **Canvas**: Fabric.js compatible or Skia
- **State**: Zustand
- **Storage**: AsyncStorage + SQLite (offline)

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose
- **Cache**: Redis
- **File Storage**: AWS S3 / Cloudinary
- **Queue**: BullMQ
- **Real-time**: Socket.IO
- **Auth**: JWT + OAuth (Google, Apple)

### Admin Dashboard
- **Framework**: Next.js
- **Styling**: Tailwind CSS + Material UI
- **Charts**: Recharts
- **Tables**: React Data Table

### Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Web Server**: Nginx
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (Frontend), Render/Railway (Backend)
- **Database**: MongoDB Atlas
- **CDN**: Cloudflare
- **Analytics**: PostHog / Mixpanel

## 📂 Project Structure

```
CoverCraft/
├── apps/
│   ├── web/                 # Next.js web application
│   ├── mobile/              # React Native Expo app
│   ├── admin/               # Admin dashboard
│   └── api/                 # Express.js backend
├── packages/
│   ├── shared/              # Shared TypeScript utilities
│   ├── database/            # MongoDB schemas & migrations
│   ├── email/               # Email templates & service
│   └── ui/                  # Shared UI components
├── docs/                    # Documentation
├── scripts/                 # Build and deployment scripts
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── docker-compose.yml       # Local development
├── pnpm-workspace.yaml      # Monorepo config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm
- Docker & Docker Compose
- MongoDB Atlas account
- AWS S3 or Cloudinary account

### Installation

```bash
# Clone repository
git clone https://github.com/tejash051102/CoverCraft.git
cd CoverCraft

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local

# Start local development
docker-compose up -d
pnpm dev
```

## 📋 Roadmap

### Phase 1 (MVP) - Weeks 1-4
- [ ] Core Next.js project setup
- [ ] Express.js backend with MongoDB
- [ ] Fabric.js editor integration
- [ ] 5 basic templates
- [ ] User authentication (Email/Google)
- [ ] PDF export
- [ ] Institution database (1000+ institutions)

### Phase 2 - Weeks 5-8
- [ ] React Native mobile app
- [ ] Offline editing & sync
- [ ] AI cover generation
- [ ] Advanced editor features (effects, masks, etc.)
- [ ] Admin dashboard
- [ ] 15+ templates

### Phase 3 - Weeks 9-12
- [ ] Premium subscriptions
- [ ] Template marketplace
- [ ] Faculty portal
- [ ] Multi-language support
- [ ] Advanced AI features
- [ ] Analytics & monitoring

### Phase 4 - Post-Launch
- [ ] App Store / Play Store release
- [ ] Performance optimization
- [ ] Community features
- [ ] Integrations (Google Drive, OneDrive)
- [ ] Advanced analytics

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📞 Support

- 📧 Email: support@covercraft.in
- 🐛 Issues: [GitHub Issues](https://github.com/tejash051102/CoverCraft/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/tejash051102/CoverCraft/discussions)

---

**Built with ❤️ for Indian students by [Tejash](https://github.com/tejash051102)**
