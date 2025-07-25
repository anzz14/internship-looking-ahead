import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Target, Heart } from 'lucide-react';
import { downloadResourcePack } from '@/lib/downloadUtils';

const ResourceDownload = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
            <Download className="w-4 h-4 mr-2" />
            Free Resources
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Download Our Complete ADHD Resource Pack
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant access to our comprehensive collection of ADHD support materials, classroom strategies, and assessment tools.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Teaching Strategies</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Practical classroom techniques and adaptations</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Early identification checklists and forms</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support Materials</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Parent guides and communication templates</p>
            </div>
          </div>
          
          <div className="pt-6">
            <Button 
              size="lg"
              onClick={downloadResourcePack}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Complete Resource Pack
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Free download • No signup required • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDownload;
