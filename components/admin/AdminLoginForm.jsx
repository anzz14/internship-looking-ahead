'use client';

import { Card } from '@/components/ui/card';
import AdminErrorMessage from './AdminErrorMessage';
import AdminUsernameField from './AdminUsernameField';
import AdminPasswordField from './AdminPasswordField';
import AdminLoginButton from './AdminLoginButton';

export default function AdminLoginForm({ 
  formData, 
  showPassword, 
  loading, 
  error, 
  onSubmit, 
  onChange, 
  onTogglePassword 
}) {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <form onSubmit={onSubmit} className="space-y-4">
        <AdminErrorMessage error={error} />
        
        <AdminUsernameField 
          value={formData.username}
          onChange={onChange}
        />
        
        <AdminPasswordField 
          value={formData.password}
          onChange={onChange}
          showPassword={showPassword}
          onToggleShow={onTogglePassword}
        />
        
        <AdminLoginButton isLoading={loading} />
      </form>
    </Card>
  );
}
