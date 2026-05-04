import React from 'react';
import aboutImage from '../assets/About Us Image.png';
import image2 from '../assets/WelcomeImg.png';
import image3 from '../assets/basmati.png';

const About = () => {
  return (
    <section id="about" className="bg-[#7A2E45] text-white relative overflow-hidden flex items-center justify-center w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 max-w-[1920px] mx-auto">
          {/* Left Column: Text */}
          <div className="space-y-5 mb-8 lg:mb-16 lg:pr-8">
            <div className="flex items-center gap-4">
              <span className="miniver text-3xl font-normal tracking-wide italic text-[#C5A065]">About Us</span>
              <span className="w-12 font-bold text-[#C5A065]">_______</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-poppins uppercase tracking-wider leading-tight">Why Family Feast ?</h2>

            <ul className="space-y-6 mt-10 md:mt-14">
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 bg-[#C5A065] rounded-full shrink-0"></span>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-poppins">
                  Family Feast is driven by a clear purpose — to deliver premium-quality rice with consistency, reliability, and global standards at its core.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-2 h-2 bg-[#C5A065] rounded-full shrink-0"></span>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-poppins">
                  Through modern processing and strict quality control, we ensure every grain meets the expectations of both families and international markets.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-6 h-full">
            <div className="flex flex-col gap-4 lg:gap-6 pt-10 lg:pt-16">
              <img
                src={aboutImage}
                alt="About Family Feast"
                className="rounded-[20px] md:rounded-[30px] shadow-2xl w-full h-[200px] md:h-[280px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <img
                src={image3}
                alt="Premium Basmati Rice"
                className="rounded-[20px] md:rounded-[30px] shadow-2xl w-full h-[180px] md:h-[240px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col pb-10 lg:pb-16">
              <img
                src={image2}
                alt="Family Feast Global"
                className="rounded-[20px] md:rounded-[30px] shadow-2xl w-full h-[380px] md:h-[520px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;