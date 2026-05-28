import { Award, Globe } from 'lucide-react';
import heroImg from '../assets/Hero Section Image.webp';

export default function Hero() {
  return (
    <div className="relative overflow-hidden max-w-[1390px] mx-auto py-12 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-100 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mobile: Image appears first (order-1), Desktop: Text appears first (order-2 lg:order-1) */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Quality Badges */}
            <div className="flex flex-wrap gap-4 mb-4 sm:mb-6">
              <div className="inline-flex items-center px-5 py-1.5 bg-white rounded-full shadow-md border border-[#65BA34]">
                <span className='text-yellow-500'><Award size={18} /></span>
                <span className="text-sm ml-2 font-medium text-green-700">
                  Premium Quality Rice
                </span>
              </div>
              <div className="inline-flex items-center px-5 py-1.5 bg-blue-50 rounded-full shadow-md border border-[#464DB2]">
                <span className='text-[#464DB2]'><Globe size={18} /> </span>
                <span className="text-sm ml-2 font-medium text-[#464DB2]">
                  Global Export
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold leading-tight text-gray-900">
                <span className="rubik">365 Days Of </span>
                <span className="lobster-regular text-[#7A2E45]">Pure</span>,
                <br className="hidden lg:inline" />
                <span className="rubik"> Premium </span>
                <span className="lobster-regular text-[#7A2E45]">Rice</span>
              </h1>

              <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
                From our fields to tables across the globe, we are committed to providing premium quality rice that reflects trust, consistency, and unmatched taste in every serving.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="#products" className="inline-block bg-[#7A2E45] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-poppins font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer">
                Explore our Products
              </a>
            </div>
          </div>

          {/* Right Column: Image & floating card */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center w-full">
            {/* Hero Product Image Wrapper */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] mx-auto lg:ml-auto lg:mr-0">
              <img
                src={heroImg}
                alt="Premium Rice Products - Family Feast Basmati Rice"
                className="w-full h-auto drop-shadow-2xl relative z-10 rounded-3xl object-contain"
              />

              {/* Quality Assured Card locked to the image */}
              <div className="absolute -bottom-6 left-2 sm:-left-6 lg:-left-8 z-30">
                <div className="bg-white rounded-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-5 sm:p-6 border border-gray-200 flex flex-col items-center justify-center max-w-[135px] sm:max-w-[170px] transition-transform duration-300 hover:scale-105">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {/* Progress Ring */}
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      {/* Lilac-tinted background circle */}
                      <circle cx="50" cy="50" r="38" stroke="#F1EAEF" strokeWidth="7" fill="none" />
                      {/* Theme color primary progress circle with 82% progress for visual gap */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="#7A2E45"
                        strokeWidth="7"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 38}`}
                        strokeDashoffset={`${2 * Math.PI * 38 * (1 - 0.82)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base sm:text-[20px] font-extrabold text-[#1E293B] font-poppins">99%</span>
                    </div>
                  </div>
                  <div className="text-center mt-3.5">
                    <div className="text-xs sm:text-sm font-bold text-gray-800 font-poppins leading-tight">Quality</div>
                    <div className="text-xs sm:text-sm font-bold text-gray-800 font-poppins leading-tight">Assured</div>
                  </div>
                </div>
              </div>

              {/* Decorative background circles */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-green-200/20 to-transparent rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[350px] lg:h-[350px] bg-gradient-to-br from-blue-100/10 to-transparent rounded-full absolute top-10 right-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
    </div>
  );
}