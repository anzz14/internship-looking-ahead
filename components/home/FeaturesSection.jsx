import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Wrench, Target } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain />,
      title: "Expert-Led Training",
      description: "Evidence-based workshops led by professionals with real classroom experience in ADHD support.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench />,
      title: "Practical Tools",
      description: "Hands-on strategies and materials designed for immediate use in real classroom environments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target />,
      title: "Diagnostic Support",
      description: "Early identification pathways with tailored next steps for comprehensive student support.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Why Choose <span className="text-blue-600 dark:text-blue-400">Looking Ahead</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            We bridge the gap between ADHD knowledge and classroom practice with proven methods and compassionate support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(feature.icon, { className: "w-7 h-7 sm:w-8 sm:h-8" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
