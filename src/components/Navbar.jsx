import React from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";   // ✅ correct import

const Navbar = () => {
  return (
    <nav className="w-full bg-white font-oswald">
      <div className="max-w-[1600px] mx-auto flex items-center px-12 py-4">

        {/* LOGO */}
        <img
          src={logo}
          alt="Family Feast"
          className="h-14 w-auto"
        />

        {/* MENU + BUTTON (SAME ROW, CONTROLLED GAP) */}
        <div className="ml-auto flex items-center gap-8">

          {/* MENU */}
          <div className="flex items-center gap-9 text-[15.5px] font-[600] leading-none text-black">

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
              className="flex items-center gap-[2px] hover:text-[#7A2E45] transition"
            >
              Basmati Product <ChevronDown size={14} />
            </a>
          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="bg-[#7A2E45] text-white px-7 py-[10px] rounded-full text-[15px] font-[600] hover:opacity-90 transition"
          >
            Contact Us
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
