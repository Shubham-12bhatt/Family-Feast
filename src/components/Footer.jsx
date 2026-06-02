import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#7A2E45] text-white pt-16 pb-8 px-6 md:px-16 border-t border-white/10">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 mb-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-poppins font-bold italic text-white">Family Feast</h3>
          <p className="text-white font-poppins text-sm leading-relaxed">
            Leading rice exporter committed to quality, sustainability, and customer satisfaction.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#7A2E45] transition-all duration-300 transform hover:-translate-y-1 bg-white/5 shadow-lg">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#7A2E45] transition-all duration-300 transform hover:-translate-y-1 bg-white/5 shadow-lg">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#7A2E45] transition-all duration-300 transform hover:-translate-y-1 bg-white/5 shadow-lg">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#7A2E45] transition-all duration-300 transform hover:-translate-y-1 bg-white/5 shadow-lg">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6 font-poppins lg:ml-8 border-b-2 border-white/20 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-4 font-poppins text-white/90 text-md lg:ml-8">
            {[
              { label: "Home", href: "#" },
              { label: "About Us", href: "#about" },
              { label: "Our Products", href: "#products" },
              { label: "Contact Us", href: "#contact" }
            ].map((item) => (
              <li key={item.label} className="group">
                <a
                  href={item.href}
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">&gt;</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6 font-poppins border-b-2 border-white/20 pb-2 inline-block">Products</h4>
          <ul className="space-y-4 font-poppins text-white/90 text-md">
            {[
              { label: "Indian Basmati Rice", href: "/basmati" },
              { label: "Indian Non Basmati Rice", href: "/non-basmati" },
              { label: "Sugandha Rice", href: "/sugandha" },
              { label: "Sona masuri Rice", href: "/sona-masuri" },
              { label: "Sharbati Rice", href: "/sharbati" },
              { label: "Pusa Rice", href: "/pusa" }
            ].map((item) => (
              <li key={item.label} className="group">
                <Link
                  to={item.href}
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">&gt;</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-6 font-poppins text-white border-b-2 border-white/20 pb-2 inline-block">
            Contact Us
          </h4>

          <div className="flex items-start gap-4 mb-4 group">
            <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-[#7A2E45] transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-white/90 text-md font-poppins leading-relaxed mt-1">
              58 Curtain Drive, Deanside<br />Victoria 3336, Australia
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4 group">
            <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-[#7A2E45] transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <a href="mailto:info@familyfeast.com" className="text-white/90 text-md font-poppins hover:text-white transition-colors">
              info@familyfeast.com
            </a>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-[#7A2E45] transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <a href="tel:+919876543210" className="text-white/90 text-md font-poppins hover:text-white transition-colors">
              +91 98765 43210
            </a>
          </div>
        </div>


      </div>

      <div className="container mx-auto px-6 border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-md text-white-400 font-poppins">
        <p>&copy; 2026 Family Feast. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
