'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BarChart, Users, FileText, Building2, Settings, LogOut, Menu, X } from 'lucide-react';

const navItems = [
  { icon: BarChart, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: FileText, label: 'Templates', href: '/templates' },
  { icon: Building2, label: 'Institutions', href: '/institutions' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && <h1 className="text-lg font-bold">CoverCraft Admin</h1>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                title={item.label}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </header>

        <main className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Users', value: '2,450', change: '+12%' },
              { label: 'Active Projects', value: '8,234', change: '+8%' },
              { label: 'Templates', value: '45', change: '+3' },
              { label: 'Institutions', value: '1,200', change: '+50' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-green-600 text-sm mt-2">{stat.change} from last month</p>
              </div>
            ))}
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-4">Users Growth</h3>
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart coming soon...</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-4">Projects by Category</h3>
              <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart coming soon...</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                'New user registered: Rajesh Kumar',
                'Template "Modern Resume" created',
                'Institution logo updated: IIT Delhi',
                'User reported issue: Export PDF formatting',
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
