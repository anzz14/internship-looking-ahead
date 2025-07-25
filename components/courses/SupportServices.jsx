import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Monitor, Users, Handshake } from 'lucide-react';

const SupportServices = () => {
  const services = [
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "Training Materials", 
      desc: "Comprehensive resources for teachers" 
    },
    { 
      icon: <Monitor className="w-8 h-8" />, 
      title: "Online Content", 
      desc: "Digital tools to break stigma" 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Consulting", 
      desc: "Direct support for schools & NGOs" 
    },
    { 
      icon: <Handshake className="w-8 h-8" />, 
      title: "Partnerships", 
      desc: "Collaborate with education authorities" 
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Complete Support Package
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond training, we offer comprehensive support to ensure lasting impact in your educational environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
