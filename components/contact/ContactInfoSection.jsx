import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfoCard = ({ info, index }) => (
  <Card 
    className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <CardContent className="p-6 sm:p-8 text-center">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {React.cloneElement(info.icon, { className: "w-8 h-8" })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{info.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{info.description}</p>
      {info.href ? (
        <a 
          href={info.href}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-lg transition-colors duration-200"
        >
          {info.contact}
        </a>
      ) : (
        <p className="text-gray-900 dark:text-white font-semibold text-lg">{info.contact}</p>
      )}
    </CardContent>
  </Card>
);

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "siddiqia@gmail.com",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:siddiqia@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us", 
      description: "Speak directly with our team",
      contact: "07889393700",
      color: "from-green-500 to-emerald-500",
      href: "tel:07889393700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Our location",
      contact: "Leicester, UK",
      color: "from-purple-500 to-pink-500",
      href: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      description: "We typically respond within",
      contact: "24 hours",
      color: "from-orange-500 to-amber-500",
      href: null
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} info={info} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
