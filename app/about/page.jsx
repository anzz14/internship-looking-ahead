"use client";

import React, { useEffect } from 'react';
import '../globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import component sections
import FloatingBackground from '@/components/about/FloatingBackground';
import HeroSection from '@/components/about/HeroSection';
import StatsSection from '@/components/about/StatsSection';
import AboutStory from '@/components/about/AboutStory';
import ValuesSection from '@/components/about/ValuesSection';
import CTASection from '@/components/about/CTASection';

export default function AboutPage() {
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
        <HeroSection />
        <StatsSection />
        <AboutStory />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  );
}
