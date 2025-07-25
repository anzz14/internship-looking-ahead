import React from 'react';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Clock, BookOpen, Heart, CheckCircle } from 'lucide-react';

const QualificationCard = ({ qualification }) => (
  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
      {qualification.icon}
    </div>
    <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{qualification.text}</span>
  </div>
);

const ImpactCard = () => {
  const impacts = [
    "Improved classroom management",
    "Enhanced student engagement", 
    "Better teacher confidence",
    "Reduced behavioral incidents",
    "Increased academic achievement",
    "Stronger school communities"
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Impact</h3>
        </div>
        
        <div className="space-y-4">
          {impacts.map((impact, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{impact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutStory = () => {
  const qualifications = [
    { text: "MA in Special Educational Needs", icon: <GraduationCap className="w-4 h-4" /> },
    { text: "ADHD Foundation Certified", icon: <Award className="w-4 h-4" /> },
    { text: "10+ Years Classroom Experience", icon: <Clock className="w-4 h-4" /> },
    { text: "Specialist SENCO Training", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm">
                Our Story
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                From Classroom Experience to Expert Training
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Looking Ahead was founded by educators who experienced firsthand the challenges of supporting students with ADHD 
                in traditional classroom settings. We recognized the gap between theoretical knowledge and practical implementation, 
                and set out to create training programs that truly make a difference.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Our approach is unique because it's rooted in real classroom experience. We understand the daily pressures teachers face, 
                the constraints of curriculum demands, and the need for practical, immediately applicable strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {qualifications.map((qual, index) => (
                <QualificationCard key={index} qualification={qual} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <ImpactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
