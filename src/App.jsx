import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      <Welcome />
      <Features />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
