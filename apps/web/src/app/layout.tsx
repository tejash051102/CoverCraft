import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'CoverCraft - AI-Powered Academic Cover Page Builder',
  description:
    'Create professional assignment, practical, and project cover pages in minutes with AI-powered suggestions and drag-and-drop editing.',
  keywords: [
    'cover page',
    'assignment',
    'practical',
    'project report',
    'AI',
    'students',
    'template',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
