import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/aboutus.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="relative overflow-hidden flex items-center justify-center w-full bg-[#7A2E45] text-white py-16 lg:py-24">

      <div className="w-full px-4 sm:px-8 lg:px-16 z-10">
        <motion.div 
          className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1920px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column: Text */}
          <motion.div className="space-y-8 lg:pr-8" variants={containerVariants}>
            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              <span className="miniver text-4xl font-normal tracking-wide italic text-white">About Us</span>
              <span className="w-16 h-[2px] bg-white"></span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-poppins text-white whitespace-nowrap"
              variants={itemVariants}
            >
              Why Family Feast ?
            </motion.h2>

            <motion.ul className="space-y-8 mt-10 md:mt-14" variants={containerVariants}>
              <motion.li className="flex gap-4 items-start bg-white/10 p-6 rounded-2xl shadow-sm border border-white/20 backdrop-blur-sm" variants={itemVariants}>
                <span className="mt-2 w-3 h-3 bg-white rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-poppins">
                  Family Feast is driven by a clear purpose — to deliver <span className="font-semibold text-white">premium-quality rice</span> with consistency, reliability, and global standards at its core.
                </p>
              </motion.li>
              <motion.li className="flex gap-4 items-start bg-white/10 p-6 rounded-2xl shadow-sm border border-white/20 backdrop-blur-sm" variants={itemVariants}>
                <span className="mt-2 w-3 h-3 bg-white rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-poppins">
                  Through modern processing and strict quality control, we ensure every grain meets the expectations of both families and <span className="font-semibold text-white">international markets</span>.
                </p>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            className="relative w-full max-w-[400px] lg:max-w-[450px] h-[350px] lg:h-[500px] mx-auto flex items-center justify-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            {/* Image decorative frame/background */}
            <div className="absolute inset-0 bg-white/20 rounded-[2rem] transform rotate-3 scale-105 opacity-60"></div>
            <div className="absolute inset-0 bg-white/10 rounded-[2rem] transform -rotate-2 scale-100 shadow-xl backdrop-blur-sm"></div>
            
            <motion.img
              src={aboutImage}
              alt="About Family Feast"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;