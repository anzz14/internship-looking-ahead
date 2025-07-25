import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Phone } from 'lucide-react';

const ContactInfoSidebar = () => {
  return (
    <div className="space-y-8" data-aos="fade-left">
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl">
        <CardContent className="p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Contact Us?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">Workshop Booking</p>
                <p className="text-gray-600 dark:text-gray-300">Schedule ADHD awareness training for your school or organization</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">Custom Solutions</p>
                <p className="text-gray-600 dark:text-gray-300">Tailored ADHD support programs for your specific needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">General Support</p>
                <p className="text-gray-600 dark:text-gray-300">Questions about ADHD strategies, resources, and best practices</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
        <CardContent className="p-8 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Prefer to call or email?
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email us at</p>
                <a 
                  href="mailto:siddiqia@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors"
                >
                  siddiqia@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Call us at</p>
                <a 
                  href="tel:07889393700" 
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold text-lg transition-colors"
                >
                  07889393700
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfoSidebar;
