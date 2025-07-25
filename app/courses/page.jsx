"use client";

import React, { useState, useEffect } from 'react';
import '../globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import FloatingBackground from '@/components/about/FloatingBackground';
import CoursesHero from '@/components/courses/CoursesHero';
import WorkshopDetails from '@/components/courses/WorkshopDetails';
import SupportServices from '@/components/courses/SupportServices';
import PricingSection from '@/components/courses/PricingSection';
import StudentWorkshops from '@/components/courses/StudentWorkshops';
import CoursesCTA from '@/components/courses/CoursesCTA';

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('workshops');
  
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 50
    });
  }, []);

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
