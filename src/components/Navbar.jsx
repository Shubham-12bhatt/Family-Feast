import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";   

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white font-oswald relative z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-20 py-4">

        {/* LOGO */}
        <img
          src={logo}
          alt="Family Feast"
          className="h-10 md:h-14 w-auto"
        />

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#7A2E45] focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU + BUTTON */}
        <div className="hidden lg:flex ml-auto items-center gap-8">

          {/* MENU */}
          <div className="flex items-center gap-12 xl:gap-24 text-[15.5px] font-semibold leading-none text-black">

            <a
              href="#home"
              className="flex items-center gap-[2px] hover:text-[#7A2E45] transition"
            >
              Home <ChevronDown size={14} />
            </a>

            <a
              href="#about"
              className="hover:text-[#7A2E45] transition"
            >
              About Us
            </a>

            <a
              href="#products"
              className="flex items-center gap-[10px] hover:text-[#7A2E45] transition"
            >
              Basmati Product <ChevronDown size={14} />
            </a>
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="bg-[#7A2E45] text-white px-7 py-[10px] rounded-full text-[15px] font-[600] hover:opacity-90 transition whitespace-nowrap"
          >
            Contact Us
          </a>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-6 px-6 gap-6 z-50">
          <a href="#home" className="text-lg font-semibold text-black hover:text-[#7A2E45] flex justify-between items-center" onClick={() => setIsOpen(false)}>
            Home <ChevronDown size={16} className="text-gray-400" />
          </a>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <a href="#about" className="text-lg font-semibold text-black hover:text-[#7A2E45]" onClick={() => setIsOpen(false)}>
            About Us
          </a>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <a href="#products" className="text-lg font-semibold text-black hover:text-[#7A2E45] flex justify-between items-center" onClick={() => setIsOpen(false)}>
            Basmati Product <ChevronDown size={16} className="text-gray-400" />
          </a>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <a href="#contact" className="bg-[#7A2E45] text-white px-6 py-3 rounded-full text-center font-semibold mt-2" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
