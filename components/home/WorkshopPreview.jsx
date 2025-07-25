import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const WorkshopPreview = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Available Now
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              ADHD Awareness Workshops
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive training designed for teachers, SENCOs, and all school staff working with neurodiverse learners.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Duration: 1-5 hours (flexible)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">In-person or online delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">CPD certificates provided</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full">
                Book Workshop
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 sm:px-8 sm:py-4 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Next Workshop</h3>
                <p className="text-gray-600 dark:text-gray-300">Available for booking now</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopPreview;
