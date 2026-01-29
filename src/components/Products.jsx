import React from 'react';
import riceBowl from '../assets/rice_bowl.png'; // Will be generated

const ProductCard = ({ title, type, image }) => (
  <div className="flex flex-col items-center gap-4 group">
    <div className="relative">
       <div className="w-48 h-48 rounded-full border-4 border-secondary p-1 overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300 bg-white">
         <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
       </div>
       <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-12 group-hover:rotate-0 transition-transform">
         New
       </div>
    </div>
    <div className="text-center mt-2">
       <h3 className="font-serif font-bold text-xl text-gray-900">{title}</h3>
       <p className="text-sm text-gray-500 uppercase tracking-wider">{type}</p>
    </div>
  </div>
);

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-primary mb-16">Our Products</h2>
        
        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
           <ProductCard 
             title="Basmati Rice" 
             type="Premium & Aromatic"
             image={riceBowl}
           />
           <ProductCard 
             title="Tasman White Sella Rice" 
             type="Parboiled Goodness"
             image={riceBowl} // Reusing image for demo
           />
            <ProductCard 
             title="Basmati Golden Sella Rice" 
             type="Golden Standard"
             image={riceBowl} // Reusing image for demo
           />
        </div>
      </div>
    </section>
  );
};

export default Products;
