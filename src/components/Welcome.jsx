import React from 'react';
import welcomeImage from '../assets/welcome_food_collage.png'; // Will be generated

const Welcome = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      {/* Image Side */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <img src={welcomeImage} alt="Delicious Dish" className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8" />
          <img src={welcomeImage} alt="Delicious Dish" className="rounded-2xl shadow-xl w-full h-64 object-cover transform -translate-y-8" />
        </div>
        {/* Decor element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Text Side */}
      <div className="space-y-6">
        <div className="inline-block border-b-2 border-secondary pb-1">
          <span className="text-secondary font-family-miniver tracking-widest uppercase text-sm">Home</span>
        </div>
        <h2 className="text-2xl md:text-2xl font-poppins font-semibold text-primary">
          Welcome At Family Feast
        </h2>

        <ul className="space-y-4 text-gray-600 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-secondary text-xl">•</span>
            <p>Authentic locally sourcing premium crops suitable for export with decades of experience we maintain social processing, packaging ensuring only the quality grains reach your plate effortlessly.</p>
          </li>
          <li className="flex gap-3">
            <span className="text-secondary text-xl">•</span>
            <p>From farm to folk we ensure the natural nourishment is kept intact making every grain pure.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
