"use client";

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Lightbulb, Wrench, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="px-6 py-10 max-w-6xl mx-auto space-y-24">
        {/* Hero Section */}
        <section 
          data-aos="fade-up"
          className="relative bg-gradient-to-br from-[#f4e9ff] via-[#e5e5ff] to-[#ffe7f0] dark:from-[#1e1b32] dark:via-[#1a1d3b] dark:to-[#2e1a2f] rounded-2xl overflow-hidden shadow-xl p-10 text-center"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5 pointer-events-none" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary drop-shadow-md">
            Empowering Schools to Understand and Support Children with ADHD
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            At <strong>Looking Ahead</strong>, we believe every child deserves to thrive in the classroom. We specialise in helping schools identify and support students with ADHD through a combination of awareness training, practical teaching tools, and diagnostic pathways.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Our mission is to bridge the gap between ADHD knowledge and classroom practice. Founded by a passionate advocate for neurodiverse learners, we collaborate with educators to foster inclusive classrooms—where differences are recognised, understood, and celebrated.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            From teachers to SENCOs to headteachers, we’re here to help you uplift every child’s potential with confidence and care.
          </p>
          <Button className="mt-6 bg-primary text-white hover:bg-[#9c4dcc] dark:bg-purple-900 dark:hover:bg-purple-800 transition-all shadow-lg">
            Book a Workshop
          </Button>
        </section>

        {/* Benefits Section */}
        <section 
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-2"
        >
          {[{
            icon: <Lightbulb size={40} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />, 
            title: 'Expert-Led Training',
            desc: 'Workshops led by professionals with classroom experience in ADHD support.'
          }, {
            icon: <Wrench size={40} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />, 
            title: 'Practical Teaching Tools',
            desc: 'Get hands-on strategies and materials to use in real classrooms.'
          }, {
            icon: <BookOpen size={40} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />, 
            title: 'Diagnostic Pathways',
            desc: 'Support early identification and provide tailored next steps.'
          }].map((b, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Card className="hover:shadow-xl dark:hover:shadow-purple-700/30 transition-all duration-300 border border-muted group">
                <CardContent className="text-center space-y-4 p-4 sm:p-6">
                  <div className="flex justify-center">{b.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>

        {/* Info Section */}
        <section 
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="hover:shadow-lg dark:hover:shadow-purple-700/30 transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-primary">ADHD Awareness Workshops</h2>
              <p className="mb-2 text-muted-foreground text-sm">Duration: 1 hour | Format: In-person or online</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>What ADHD is (and what it’s not)</li>
                <li>Recognising signs and misconceptions</li>
                <li>Strategies for focus, behaviour, and self-regulation</li>
                <li>Creating ADHD-friendly classrooms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg dark:hover:shadow-purple-700/30 transition-all duration-300">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-primary">Let’s Talk ADHD Support in Your School</h2>
              <p className="text-muted-foreground text-sm">
                Whether you're ready to book a workshop, request a resource pack, or just explore what we offer, we're here to help.
              </p>
              <Button className="mt-4">Contact Us</Button>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section data-aos="fade-up">
          <div className="relative mb-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-primary relative z-10">Frequently Asked Questions</h2>
            <div className="mt-2 h-1 w-24 bg-primary rounded-full transition-all duration-500"></div>
            <p className="mt-2 text-muted-foreground text-sm">Get answers to common questions about our ADHD workshops</p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            <AccordionItem value="q1">
              <AccordionTrigger>Who can benefit from these workshops?</AccordionTrigger>
              <AccordionContent>
                These sessions are tailored for teachers, SENCOs, headteachers, and all school staff working with neurodiverse learners.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Are the workshops available online?</AccordionTrigger>
              <AccordionContent>
                Yes — we offer flexible options including in-person and online formats to suit your school’s schedule.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How long does each session last?</AccordionTrigger>
              <AccordionContent>
                Most sessions are 1 hour long, but we offer custom durations and add-on modules depending on your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Do you provide teaching materials?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We include downloadable resources, classroom tools, and activity guides.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="bg-[#1e2554] text-white py-12 px-6 w-full mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Looking Ahead</h3>
            <p className="text-sm">
              Empowering schools with ADHD awareness, support tools, and inclusive training. Bridging the gap between knowledge and classroom practice.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/courses" className="hover:underline">Courses</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} /> siddiqia@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> 07889393700
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Leicester, UK
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-white/60">
          © 2025 Looking Ahead. All rights reserved.
        </div>
      </footer>
    </ThemeProvider>
  );
}
