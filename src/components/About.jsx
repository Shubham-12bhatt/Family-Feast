import React from 'react';
import aboutImage from '../assets/grilled_fish_plate.png'; // Will be generated

const About = () => {
  return (
    <section id="about" className="bg-primary text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div>
            <span className="font-serif italic text-secondary text-2xl">About Us</span>
            <h2 className="text-4xl font-serif mt-2">Why Family Feast?</h2>
          </div>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="w-2 h-2 mt-2 bg-secondary rounded-full flex-shrink-0"></span>
              <p className="text-gray-200 leading-relaxed">
                Family-backed heritage since purpose – we deliver premium-quality rice with consistency, reliability, and global standards at its core.
              </p>
            </li>
            <li className="flex gap-4">
               <span className="w-2 h-2 mt-2 bg-secondary rounded-full flex-shrink-0"></span>
               <p className="text-gray-200 leading-relaxed">
                 Through modern processing and strict quality control, we ensure every grain meets the expectation of our families and consumers worldwide.
               </p>
            </li>
          </ul>
        </div>
        
        <div className="relative z-10">
           <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3 scale-105"></div>
           <img src={aboutImage} alt="About Family Feast" className="rounded-3xl shadow-2xl w-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
    </section>
  );
};

export default About;
