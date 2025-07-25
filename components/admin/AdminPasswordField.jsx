import { Input } from '@/components/ui/input';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function AdminPasswordField({ value, onChange, showPassword, onToggleShow }) {
  return (
    <div className="space-y-1">
      <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          value={value}
          onChange={onChange}
          className="pl-9 pr-9 h-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={onToggleShow}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
