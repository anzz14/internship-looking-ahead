"use client";

import React, { useState, useEffect } from 'react';
import '../globals.css';
import dynamic from 'next/dynamic';

// Import components
import FloatingBackground from '@/components/about/FloatingBackground';
import CoursesHero from '@/components/courses/CoursesHero';
import WorkshopDetails from '@/components/courses/WorkshopDetails';
import SupportServices from '@/components/courses/SupportServices';
import PricingSection from '@/components/courses/PricingSection';
import StudentWorkshops from '@/components/courses/StudentWorkshops';
import CoursesCTA from '@/components/courses/CoursesCTA';

// Dynamically import AOS to prevent hydration issues
const AOS = dynamic(() => import('aos'), { ssr: false });

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('workshops');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Initialize AOS only on client side
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ 
        duration: 800, 
        once: true, 
        easing: 'ease-out-cubic',
        offset: 50
      });
    };
    
    initAOS();
  }, []);

  if (!isClient) {
    // Return a basic version without AOS animations for SSR
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <FloatingBackground />
        <main className="relative z-10">
          <CoursesHero />
          <WorkshopDetails />
          <SupportServices />
          <PricingSection />
          <StudentWorkshops />
          <CoursesCTA />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <FloatingBackground />

      <main className="relative z-10">
        <CoursesHero />
        <WorkshopDetails />
        <SupportServices />
        <PricingSection />
        <StudentWorkshops />
        <CoursesCTA />
      </main>
    </div>
  );
}
