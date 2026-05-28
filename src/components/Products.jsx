import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TypeRice } from "../constants/index";

export default function OurProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TypeRice.length - itemsPerView);

  // Clamp current index if itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="products"
      className="py-35 bg-[#F9F5EF] relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          {/* <div className="flex items-center gap-3 mb-2">
            <span className="miniver text-5xl text-[#7A2E45]">Our Products</span>
            <span className="w-12 h-[2px] bg-[#C5A065]"></span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#7A2E45] text-center">
            Our Products
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-10 sm:px-14">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#7A2E45] text-[#7A2E45] hover:text-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous products"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Wrapper */}
          <div className="overflow-hidden w-full py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {TypeRice.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 w-full"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  {/* Card design */}
                  <div className="mx-auto bg-white rounded-[32px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-[500px] w-[380px] max-w-full overflow-hidden border gap-1 border-gray-100/50">
                    {/* Product Image */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-50 shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800";
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-7 flex flex-col flex-grow justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold font-poppins text-black hover:text-[#7A2E45] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                          {product.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#7A2E45] text-[#7A2E45] hover:text-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next products"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2.5 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === index
                ? "w-8 bg-[#7A2E45]"
                : "w-3 bg-[#7A2E45]/20 hover:bg-[#7A2E45]/40"
                }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
