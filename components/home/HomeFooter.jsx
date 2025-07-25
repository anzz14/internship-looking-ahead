import React from 'react';
import { Mail, Phone, MapPin, Heart, Brain, Star } from 'lucide-react';
import Link from 'next/link';

const HomeFooter = () => {
  return (
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
  );
};

export default HomeFooter;
