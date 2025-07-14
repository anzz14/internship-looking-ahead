"use client";

import '../globals.css'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare, Clock, Globe, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-pink-200/10 dark:bg-pink-800/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-6 sm:space-y-8" data-aos="fade-up">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Get In Touch
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                Contact
                <br />
                <span className="text-blue-600 dark:text-blue-400">Our Team</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                Have questions about our ADHD workshops or need support? We're here to help and would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
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
                        className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {info.contact}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-semibold">{info.contact}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Form */}
              <div className="space-y-8" data-aos="fade-right">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    Send us a message
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. We typically respond within 24 hours.
                  </p>
                </div>

                <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
                  <CardContent className="p-8 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          <User className="w-4 h-4 inline mr-2" />
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all duration-200 text-base backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all duration-200 text-base backdrop-blur-sm"
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all duration-200 text-base backdrop-blur-sm"
                          placeholder="What's this about?"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all duration-200 resize-none text-base backdrop-blur-sm"
                          placeholder="Tell us about your inquiry, workshop needs, or any questions you have..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <p className="text-green-800 dark:text-green-200 font-medium">
                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                          </p>
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          <p className="text-red-800 dark:text-red-200 font-medium">
                            Sorry, there was an error sending your message. Please try again or contact us directly.
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-8" data-aos="fade-left">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl">
                  <CardContent className="p-8 sm:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      Why Contact Us?
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">Workshop Booking</p>
                          <p className="text-gray-600 dark:text-gray-300">Schedule ADHD awareness training for your school or organization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">Custom Solutions</p>
                          <p className="text-gray-600 dark:text-gray-300">Tailored ADHD support programs for your specific needs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-lg mb-2">General Support</p>
                          <p className="text-gray-600 dark:text-gray-300">Questions about ADHD strategies, resources, and best practices</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl">
                  <CardContent className="p-8 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Prefer to call or email?
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email us at</p>
                          <a 
                            href="mailto:siddiqia@gmail.com" 
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-lg transition-colors"
                          >
                            siddiqia@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Call us at</p>
                          <a 
                            href="tel:07889393700" 
                            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold text-lg transition-colors"
                          >
                            07889393700
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
    </div>
  );
}
