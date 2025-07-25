import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
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
  ];

  return (
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
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`q${index + 1}`} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <AccordionTrigger className="text-left px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
