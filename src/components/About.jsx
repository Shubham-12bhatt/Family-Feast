import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutus.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden w-full bg-[#7A2E45] text-white py-16 md:py-20 lg:py-24 flex items-center justify-center">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E8D5E7]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1750px] mx-auto px-6 sm:px-12 lg:px-20 z-10 relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column: Text */}
          <motion.div className="space-y-8 lg:pr-4" variants={containerVariants}>
            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              <span className="miniver text-3xl md:text-4xl font-normal tracking-wide italic text-[#E8D5E7]">About Us</span>
              <span className="w-16 h-[2px] bg-[#E8D5E7]"></span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-[45px] font-bold font-poppins uppercase tracking-wider leading-tight text-white"
              variants={itemVariants}
            >
              Why Family Feast ?
            </motion.h2>

            <motion.ul className="space-y-6 mt-8" variants={containerVariants}>
              <motion.li 
                className="flex gap-4 items-start bg-white/5 hover:bg-white/10 p-6 rounded-2xl shadow-sm border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 group" 
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <span className="mt-2 w-3 h-3 bg-[#E8D5E7] rounded-full shrink-0 shadow-[0_0_10px_rgba(232,213,231,0.8)] group-hover:scale-110 transition-transform duration-300"></span>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-poppins">
                  Family Feast is driven by a clear purpose — to deliver <span className="font-semibold text-white">premium-quality rice</span> with consistency, reliability, and global standards at its core.
                </p>
              </motion.li>
              <motion.li 
                className="flex gap-4 items-start bg-white/5 hover:bg-white/10 p-6 rounded-2xl shadow-sm border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 group" 
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <span className="mt-2 w-3 h-3 bg-[#E8D5E7] rounded-full shrink-0 shadow-[0_0_10px_rgba(232,213,231,0.8)] group-hover:scale-110 transition-transform duration-300"></span>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-poppins">
                  Through modern processing and strict quality control, we ensure every grain meets the expectations of both families and <span className="font-semibold text-white">international markets</span>.
                </p>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            className="relative w-full max-w-[450px] aspect-[4/5] mx-auto flex items-center justify-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            {/* Image decorative frame/background */}
            <div className="absolute inset-0 bg-[#E8D5E7]/20 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60"></div>
            <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] transform -rotate-3 scale-100 shadow-xl backdrop-blur-sm border border-white/10"></div>
            
            <motion.img
              src={aboutImage}
              alt="About Family Feast"
              className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;