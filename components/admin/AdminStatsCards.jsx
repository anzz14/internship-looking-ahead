import { Card } from '@/components/ui/card';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

export default function AdminStatsCards({ stats }) {
  const statsData = [
    {
      title: 'Total Pricing Tiers',
      value: stats?.totalTiers || 0,
      icon: DollarSign,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/10'
    },
    {
      title: 'Active Courses',
      value: stats?.activeCourses || 12,
      icon: Users,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10'
    },
    {
      title: 'Growth Rate',
      value: '+15%',
      icon: TrendingUp,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
