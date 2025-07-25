"use client";

import React, { useEffect } from 'react';
import './globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useIsClient } from '@/lib/useIsClient';

// Import components
import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import FeaturesSection from '@/components/home/FeaturesSection';
import WorkshopPreview from '@/components/home/WorkshopPreview';
import ResourceDownload from '@/components/home/ResourceDownload';
import FAQSection from '@/components/home/FAQSection';
import HomeCTA from '@/components/home/HomeCTA';
import HomeFooter from '@/components/home/HomeFooter';

export default function HomePage() {
  const isClient = useIsClient();
  
  useEffect(() => {
    if (isClient) {
      AOS.init({ 
        duration: 800, 
        once: true, 
        easing: 'ease-out-cubic',
        offset: 50
      });
    }
  }, [isClient]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden" suppressHydrationWarning>
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-green-200/20 dark:bg-green-800/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <main className="relative z-10">
        <HomeHero />
        <HomeStats />
        <FeaturesSection />
        <WorkshopPreview />
        <ResourceDownload />
        <FAQSection />
        <HomeCTA />
      </main>

      <HomeFooter />
    </div>
  );
}
