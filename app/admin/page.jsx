'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminThemeProvider, useAdminTheme } from './AdminThemeProvider';
import AdminThemeToggle from '@/components/admin/AdminThemeToggle';
import AdminLoginHeader from '@/components/admin/AdminLoginHeader';
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import AdminLoginFooter from '@/components/admin/AdminLoginFooter';

function AdminLoginContent() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isDarkMode, toggleTheme } = useAdminTheme();
  
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Store token in localStorage
        localStorage.setItem('adminToken', data.data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.data.admin));
        
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AdminThemeToggle 
          isDarkMode={isDarkMode} 
          onToggle={toggleTheme} 
        />
        
        <AdminLoginHeader />
        
        <AdminLoginForm 
          formData={formData}
          showPassword={showPassword}
          loading={loading}
          error={error}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onTogglePassword={handleTogglePassword}
        />
        
        <AdminLoginFooter />
      </div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <AdminThemeProvider>
      <AdminLoginContent />
    </AdminThemeProvider>
  );
}
