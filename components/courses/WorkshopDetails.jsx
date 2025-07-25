import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Monitor, Brain, Eye, Users, Heart, Lightbulb, MessageCircle, FileText } from 'lucide-react';

const WorkshopDetails = () => {
  const workshopFeatures = [
    { icon: <Eye className="w-5 h-5" />, text: "ADHD overview (Inattentive, Hyperactive, Combined)" },
    { icon: <Users className="w-5 h-5" />, text: "Real classroom examples and scenarios" },
    { icon: <Heart className="w-5 h-5" />, text: "Understanding the emotional side of ADHD" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Practical strategies and teaching tools" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "Interactive case study discussions" },
    { icon: <FileText className="w-5 h-5" />, text: "Comprehensive resource materials" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                CPD Certified
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Understanding ADHD in the Classroom
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Our flagship workshop covering everything educators need to know about supporting students with ADHD.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">1-5 Hours</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Flexible duration</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Hybrid</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Online or in-person</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Workshop Coverage</h3>
                </div>
                
                <div className="space-y-4">
                  {workshopFeatures.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <div className="text-blue-600 dark:text-blue-400 mt-0.5">{item.icon}</div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
