'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function PricingTierForm({ onSubmit, onCancel, initialData = null, isLoading = false }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    price: initialData?.price || '',
    features: initialData?.features ? initialData.features.join('\n') : '',
    popular: initialData?.popular || false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tierData = {
      ...formData,
      price: parseFloat(formData.price),
      features: formData.features.split('\n').filter(feature => feature.trim() !== '')
    };
    onSubmit(tierData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-6 bg-white dark:bg-gray-800 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {initialData ? 'Edit Pricing Tier' : 'Add New Pricing Tier'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tier Name
          </label>
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="e.g., Basic Plan"
            required
            className="bg-white dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price ($)
          </label>
          <Input
            type="number"
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
            placeholder="e.g., 29.99"
            step="0.01"
            min="0"
            required
            className="bg-white dark:bg-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Features (one per line)
          </label>
          <Textarea
            value={formData.features}
            onChange={(e) => handleChange('features', e.target.value)}
            placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            rows={4}
            required
            className="bg-white dark:bg-gray-700"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="popular"
            checked={formData.popular}
            onChange={(e) => handleChange('popular', e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="popular" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Mark as Popular
          </label>
          {formData.popular && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Popular
            </Badge>
          )}
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : (initialData ? 'Update Tier' : 'Add Tier')}
          </Button>
        </div>
      </form>
    </Card>
  );
}
