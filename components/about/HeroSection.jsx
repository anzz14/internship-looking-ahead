import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8" data-aos="fade-up">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            About Our Mission
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Empowering Every Child
            <br />
            to <span className="text-blue-600 dark:text-blue-400">Reach Their Potential</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            At Looking Ahead, we're passionate about creating inclusive educational environments where every child can thrive. 
            Our mission is to bridge the gap between ADHD knowledge and practical classroom implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
