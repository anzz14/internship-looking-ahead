import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-20 px-6 bg-[#17263a] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Join hundreds of schools already benefiting from our evidence-based ADHD training programmes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              View Our Courses
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Button>
          </Link>
          <Link href="/about">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
