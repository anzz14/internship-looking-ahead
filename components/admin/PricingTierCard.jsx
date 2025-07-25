import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Star, Clock } from 'lucide-react';

export default function PricingTierCard({ tier, onEdit, onDelete, isDeleting }) {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800 relative overflow-hidden">
      {tier.popular && (
        <div className="absolute -top-2 left-6">
          <Badge className="bg-blue-600 text-white">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}
      
      {/* Color bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`}></div>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {tier.name}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
            <Clock className="w-4 h-4 mr-1" />
            {tier.duration}
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {tier.price}
            {tier.priceRange && (
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {tier.priceRange}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button
            onClick={() => onEdit(tier)}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => onDelete(tier._id)}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
            disabled={isDeleting}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {tier.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{tier.description}</p>
      )}
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Features:</h4>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
