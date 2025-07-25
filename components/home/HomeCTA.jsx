import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, BookOpen } from 'lucide-react';
import Link from 'next/link';

const HomeCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-800 to-indigo-900" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Transform Your School's ADHD Support?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of schools already making a difference with our comprehensive ADHD training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get in Touch
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 bg-white border-white text-blue-600 hover:bg-white hover:text-blue-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto min-h-[48px]"
            >
              <Link href="/courses" className="flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View All Courses
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
