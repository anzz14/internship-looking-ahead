import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const HomeHero = ({ isLoaded }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8" data-aos="fade-up">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Empowering Every Child to Thrive
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Understanding
              <br />
              <span className="text-blue-600 dark:text-blue-400">ADHD</span> in Schools
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              We help schools identify and support students with ADHD through expert training, practical tools, and inclusive classroom strategies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            >
              <Link href="/courses" className="flex items-center gap-2 justify-center">
                Start Your Journey
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 dark:border-gray-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
