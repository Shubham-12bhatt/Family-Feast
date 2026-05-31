import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/newlogo.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        if (targetId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <nav className="w-full bg-white font-oswald relative z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 lg:px-20 py-4">

        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Family Feast"
            className="h-12 md:h-16 w-auto object-contain rounded-[2px] sm:rounded-1xl shadow-sm cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-[#7A2E45] focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP MENU + BUTTON */}
        <div className="hidden lg:flex ml-auto items-center gap-8">

          {/* MENU */}
          <div className="flex items-center gap-8 lg:gap-12 xl:gap-30 mr-10 lg:mr-16 xl:mr-24 text-lg xl:text-xl font-semibold leading-none text-black">

            <a
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
              className="hover:text-[#7A2E45] transition"
            >
              Home
            </a>

            <a
              href="#"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-[#7A2E45] transition"
            >
              About Us
            </a>

            {/* Dropdown for products */}
            <Dropdown />
          </div>

          {/* BUTTON */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-[#7A2E45] text-white px-8 py-3 rounded-full text-lg xl:text-xl font-[600] hover:opacity-90 transition whitespace-nowrap"
          >
            Contact Us
          </a>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-6 px-6 gap-6 z-50 max-h-[85vh] overflow-y-auto">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-lg font-semibold text-black hover:text-[#7A2E45] flex justify-between items-center"
          >
            Home
          </a>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "about")}
            className="text-lg font-semibold text-black hover:text-[#7A2E45]"
          >
            About Us
          </a>
          <div className="w-full h-[1px] bg-gray-100"></div>
          
          {/* Mobile Accordion for products */}
          <div>
            <button
              className="w-full text-lg font-semibold text-black hover:text-[#7A2E45] flex justify-between items-center focus:outline-none cursor-pointer"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Basmati Product 
              <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMobileDropdownOpen && (
              <div className="mt-3 pl-4 border-l border-gray-200 flex flex-col gap-3 text-left">
                <div>
                  <Link to="/basmati" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] block py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>
                    Indian Basmati Rice
                  </Link>
                  <div className="pl-3 flex flex-col gap-1 border-l border-dashed border-gray-200 mt-1">
                    <Link to="/basmati/basmati-1121" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>1121 Basmati</Link>
                    <Link to="/basmati/basmati-1509" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>1509 Basmati</Link>
                    <Link to="/basmati/basmati-1401" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>1401 Basmati</Link>
                    <Link to="/basmati/pusa" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>Pusa Basmati</Link>
                  </div>
                </div>

                <div>
                  <Link to="/non-basmati" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] block py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>
                    Indian Non Basmati Rice
                  </Link>
                  <div className="pl-3 flex flex-col gap-1 border-l border-dashed border-gray-200 mt-1">
                    <Link to="/non-basmati/pr11" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>PR 11 Rice</Link>
                    <Link to="/non-basmati/pr106" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>PR 106 Rice</Link>
                    <Link to="/non-basmati/ir64" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>IR 64 Rice</Link>
                    <Link to="/non-basmati/ir36" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>IR 36 Rice</Link>
                    <Link to="/non-basmati/ir8" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>IR 8 Rice</Link>
                    <Link to="/non-basmati/rs10" className="text-sm text-gray-500 hover:text-[#7A2E45] py-0.5" onClick={() => setIsOpen(false)}>RS 10 Rice</Link>
                  </div>
                </div>

                <Link to="/sugandha" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>Sugandha Rice</Link>
                <Link to="/sona-masuri" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>Sona Masuri Rice</Link>
                <Link to="/sharbati" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>Sharbati Rice</Link>
                <Link to="/pusa" className="text-[15px] font-semibold text-gray-800 hover:text-[#7A2E45] py-1" onClick={() => { setIsOpen(false); setIsMobileDropdownOpen(false); }}>Pusa Rice</Link>
              </div>
            )}
          </div>
          
          <div className="w-full h-[1px] bg-gray-100"></div>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-[#7A2E45] text-white px-6 py-3 rounded-full text-center font-semibold mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
