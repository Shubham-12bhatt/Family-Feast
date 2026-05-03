import React from 'react';
import aboutImage from '../assets/About Us Image.png';

const About = () => {
  return (
    <section id="about" className="bg-[#7A2E45] text-white relative overflow-hidden flex items-center justify-center w-full lg:w-[95%] xl:w-[1370px] lg:rounded-tr-[50px] lg:rounded-br-[50px] mr-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-[#7A2E45] p-4 md:p-8 lg:p-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Text */}
          <div className="space-y-5 mb-8 lg:mb-16">
            <div className="flex items-center gap-4">
              <span className="miniver text-3xl font-normal tracking-wide italic">About Us</span>
              <span className="w-12 font-bold text-white">_______</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-poppins">Why Family Feast ?</h2>

            <ul className="space-y-6 mt-10 md:mt-14">
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-poppins">
                  Family Feast is driven by a clear purpose — to deliver premium-quality rice with consistency, reliability, and global standards at its core.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-poppins">
                  Through modern processing and strict quality control, we ensure every grain meets the expectations of both families and international markets.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="About Family Feast"
              className="rounded-[30px] md:rounded-[40px] shadow-lg w-full object-cover h-[300px] sm:h-[400px] md:h-[450px]"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;