import React from 'react';
import { Clock, BookOpen, Users, Target } from 'lucide-react';

const StatCard = ({ stat, index }) => (
  <div 
    className="text-center group bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
    data-aos="zoom-in"
    data-aos-delay={index * 100}
  >
    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(stat.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
    </div>
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
  </div>
);

const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "500+", label: "Schools Trained", icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "10,000+", label: "Students Impacted", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
