import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Star, Brain } from 'lucide-react';

const StudentWorkshops = () => {
  const studentWorkshops = [
    {
      title: "Thriving Under Pressure",
      description: "Stress management and coping strategies for academic success",
      duration: "60 mins",
      color: "from-blue-500 to-cyan-500",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Confidence & Identity",
      description: "Building self-esteem and understanding personal strengths",
      duration: "60 mins",
      color: "from-purple-500 to-pink-500",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Mindfulness for Teens",
      description: "Meditation techniques and emotional regulation skills",
      duration: "60 mins",
      color: "from-green-500 to-teal-500",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Student Support Sessions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Direct support workshops designed specifically for students with ADHD to build confidence and develop essential life skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studentWorkshops.map((workshop, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${workshop.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {workshop.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{workshop.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{workshop.description}</p>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Duration: {workshop.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentWorkshops;
