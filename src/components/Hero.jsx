import React from 'react';
import heroImage from '../assets/hero_rice_bags.png'; // Will be generated

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8">
        <div className="flex gap-4">
           <span className="bg-green-100 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-green-200">100% Natural</span>
           <span className="bg-red-100 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200">Premium Taste</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
          365 Days of <span className="text-primary italic">Pure,</span> <br />
          Premium <span className="text-primary italic">Rice</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-md">
          The secret to delicious meals starts with our premium grain selection.
        </p>
        
        <div className="flex gap-12 py-4 border-t border-gray-100">
           <div>
             <div className="text-3xl font-bold text-primary font-serif">50+</div>
             <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Premium Types</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-primary font-serif">100K+</div>
             <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Happy Customers</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-primary font-serif">20+</div>
             <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Served</div>
           </div>
        </div>
        
        <div className="flex items-center gap-6">
           <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-shadow shadow-lg shadow-primary/30 cursor-pointer">
             Explore Our Products
           </button>
           
           <div className="flex bg-white shadow-lg p-3 rounded-xl border border-gray-100 items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-accent font-bold text-xs ring-2 ring-white">99%</div>
              <div className="leading-none">
                 <div className="font-bold text-xs">Purity</div>
                 <div className="text-[10px] text-gray-500">Guaranteed</div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
         {/* Decorative elements behind image */}
         <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-secondary-light to-transparent opacity-70"></div>
         <img src={heroImage} alt="Premium Rice Bags" className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
      </div>
    </section>
  );
};

export default Hero;
