"use client";

import '../globals.css'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { 
  Clock, 
  Users, 
  GraduationCap, 
  Target, 
  BookOpen, 
  Heart, 
  Brain, 
  Shield,
  Award,
  CheckCircle,
  Star,
  Lightbulb,
  UserCheck,
  Timer,
  MessageCircle,
  TrendingUp,
  Download,
  Calendar,
  PoundSterling,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
  Coffee,
  Headphones,
  Monitor,
  FileText,
  Smile,
  Eye,
  Activity,
  Handshake
} from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

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

  const workshopHighlights = [
    { icon: <Target className="w-5 h-5" />, text: "Evidence-based techniques", color: "bg-blue-500" },
    { icon: <Users className="w-5 h-5" />, text: "Interactive delivery", color: "bg-purple-500" },
    { icon: <Heart className="w-5 h-5" />, text: "Inclusive approach", color: "bg-pink-500" },
    { icon: <Shield className="w-5 h-5" />, text: "Fully accredited", color: "bg-green-500" }
  ];

  const studentWorkshops = [
    {
      title: "Thriving Under Pressure",
      description: "Stress management and coping strategies for academic success",
      duration: "60 mins",
      color: "from-blue-500 to-cyan-500",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Confidence & Identity",
      description: "Building self-esteem and understanding personal strengths",
      duration: "60 mins",
      color: "from-purple-500 to-pink-500",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Mindfulness for Teens",
      description: "Meditation techniques and emotional regulation skills",
      duration: "60 mins",
      color: "from-green-500 to-teal-500",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const pricingTiers = [
    {
      name: "Quick Start",
      price: "£350",
      priceRange: "£350-£500",
      duration: "2-3 hours",
      description: "Perfect for introducing ADHD awareness to your team",
      features: [
        "Interactive workshop session",
        "Digital resource pack",
        "CPD certificates",
        "Email support",
        "Basic follow-up materials"
      ],
      color: "from-blue-500 to-purple-500",
      popular: false
    },
    {
      name: "Complete Training",
      price: "£600",
      priceRange: "£600-£900",
      duration: "Full day (5 hours)",
      description: "Comprehensive training for whole-school transformation",
      features: [
        "Full day comprehensive training",
        "Complete resource library",
        "All staff CPD certificates",
        "3-month follow-up support",
        "Customized action plan",
        "Progress tracking tools"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
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
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Professional Development Programs
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                  Transform Your
                  <br />
                  <span className="text-blue-600 dark:text-blue-400">Teaching</span> Practice
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                  Comprehensive training programmes designed to empower educators with the knowledge and tools to support every student's success.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto min-h-[48px]"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Book a Workshop
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-gray-300 dark:border-gray-600 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group w-full sm:w-auto min-h-[48px]"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Course Navigation */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-8 sm:mb-12">
                  <TabsList className="grid w-full max-w-xs sm:max-w-md grid-cols-2 sm:grid-cols-4 p-1 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                    <TabsTrigger value="workshops" className="rounded-full text-xs sm:text-sm">Workshops</TabsTrigger>
                    <TabsTrigger value="students" className="rounded-full text-xs sm:text-sm">Students</TabsTrigger>
                    <TabsTrigger value="resources" className="rounded-full text-xs sm:text-sm">Resources</TabsTrigger>
                    <TabsTrigger value="pricing" className="rounded-full text-xs sm:text-sm">Pricing</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="workshops" className="space-y-12 sm:space-y-16">
                  {/* Main Workshop */}
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center" data-aos="fade-up">
                    <div className="space-y-6 sm:space-y-8">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium">
                          <Award className="w-4 h-4 mr-2" />
                          CPD Certified
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                          Understanding ADHD in the Classroom
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                          Our flagship workshop covering everything educators need to know about supporting students with ADHD.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">1-5 Hours</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Flexible duration</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">Hybrid</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Online or in-person</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {workshopHighlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-10 h-10 rounded-full ${highlight.color} flex items-center justify-center text-white flex-shrink-0`}>
                              {highlight.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-2xl">
                        <div className="text-center mb-8">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                            <Brain className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Workshop Coverage</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {[
                            { icon: <Eye className="w-5 h-5" />, text: "ADHD overview (Inattentive, Hyperactive, Combined)" },
                            { icon: <Users className="w-5 h-5" />, text: "Real classroom examples and scenarios" },
                            { icon: <Heart className="w-5 h-5" />, text: "Understanding the emotional side of ADHD" },
                            { icon: <Lightbulb className="w-5 h-5" />, text: "Practical strategies and teaching tools" },
                            { icon: <MessageCircle className="w-5 h-5" />, text: "Interactive case study discussions" },
                            { icon: <FileText className="w-5 h-5" />, text: "Comprehensive resource materials" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                              <div className="text-blue-600 dark:text-blue-400 mt-0.5">{item.icon}</div>
                              <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="text-center space-y-8" data-aos="fade-up">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Complete Support Package</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      {[
                        { icon: <BookOpen className="w-8 h-8" />, title: "Training Materials", desc: "Comprehensive resources for teachers" },
                        { icon: <Monitor className="w-8 h-8" />, title: "Online Content", desc: "Digital tools to break stigma" },
                        { icon: <Users className="w-8 h-8" />, title: "Consulting", desc: "Direct support for schools & NGOs" },
                        { icon: <Handshake className="w-8 h-8" />, title: "Partnerships", desc: "Collaborate with education authorities" }
                      ].map((service, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                          <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{service.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="students" className="space-y-16">
                  <div className="text-center space-y-8" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      Student Empowerment Workshops
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      Interactive sessions designed to help students build confidence, manage stress, and develop essential life skills.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {studentWorkshops.map((workshop, index) => (
                      <Card 
                        key={index} 
                        className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className={`h-2 bg-gradient-to-r ${workshop.color}`}></div>
                        <CardContent className="p-8">
                          <div className={`w-16 h-16 bg-gradient-to-r ${workshop.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                            {workshop.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{workshop.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6">{workshop.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                              {workshop.duration}
                            </Badge>
                            <span className="text-sm text-gray-500 dark:text-gray-400">KS3-5</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8" data-aos="fade-up">
                    <div className="text-center space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Session Details</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                            <Timer className="w-8 h-8" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Duration</h4>
                          <p className="text-gray-600 dark:text-gray-400">60 minutes</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                            <Users className="w-8 h-8" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Group Size</h4>
                          <p className="text-gray-600 dark:text-gray-400">Up to 30 students</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                            <GraduationCap className="w-8 h-8" />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Age Range</h4>
                          <p className="text-gray-600 dark:text-gray-400">Key Stage 3-5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="space-y-16">
                  <div className="text-center space-y-8" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      Resource Library
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      Comprehensive tools and materials to support ADHD students in your classroom.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Resource Categories */}
                    <div className="lg:col-span-2 space-y-8">
                      <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="classroom-tools" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                          <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 text-xl font-semibold">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                <Lightbulb className="w-6 h-6" />
                              </div>
                              Top 10 ADHD Classroom Tools
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6">
                            <div className="grid gap-4">
                              {[
                                "Visual timetables and task checklists",
                                "Break tasks into time-limited chunks",
                                "Regular movement breaks (20-30 mins)",
                                "Fidget tools and sensory supports",
                                "Timer-based transitions",
                                "Strategic seating arrangements",
                                "Visual transition warnings",
                                "Positive reinforcement systems",
                                "Calm regulation spaces",
                                "Consistent routines and language"
                              ].map((tool, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                  <Badge variant="secondary" className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                                    {index + 1}
                                  </Badge>
                                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="language-guide" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                          <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 text-xl font-semibold">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                <MessageCircle className="w-6 h-6" />
                              </div>
                              Language Reframing Guide
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6">
                            <div className="space-y-4">
                              {[
                                { instead: "Disruptive", use: "Energetic and needs support to self-regulate" },
                                { instead: "Lazy", use: "Needs support with task initiation" },
                                { instead: "Not listening", use: "Needs help staying focused" },
                                { instead: "Attention seeking", use: "Needs connection and reassurance" },
                                { instead: "Defiant", use: "Struggling to regulate emotions or follow routines" }
                              ].map((item, index) => (
                                <div key={index} className="p-4 bg-gradient-to-r from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 rounded-lg">
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                      <span className="text-sm font-medium text-red-600 dark:text-red-400">Instead of: </span>
                                      <span className="text-gray-700 dark:text-gray-300 italic">"{item.instead}"</span>
                                    </div>
                                    <div>
                                      <span className="text-sm font-medium text-green-600 dark:text-green-400">Use: </span>
                                      <span className="text-gray-700 dark:text-gray-300">"{item.use}"</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="regulation-tools" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                          <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 text-xl font-semibold">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                                <Heart className="w-6 h-6" />
                              </div>
                              Emotional Regulation Toolkit
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6">
                            <div className="grid gap-4">
                              {[
                                "5-Point Scale for emotional intensity",
                                "Zones of Regulation color system",
                                "Sensory regulation tools",
                                "Safe exit strategies",
                                "Breathing and mindfulness exercises"
                              ].map((tool, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                  <Heart className="w-5 h-5 text-green-500" />
                                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="coaching-tools" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                          <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 text-xl font-semibold">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                                <MessageCircle className="w-6 h-6" />
                              </div>
                              ADHD Coaching-Style Tools
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              Help teachers become mini-coaches, not just managers.
                            </p>
                            <div className="grid gap-4">
                              {[
                                "Collaborative problem-solving (e.g. \"What's going on?\" instead of \"Why did you do that?\")",
                                "Use \"When you…, I feel…, Can we…?\" communication scripts",
                                "Teach the \"3 Cs\": Connect – Coach – Challenge gently"
                              ].map((tool, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                                  <MessageCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="classroom-strategies" className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                          <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-800 text-xl font-semibold">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white">
                                <TrendingUp className="w-6 h-6" />
                              </div>
                              ADHD-Friendly Classroom Strategies
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              Quick, effective tools for immediate implementation:
                            </p>
                            <div className="grid gap-4">
                              {[
                                "Chunking tasks (break into small, timed steps)",
                                "Visual schedules or \"first-then\" boards",
                                "Timers for transitions (e.g., Time Timer app)",
                                "Fidget tools or movement breaks",
                                "'Do Not Disturb' signs to help during focus time",
                                "Seat near the teacher, not by a window or high-traffic area",
                                "Pre-warnings before transitions (\"In 5 mins, we'll pack up\")"
                              ].map((strategy, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                                  <TrendingUp className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300">{strategy}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    {/* Quick Access Panel */}
                    <div className="space-y-6">
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                            <Download className="w-8 h-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Download</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">Get instant access to our most popular resources</p>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Download Resource Pack
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resource Categories</h3>
                          <div className="space-y-3">
                            {[
                              { name: "Classroom Tools", count: "10 items", color: "bg-blue-500" },
                              { name: "Language Guides", count: "5 items", color: "bg-purple-500" },
                              { name: "Regulation Tools", count: "8 items", color: "bg-green-500" },
                              { name: "Coaching Tools", count: "6 items", color: "bg-indigo-500" },
                              { name: "Teaching Strategies", count: "12 items", color: "bg-teal-500" },
                              { name: "Assessment Forms", count: "6 items", color: "bg-orange-500" }
                            ].map((category, index) => (
                              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
                                <div className="flex items-center gap-3">
                                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                                  <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{category.count}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-16">
                  <div className="text-center space-y-8" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      Investment in Excellence
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      Choose the training package that best fits your school's needs and budget.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                      <Card 
                        key={index} 
                        className={`relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 ${tier.popular ? 'ring-4 ring-purple-500/20' : ''}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        {tier.popular && (
                          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                            Most Popular
                          </div>
                        )}
                        <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                        <CardContent className="p-8">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{tier.price}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{tier.priceRange}</div>
                            <div className="text-gray-600 dark:text-gray-300">{tier.duration}</div>
                            <p className="text-gray-600 dark:text-gray-300 mt-4">{tier.description}</p>
                          </div>
                          
                          <div className="space-y-3 mb-8">
                            {tier.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button 
                            className={`w-full py-6 text-lg rounded-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                          >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                              Get Started
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8 max-w-4xl mx-auto" data-aos="fade-up">
                    <div className="text-center space-y-6">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">60-Minute Workshop Includes</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {[
                            "ADHD overview & types",
                            "Learning & behavior impacts",
                            "Recognition in diverse presentations",
                            "Real school case studies"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          {[
                            "Practical classroom strategies",
                            "Interactive Q&A session",
                            "Comprehensive handouts",
                            "Follow-up resources"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6  bg-[#17263a] text-white">
            <div className="max-w-4xl mx-auto text-center space-y-8" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of schools already benefiting from our evidence-based ADHD training programmes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Book Your Workshop
                    <Calendar className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}
