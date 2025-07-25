"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [planInfo, setPlanInfo] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 50
    });

    // Handle URL parameters for prefilled form
    const subject = searchParams.get('subject');
    const plan = searchParams.get('plan');
    const price = searchParams.get('price');
    const duration = searchParams.get('duration');
    const scrollTo = searchParams.get('scrollTo');

    if (subject || plan) {
      let prefilledMessage = '';
      
      if (plan) {
        // Store plan information for display
        setPlanInfo({
          name: plan,
          price: price,
          duration: duration
        });

        prefilledMessage = `Hello,

I am interested in the ${plan} training package${price ? ` (${price}${duration ? ` - ${duration}` : ''})` : ''}.

Could you please provide more information about:
- Available dates and scheduling
- Specific requirements for our organization
- Any customization options
- Next steps to proceed

Looking forward to hearing from you.

Best regards,`;
      }

      setFormData(prev => ({
        ...prev,
        subject: subject || `Enquiry about ${plan}`,
        message: prefilledMessage
      }));
    }

    // Scroll to form if requested
    if (scrollTo === 'form') {
      // Use a small delay to ensure the page has loaded
      setTimeout(() => {
        const formElement = document.getElementById('contact-form-section');
        if (formElement) {
          formElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          
          // Focus on the name input field after scrolling
          setTimeout(() => {
            const nameInput = document.getElementById('name');
            if (nameInput) {
              nameInput.focus();
            }
          }, 800); // Wait for scroll animation to complete
        }
      }, 500);
    }
  }, [searchParams]);

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
        <section id="contact-form-section" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <ContactForm 
                formData={formData}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                planInfo={planInfo}
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
