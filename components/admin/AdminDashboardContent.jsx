'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import PricingTierForm from './PricingTierForm';
import PricingTiersList from './PricingTiersList';

export default function AdminDashboardContent({ 
  tiers, 
  onAddTier, 
  onEditTier, 
  onDeleteTier, 
  deletingId, 
  isLoading 
}) {
  const [showForm, setShowForm] = useState(false);
  const [editingTier, setEditingTier] = useState(null);

  const handleAddTier = async (tierData) => {
    const success = await onAddTier(tierData);
    if (success) {
      setShowForm(false);
    }
  };

  const handleEditTier = async (tierData) => {
    const success = await onEditTier(editingTier._id, tierData);
    if (success) {
      setEditingTier(null);
    }
  };

  const handleStartEdit = (tier) => {
    setEditingTier(tier);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTier(null);
  };

  return (
    <div className="space-y-6">
      {/* Add New Tier Button */}
      {!showForm && !editingTier && (
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Manage Pricing Tiers
          </h2>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Tier
          </Button>
        </div>
      )}

      {/* Add Form */}
      {showForm && (
        <PricingTierForm
          onSubmit={handleAddTier}
          onCancel={handleCancelForm}
          isLoading={isLoading}
        />
      )}

      {/* Edit Form */}
      {editingTier && (
        <PricingTierForm
          onSubmit={handleEditTier}
          onCancel={handleCancelForm}
          initialData={editingTier}
          isLoading={isLoading}
        />
      )}

      {/* Pricing Tiers List */}
      <PricingTiersList
        tiers={tiers}
        onEdit={handleStartEdit}
        onDelete={onDeleteTier}
        deletingId={deletingId}
      />
    </div>
  );
}
