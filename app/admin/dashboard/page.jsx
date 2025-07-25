'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AdminThemeProvider, useAdminTheme } from '../AdminThemeProvider';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminStatsCards from '@/components/admin/AdminStatsCards';
import AdminDashboardContent from '@/components/admin/AdminDashboardContent';

function AdminDashboardPage() {
  const [pricingTiers, setPricingTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const { isDarkMode, toggleTheme } = useAdminTheme();
  const router = useRouter();

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    
    if (!token || !user) {
      router.push('/admin');
      return;
    }
    
    setAdminUser(JSON.parse(user));
    fetchPricingTiers();
  }, [router]);

  const fetchPricingTiers = async () => {
    try {
      const response = await fetch('/api/admin/pricing');
      const data = await response.json();
      
      if (data.success) {
        setPricingTiers(data.data);
      }
    } catch (error) {
      console.error('Error fetching pricing tiers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin');
  };

  const handleAddTier = async (tierData) => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch('/api/admin/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tierData)
      });

      const data = await response.json();

      if (data.success) {
        await fetchPricingTiers();
        return true;
      } else {
        alert('Error: ' + data.error);
        return false;
      }
    } catch (error) {
      console.error('Error adding tier:', error);
      alert('Error adding pricing tier');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleEditTier = async (tierId, tierData) => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch(`/api/admin/pricing/${tierId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tierData)
      });

      const data = await response.json();

      if (data.success) {
        await fetchPricingTiers();
        return true;
      } else {
        alert('Error: ' + data.error);
        return false;
      }
    } catch (error) {
      console.error('Error updating tier:', error);
      alert('Error updating pricing tier');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTier = async (tierId) => {
    if (!confirm('Are you sure you want to delete this pricing tier?')) return;

    setDeletingId(tierId);
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch(`/api/admin/pricing/${tierId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        await fetchPricingTiers();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error deleting tier:', error);
      alert('Error deleting pricing tier');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading && !adminUser) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader 
        adminUser={adminUser}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdminStatsCards 
          stats={{
            totalTiers: pricingTiers.length,
            activeCourses: 12,
            growthRate: '+15%'
          }}
        />

        <AdminDashboardContent
          tiers={pricingTiers}
          onAddTier={handleAddTier}
          onEditTier={handleEditTier}
          onDeleteTier={handleDeleteTier}
          deletingId={deletingId}
          isLoading={loading}
        />
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AdminThemeProvider>
      <AdminDashboardPage />
    </AdminThemeProvider>
  )
}
