import { Wheat } from "lucide-react";
import { Link } from "react-router-dom";

export default function Basmati() {
  const riceTypes = [
    { title: '1121 Basmati Rice', path: '/basmati/basmati-1121' },
    { title: '1509 Basmati Rice', path: '/basmati/basmati-1509' },
    { title: '1401 Basmati Rice', path: '/basmati/basmati-1401' },
    { title: 'Pusa Basmati Rice', path: '/basmati/pusa' },
    { title: 'Sharbati Basmati Rice', path: '/sharbati' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-50 lg:h-80 sm:h-70 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/grain.png')",
          backgroundPosition: "center center",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <h1 className=" relative z-10 text-4xl lg:text-6xl font-bold text-white text-center">
          Indian Basmati Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#F9F5EF] to-[#F5EFEB] pt-16 ">
        <div className="container mx-auto px-6 pb-5">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
              Indian Basmati Rice
            </h2>
            <div className="w-40 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          {/* Left Content */}
          <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
              Indian Basmati Rice is a premium long-grain rice variety known
              for its unique aroma, delicate flavor, and slender grains. It
              is primarily grown in the Himalayan region of India and is
              highly regarded for its quality and culinary versatility.
              Basmati rice is often used in traditional Indian dishes such
              as biryani, pulao, and various rice-based recipes. The grains
              are known for their ability to remain separate and fluffy when
              cooked, making them ideal for a wide range of cuisines. Indian
              Basmati Rice is available in various forms, including raw,
              steamed, and parboiled (sella), each with its own distinct
              characteristics. It is a staple in Indian households and is
              also exported worldwide, making it a popular choice for rice
              lovers globally.
            </p>
          </div>
        </div>

        {/* Centered Content Grid */}
        <div className="bg-white py-10 mt-10">
          <div className="grid lg:grid-cols-2 gap-12 my-auto py-20 items-center max-w-5xl mx-auto">
            {/* Left - Rice Types List */}
            <div className="mx-20 lg:mx-0 space-y-3">
              {riceTypes.map((riceType, index) => (
                <Link 
                  to={riceType.path}
                  key={index}
                  className="block"
                >
                  <div className="flex items-center bg-[#7A2E45] text-white mb-4 px-6 py-4 rounded-lg shadow-md
                      transition-all duration-300 ease-in-out
                      hover:bg-[#8B3A52] hover:shadow-lg hover:-translate-y-1
                      group">
                    <Wheat className="w-5 h-5 mr-4 text-white transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium transition-all duration-300 group-hover:tracking-wide">
                      {riceType.title}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right - Image */}
            <div className="flex justify-center items-center">
              <div className="relative group cursor-pointer">
                <img
                  src="/images/sample.jpg"
                  alt="Hands holding basmati rice grains"
                  className="w-full max-w-md h-auto rounded-2xl shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                />

                {/* Glowy gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7A2E45] via-[#C5A065] to-[#F9F5EF] opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-xl -z-20"></div>

                {/* Decorative blobs with animation */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C5A065]/20 rounded-full opacity-60 -z-10 transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:opacity-80 group-hover:bg-[#C5A065]/40 group-hover:-rotate-12"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-100 rounded-full opacity-60 -z-10 transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:opacity-80 group-hover:bg-yellow-200 group-hover:rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
