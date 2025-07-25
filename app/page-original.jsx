"use client";

import React from 'react';
import './globals.css'

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Lightbulb, Wrench, BookOpen, Sparkles, Heart, Star, ArrowRight, Users, Target, CheckCircle, Play, Calendar, Clock, Award, Brain, Zap, Shield, Download } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { downloadResourcePack } from '@/lib/downloadUtils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 50
    });
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Brain />,
      title: "Expert-Led Training",
      description: "Evidence-based workshops led by professionals with real classroom experience in ADHD support.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench />,
      title: "Practical Tools",
      description: "Hands-on strategies and materials designed for immediate use in real classroom environments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target />,
      title: "Diagnostic Support",
      description: "Early identification pathways with tailored next steps for comprehensive student support.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Schools Trained", icon: <BookOpen /> },
    { number: "10,000+", label: "Students Impacted", icon: <Users /> },
    { number: "95%", label: "Success Rate", icon: <Target /> },
    { number: "24/7", label: "Support Available", icon: <Heart /> }
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Mobile-optimized floating elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-green-200/20 dark:bg-green-800/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 pt-20 sm:pt-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 sm:space-y-8" data-aos="fade-up">
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Empowering Every Child to Thrive
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                    Understanding
                    <br />
                    <span className="text-blue-600 dark:text-blue-400">ADHD</span> in Schools
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                    We help schools identify and support students with ADHD through expert training, practical tools, and inclusive classroom strategies.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
                  >
                    <Link href="/courses" className="flex items-center gap-2 justify-center">
                      Start Your Journey
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-gray-300 dark:border-gray-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(stat.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Why Choose <span className="text-blue-600 dark:text-blue-400">Looking Ahead</span>?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                  We bridge the gap between ADHD knowledge and classroom practice with proven methods and compassionate support.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {React.cloneElement(feature.icon, { className: "w-7 h-7 sm:w-8 sm:h-8" })}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Workshop Preview */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Available Now
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    ADHD Awareness Workshops
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Comprehensive training designed for teachers, SENCOs, and all school staff working with neurodiverse learners.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Duration: 1-5 hours (flexible)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">In-person or online delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">CPD certificates provided</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                  >
                    <Link href="/courses" className="flex items-center justify-center">
                      Explore Workshops
                    </Link>
                  </Button>
                </div>

                <div className="relative order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                          <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Workshop Includes</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "ADHD overview & types",
                          "Classroom strategies",
                          "Emotional regulation tools",
                          "Practical case studies",
                          "Q&A session",
                          "Resource materials"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Download Resource Pack Button */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                        <Button 
                          onClick={downloadResourcePack}
                          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download Resource Pack
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resource Download Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20" data-aos="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Free Resources
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  Download Our Complete ADHD Resource Pack
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Get instant access to our comprehensive collection of ADHD support materials, classroom strategies, and assessment tools.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Teaching Strategies</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Practical classroom techniques and adaptations</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Assessment Tools</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Early identification checklists and forms</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support Materials</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Parent guides and communication templates</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    size="lg"
                    onClick={downloadResourcePack}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download Complete Resource Pack
                  </Button>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Free download • No signup required • Instant access
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4 sm:px-0">
                  Everything you need to know about our ADHD workshops
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Who can benefit from these workshops?",
                    answer: "Our workshops are designed for teachers, SENCOs, headteachers, and all school staff working with neurodiverse learners. No prior ADHD knowledge required."
                  },
                  {
                    question: "Are the workshops available online?",
                    answer: "Yes, we offer both in-person and online formats to accommodate your school's schedule and preferences. All materials are provided digitally."
                  },
                  {
                    question: "How long does each session last?",
                    answer: "Sessions range from 1-hour awareness workshops to full-day INSET training (5 hours). We customize duration based on your needs."
                  },
                  {
                    question: "Do you provide teaching materials?",
                    answer: "Absolutely! We include comprehensive resource packs with classroom tools, activity guides, and ongoing support materials."
                  },
                  {
                    question: "What makes your approach different?",
                    answer: "Our training is led by professionals with real classroom experience, focusing on practical, evidence-based strategies that work in real school environments."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`q${index + 1}`} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <AccordionTrigger className="text-left px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Ready to Transform Your School?
                </h2>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                  Join hundreds of schools already benefiting from our ADHD support programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Book a Workshop
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 bg-white border-white text-blue-600 hover:bg-white hover:text-blue-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                  >
                    <Link href="/courses" className="flex items-center justify-center">
                      View All Courses
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 mt-12 sm:mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="sm:col-span-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Looking Ahead</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  Empowering schools with ADHD awareness, support tools, and inclusive training. 
                  Bridging the gap between knowledge and classroom practice.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">siddiqia@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>07889393700</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Leicester, UK</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400 text-sm sm:text-base">
              <p>&copy; 2025 Looking Ahead. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}
