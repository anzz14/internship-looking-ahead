import { Shield } from 'lucide-react';

export default function AdminLoginHeader() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Admin Portal
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Sign in to manage your platform
      </p>
    </div>
  );
}
