import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CoverCraft Admin Dashboard',
  description: 'Manage CoverCraft - templates, institutions, users, and analytics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
