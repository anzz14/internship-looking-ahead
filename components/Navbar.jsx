'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-background sticky top-0 z-50">
      <h1 className="text-xl font-bold text-primary">Looking Ahead</h1>

      <nav className="flex items-center gap-6 text-sm font-medium text-foreground">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/courses" className="hover:text-primary transition-colors">
          Courses
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>

        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        )}
      </nav>
    </header>
  );
}
