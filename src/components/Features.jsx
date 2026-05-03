import React from 'react';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 flex flex-col items-center text-center group cursor-default">
    <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="tex-xl font-bold font-serif text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-secondary-light/30 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-primary font-serif text-4xl">What Sets Us Apart</h2>
           <p className="text-gray-600 italic font-serif">"As May For Has Anything To Do It"</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
           <FeatureCard 
             title="Farm-Fresh Sourcing" 
             description="Freshness directly from the farms to your plate."
             icon={
               <img src={Icon1} alt="" className="w-10 h-10 object-contain" />
             }
           />
           <FeatureCard 
             title="Advanced Processing" 
             description="Modern technology to ensure grain perfection."
             icon={
               <img src={Icon2} alt="" className="w-10 h-10 object-contain" />
             }
           />
           <FeatureCard 
             title="Premium Quality" 
             description="Unmatched taste and texture in every grain."
             icon={
               <img src={Icon3} alt="" className="w-10 h-10 object-contain" />
             }
           />
           <FeatureCard 
             title="Global Trust" 
             description="Trusted by families across the globe."
             icon={
               <img src={Icon4} alt="" className="w-10 h-10 object-contain" />
             }
           />
        </div>
      </div>
    </section>
  );
};

export default Features;
