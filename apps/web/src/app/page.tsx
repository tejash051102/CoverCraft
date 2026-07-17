'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">CoverCraft</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Create Professional Cover Pages in Minutes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              CoverCraft is the Canva for Indian students. Design beautiful assignment covers, project
              reports, and practical files with AI-powered suggestions and institution branding.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/editor"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-semibold"
              >
                Start Creating <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/templates"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-semibold"
              >
                Browse Templates
              </Link>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to create your first cover page?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of Indian students creating professional covers</p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Start Free Today
          </Link>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: '🎨',
    title: 'Drag-and-Drop Editor',
    description: 'Just like Canva. Drag elements, resize, rotate, and customize your cover page easily.',
  },
  {
    icon: '🏫',
    title: '50,000+ Institutions',
    description: 'Auto-load logos and colors from your college or university. Or upload your own.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Design',
    description: 'Get smart suggestions for fonts, colors, layout, and auto-generate covers from text.',
  },
  {
    icon: '📄',
    title: 'Multiple Export Formats',
    description: 'Download as PDF, PNG, JPG, SVG, or print-ready. High-quality 300 DPI output.',
  },
  {
    icon: '📱',
    title: 'Mobile & Desktop',
    description: 'Create on the go with our iOS and Android apps, or use the full-featured web editor.',
  },
  {
    icon: '☁️',
    title: 'Cloud Storage',
    description: 'Auto-save your work, version history, and access projects from anywhere anytime.',
  },
];
