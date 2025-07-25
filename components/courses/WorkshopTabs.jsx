import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Users, Heart, Shield } from 'lucide-react';

const WorkshopTabs = ({ activeTab, setActiveTab }) => {
  const workshopHighlights = [
    { icon: <Target className="w-5 h-5" />, text: "Evidence-based techniques", color: "bg-blue-500" },
    { icon: <Users className="w-5 h-5" />, text: "Interactive delivery", color: "bg-purple-500" },
    { icon: <Heart className="w-5 h-5" />, text: "Inclusive approach", color: "bg-pink-500" },
    { icon: <Shield className="w-5 h-5" />, text: "Fully accredited", color: "bg-green-500" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Training Programmes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the programme that best fits your school's needs and staff development goals.
          </p>
        </div>

        {/* Workshop Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workshopHighlights.map((highlight, index) => (
            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${highlight.color} text-white mb-3 mx-auto`}>
                {highlight.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight.text}</p>
            </div>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="students">Student Sessions</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workshops" className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ADHD Awareness Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Professional development sessions for teachers and school staff
              </p>
            </div>
            {/* Workshop content would go here */}
          </TabsContent>
          
          <TabsContent value="students" className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Student Support Sessions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Direct support sessions for students with ADHD
              </p>
            </div>
            {/* Student content would go here */}
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Training Packages
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Flexible pricing options to suit every school's budget
              </p>
            </div>
            {/* Pricing content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WorkshopTabs;
