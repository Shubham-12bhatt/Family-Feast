import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
         {/* Logo Placeholder - Text for now */}
        <div className="text-2xl font-serif font-bold text-primary italic">
          Family Feast
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-serif text-sm font-medium tracking-wide">
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#products" className="hover:text-primary transition-colors">Products</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all cursor-pointer">
        Shop Now
      </button>
    </nav>
  );
};

export default Navbar;
