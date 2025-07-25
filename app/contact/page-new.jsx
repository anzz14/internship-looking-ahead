"use client";

import React, { useState, useEffect } from 'react';
import '../globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import FloatingBackground from '@/components/about/FloatingBackground';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoSidebar from '@/components/contact/ContactInfoSidebar';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 50
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <FloatingBackground />

      <main className="relative z-10">
        <ContactHero />
        <ContactInfoSection />
        
        {/* Main Form Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <ContactForm 
                formData={formData}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
              <ContactInfoSidebar />
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
    </div>
  );
}
