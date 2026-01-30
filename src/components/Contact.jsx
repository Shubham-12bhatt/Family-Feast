import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary-light/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-poppins font-bold text-primary mb-6">Feel Free To Contact Us</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Experience the premium quality of our rice. Reach out to us for bulk orders or any inquiries.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="bg-gray-200 border-none p-4 rounded-md focus:ring-2 focus:ring-primary outline-none placeholder-gray-500" />
              <input type="email" placeholder="Your Email" className="bg-gray-200 border-none p-4 rounded-md focus:ring-2 focus:ring-primary outline-none placeholder-gray-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-gray-200 border-none p-4 rounded-md focus:ring-2 focus:ring-primary outline-none placeholder-gray-500" />
            <textarea placeholder="Message" rows="4" className="w-full bg-gray-200 border-none p-4 rounded-md focus:ring-2 focus:ring-primary outline-none placeholder-gray-500"></textarea>

            <button type="submit" className="bg-primary text-white  px-8 py-2 rounded-2xl font-semibold hover:bg-opacity-90 transition-shadow shadow-lg shadow-primary/30 cursor-pointer">
              Send
            </button>
          </form>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg h-96 md:h-auto bg-gray-300 relative">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Ahmedabad&zoom=13&size=600x600&sensor=false')] bg-cover bg-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-primary">Family Feast HQ</p>
              <p className="text-xs text-gray-500">Ahmedabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

