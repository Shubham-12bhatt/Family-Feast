import { Award ,Globe,Shield} from 'lucide-react';



export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden max-w-[1390px] mx-auto ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-100 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Mobile: Image appears first, Desktop: Text appears first */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Quality Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center px-5 bg-white rounded-full shadow-md border border-[#65BA34]">
                <span className='text-yellow-500'><Award/></span>
                <span className="text-sm ml-2 font-medium textgreen">
                  Premium Quality Rice
                </span>
              </div>
              <div className="inline-flex items-center px-5 py-1 bg-blue-100 rounded-full shadow-md border border-[#464DB2]">
                <span className='text-[#464DB2]'><Globe /> </span>
                <span className="text-sm  ml-2 font-medium text-[#464DB2]">
    
                  Global Export
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl  font-[700] leading-tight white lg:whitespace-nowrap">
                <span className="rubik">365 </span>
                <span className="rubik">Days</span>
                <span className="rubik"> Of </span>
                <span className=" lobster-regular text-[#7A2E45]">Pure</span>
                <span className="rubik">,</span>
                <div></div>
                <span className=" rubik"> Premium </span>
                <span className="lobster-regular text-[#7A2E45]"> Rice </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-[18px] text-gray-700 max-w-2xl leading-relaxed">
                The world's leading supplier of quality rice
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a href="#products" className=" bg-[#7A2E45] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer">
                Explore our Products
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold textgreen mb-2">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-black font-medium">
                  Countries Served
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold textgreen mb-2">
                  100K+
                </div>
                <div className="text-xs sm:text-sm text-black font-medium">
                  Tons Exported
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold textgreen mb-2">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-black font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
          
            <div className="order-1  lg:order-2 relative h-full flex items-center justify-center">

             <div className="absolute  top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8 xl:top-12 xl:right-12 z-30">
              {/* <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-gray-300 px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-[6px] border border-gray-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className=" sm:w-4 sm:h-4 lg:w-6 lg:h-6 textgreen" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm lg:text-sm font-bold text-gray-800">ISO Certified</div>
                    <div className="text-xs sm:text-xs lg:text-xs text-gray-500">Export Quality</div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* Hero Product Image */}
            <div className="relative">
              <img
                src="images/hero.jpg"
                alt="Premium Rice Products - Family Feast Basmati Rice"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-100 drop-shadow-2xl relative z-10 rounded-3xl"
              />

              {/* Decorative background circles */}
              <div className="absolute inset-0 -z-10">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-200/40 to-transparent rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full absolute top-10 sm:top-20 right-10 sm:right-20"></div>
              </div>
            </div>

            
               <div className="absolute bottom-2 left-2 sm:bottom-1 sm:left-6 lg:bottom-8 lg:left-0 xl:bottom-12 xl:left-4 z-30">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-gray-400 p-3 sm:p-4 lg:p-6 border border-gray-300 max-w-[140px] sm:max-w-[160px] lg:max-w-[140px] ">
                <div className="flex items-center justify-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                    {/* Progress Ring */}
                    <svg
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      {/* Background circle - light gray */}
                      <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                      {/* Progress circle with gap at bottom */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#286306ff"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.85} ${2 * Math.PI * 40 * 0.15}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">99%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2 sm:mt-3">
                  <div className="text-xs sm:text-[18px] font-bold text-gray-800">Quality</div>
                  <div className="text-xs sm:text-[18px] font-bold text-gray-800">Assured</div>
                </div>
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