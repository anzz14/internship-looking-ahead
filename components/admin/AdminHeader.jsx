'use client';

import { Button } from '@/components/ui/button';
import { Settings, LogOut, Moon, Sun } from 'lucide-react';

export default function AdminHeader({ adminUser, isDarkMode, onToggleTheme, onLogout }) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {adminUser?.username}
            </span>
            <Button
              onClick={onToggleTheme}
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="text-gray-600 dark:text-gray-300"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
