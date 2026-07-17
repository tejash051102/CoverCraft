# CoverCraft Mobile App

React Native Expo application with offline-first capabilities and cross-platform support.

## Features

- 📱 iOS and Android support via Expo
- 🔌 Offline-first with automatic sync
- 💾 Local SQLite database
- 🎨 Native UI with Ionicons
- ⚡ Fast performance
- 📸 Image picker and file system access

## Getting Started

```bash
cd apps/mobile
pnpm install
pnpm start
```

Then choose:
- `a` for Android
- `i` for iOS
- `w` for web

## Project Structure

```
src/
├── app/                 # Expo Router navigation
├── components/          # Reusable components
├── screens/            # Screen components
├── hooks/              # Custom hooks
├── services/           # Business logic
├── stores/             # Zustand stores
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Development

Install Expo CLI:

```bash
pnpm install -g expo-cli
```

Build for App Store/Play Store:

```bash
pnpm build:ios
pnpm build:android
```

Submit:

```bash
pnpm submit:ios
pnpm submit:android
```
