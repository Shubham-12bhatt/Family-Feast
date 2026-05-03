import React from 'react';
import welcomeImage from '../assets/WelcomeImg.png';

const Welcome = () => {
  return (
    <section className="container mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
       {/* Image Side */}
       <div className="relative flex justify-center order-2 lg:order-1">
          <img 
            src={welcomeImage} 
            alt="Family Feast Welcome" 
            className="rounded-3xl w-full max-w-xl object-cover" 
          />
       </div>
       
       {/* Text Side */}
       <div className="space-y-4 lg:mr-16 order-1 lg:order-2">
          <div className="flex items-center gap-4">
            <span className="miniver text-3xl text-[#7A2E45]">Home</span>
            <span className="w-12 font-bold text-[#7A2E45]">_______</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#7A2E45]">
            Welcome At Family Feast
          </h2>
          
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed font-poppins text-lg md:text-2xl">
            <p>
              At Family Feast, rice is more than a staple—it’s a legacy. With decades of experience and a deep-rooted passion for quality, we bring you the finest rice varieties, carefully sourced and expertly processed to meet global standards.
            </p>
            <p>
              From field to fork, every grain reflects our commitment to purity, consistency, and taste—making Family Feast a trusted name across households and international markets.
            </p>
          </div>
       </div>
    </section>
  );
};

export default Welcome;
