"use client";

import React from 'react';
import '../globals.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Brain, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  Lightbulb, 
  Shield,
  Star,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 50
    });
  }, []);

  const teamValues = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Compassionate Approach",
      description: "We understand that every child is unique and deserves personalized support tailored to their individual needs.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Evidence-Based Methods",
      description: "Our training is grounded in the latest research and proven strategies that work in real classroom environments.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Inclusive Education",
      description: "We believe in creating learning environments where all students can thrive and reach their full potential.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Professional Excellence",
      description: "Our team consists of qualified professionals with extensive experience in education and ADHD support.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "500+", label: "Schools Trained", icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "10,000+", label: "Students Impacted", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const qualifications = [
    { text: "MA in Special Educational Needs", icon: <GraduationCap className="w-4 h-4" /> },
    { text: "ADHD Foundation Certified", icon: <Award className="w-4 h-4" /> },
    { text: "10+ Years Classroom Experience", icon: <Clock className="w-4 h-4" /> },
    { text: "Specialist SENCO Training", icon: <BookOpen className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6 sm:space-y-8" data-aos="fade-up">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                About Our Mission
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                Empowering Every Child
                <br />
                to <span className="text-blue-600 dark:text-blue-400">Reach Their Potential</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                At Looking Ahead, we're passionate about creating inclusive educational environments where every child can thrive. 
                Our mission is to bridge the gap between ADHD knowledge and practical classroom implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6" data-aos="fade-up">
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

        {/* About Story Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm">
                    Our Story
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    From Classroom Experience to Expert Training
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Looking Ahead was founded by educators who experienced firsthand the challenges of supporting students with ADHD 
                    in traditional classroom settings. We recognized the gap between theoretical knowledge and practical implementation, 
                    and set out to create training programs that truly make a difference.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our approach is unique because it's rooted in real classroom experience. We understand the daily pressures teachers face, 
                    the constraints of curriculum demands, and the need for practical, immediately applicable strategies.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        {qual.icon}
                      </div>
                      <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{qual.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Our Impact</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        "Improved classroom management",
                        "Enhanced student engagement",
                        "Better teacher confidence",
                        "Reduced behavioral incidents",
                        "Increased academic achievement",
                        "Stronger school communities"
                      ].map((impact, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Our Core Values
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
                These principles guide everything we do and shape how we approach ADHD education and support.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamValues.map((value, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${value.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-800 to-indigo-900" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Approach to ADHD Support?
              </h2>
              <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto px-4 sm:px-0">
                Join hundreds of educators who have already transformed their practice with our evidence-based training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                >
                  <Link href="/courses" className="flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Our Courses
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
