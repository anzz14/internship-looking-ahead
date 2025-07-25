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
    priceRange: initialData?.priceRange || '',
    duration: initialData?.duration || '',
    description: initialData?.description || '',
    features: initialData?.features ? initialData.features.join('\n') : '',
    color: initialData?.color || 'from-blue-500 to-purple-500',
    popular: initialData?.popular || false
  });

  const colorOptions = [
    'from-blue-500 to-purple-500',
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-purple-500',
    'from-indigo-500 to-blue-500',
    'from-purple-500 to-pink-500'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const tierData = {
      ...formData,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Price
            </label>
            <Input
              type="text"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              placeholder="e.g., $29"
              required
              className="bg-white dark:bg-gray-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price Range (Optional)
            </label>
            <Input
              type="text"
              value={formData.priceRange}
              onChange={(e) => handleChange('priceRange', e.target.value)}
              placeholder="e.g., $25-35"
              className="bg-white dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Duration
            </label>
            <Input
              type="text"
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              placeholder="e.g., per session"
              required
              className="bg-white dark:bg-gray-700"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Describe this pricing tier..."
            rows={3}
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
            placeholder="Individual ADHD coaching sessions&#10;Personalized study strategies&#10;Weekly progress check-ins"
            rows={4}
            required
            className="bg-white dark:bg-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Color Theme
            </label>
            <select
              value={formData.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
            >
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color.replace('from-', '').replace('to-', ' to ').replace('-500', '')}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-3 pt-6">
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
