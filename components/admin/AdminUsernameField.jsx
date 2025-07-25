import { Input } from '@/components/ui/input';
import { User } from 'lucide-react';

export default function AdminUsernameField({ value, onChange }) {
  return (
    <div className="space-y-1">
      <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Username or Email
      </label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          id="username"
          name="username"
          type="text"
          required
          value={value}
          onChange={onChange}
          className="pl-9 h-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter your username"
        />
      </div>
    </div>
  );
}
