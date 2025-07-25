import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Users, Shield } from 'lucide-react';

const ValueCard = ({ value, index }) => (
  <Card 
    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 150}
  >
    <CardContent className="p-6 sm:p-8 text-center">
      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${value.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {value.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{value.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{value.description}</p>
    </CardContent>
  </Card>
);

const ValuesSection = () => {
  const teamValues = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Compassionate Approach",
      description: "We understand that every child is unique and deserves personalized support tailored to their individual needs.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Evidence-Based Methods",
      description: "Our training is grounded in the latest research and proven strategies that work in real classroom environments.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Inclusive Education",
      description: "We believe in creating learning environments where all students can thrive and reach their full potential.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Professional Excellence",
      description: "Our team consists of qualified professionals with extensive experience in education and ADHD support.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our Core Values
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            These principles guide everything we do and shape how we approach ADHD education and support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamValues.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
