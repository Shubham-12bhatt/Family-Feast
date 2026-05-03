import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary-light/30">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#7A2E45] mb-6">Feel Free To Contact Us</h2>
          <p className="text-gray-600 font-poppins mb-8 max-w-md">
            Experience the premium quality of our rice. Reach out to us for bulk orders or any inquiries.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.723514860424!2d144.7061403!3d-37.7261672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f4a2f2bc678b%3A0x6b81cc530c632aee!2s58%20Curtin%20Dr%2C%20Deanside%20VIC%203335%2C%20Australia!5e0!3m2!1sen!2sin!4v1777826667756!5m2!1sen!2sin" 
            className="w-full h-full min-h-[400px]" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

