'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, PoundSterling, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [pricingTiers, setPricingTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback static data in case API fails
  const fallbackTiers = [
    {
      name: "Quick Start",
      price: "£350",
      priceRange: "£350-£500",
      duration: "2-3 hours",
      description: "Perfect for introducing ADHD awareness to your team",
      features: [
        "Interactive workshop session",
        "Digital resource pack",
        "CPD certificates",
        "Email support",
        "Basic follow-up materials"
      ],
      color: "from-blue-500 to-purple-500",
      popular: false
    },
    {
      name: "Complete Training",
      price: "£600",
      priceRange: "£600-£900",
      duration: "Full day (5 hours)",
      description: "Comprehensive training for whole-school transformation",
      features: [
        "Full day comprehensive training",
        "Complete resource library",
        "All staff CPD certificates",
        "3-month follow-up support",
        "Customized action plan",
        "Progress tracking tools"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    }
  ];

  useEffect(() => {
    fetchPricingTiers();
  }, []);

  const fetchPricingTiers = async () => {
    try {
      const response = await fetch('/api/admin/pricing');
      const data = await response.json();
      
      if (data.success && data.data.length > 0) {
        setPricingTiers(data.data);
      } else {
        // Use fallback data if no tiers in database
        setPricingTiers(fallbackTiers);
      }
    } catch (error) {
      console.error('Error fetching pricing tiers:', error);
      setError('Failed to load pricing');
      // Use fallback data on error
      setPricingTiers(fallbackTiers);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            <PoundSterling className="w-4 h-4 mr-2" />
            Training Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Training Package
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible options designed to meet your school's specific needs and budget requirements.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            <span className="ml-2 text-gray-600 dark:text-gray-300">Loading pricing options...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <p className="text-gray-600 dark:text-gray-300">Showing default pricing options</p>
          </div>
        ) : null}

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={tier._id || index} 
              className={`relative overflow-hidden border-0 shadow-xl ${tier.popular ? 'ring-2 ring-purple-500 dark:ring-purple-400' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-purple-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-4`}>
                    <PoundSterling className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{tier.price}</div>
                  {tier.priceRange && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{tier.priceRange}</p>
                  )}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{tier.duration}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white py-3 rounded-xl font-semibold`}
                  size="lg"
                >
                  Book {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
