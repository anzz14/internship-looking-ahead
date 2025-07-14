'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Home, User, BookOpen, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      // Change navbar when scrolled past 50px instead of 100px for contact page
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-800/20' 
        : 'bg-white/10 dark:bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-lg sm:text-xl text-gray-900 dark:text-white' 
                  : 'text-xl sm:text-2xl text-gray-900 dark:text-white'
              } group-hover:scale-105`}>
                Looking Ahead
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 lg:px-4 py-2 rounded-full transition-all duration-300 group ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className={`transition-all duration-300 ${
                      isScrolled 
                        ? 'w-4 h-4 opacity-100' 
                        : 'w-0 h-0 opacity-0'
                    }`} />
                    <span className={`font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-sm opacity-0 w-0 overflow-hidden' 
                        : 'text-sm opacity-100 w-auto'
                    }`}>
                      {item.label}
                    </span>
                    <span className={`font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-sm opacity-100 w-auto' 
                        : 'text-sm opacity-0 w-0 overflow-hidden absolute'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10'
                      : 'bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10'
                  }`} />
                </Link>
              );
            })}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`ml-2 lg:ml-4 relative rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                <Sun className={`h-4 w-4 transition-all duration-300 ${
                  theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                }`} />
                <Moon className={`absolute h-4 w-4 transition-all duration-300 ${
                  theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
                }`} />
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-white/20 dark:border-gray-800/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Mobile Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 w-full"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="font-medium">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
