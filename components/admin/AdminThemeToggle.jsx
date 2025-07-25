import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function AdminThemeToggle({ isDarkMode, onToggle }) {
  return (
    <div className="flex justify-end mb-6">
      <Button
        onClick={onToggle}
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0"
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>
    </div>
  );
}
