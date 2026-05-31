import { Wheat } from "lucide-react";

export default function Basmati1121() {
  const riceVarieties = [
    {
      name: "1121 White Sella Basmati",
      image: "/images/1121RawBasmati.jpg",
    },
    {
      name: "1121 Steam Basmati",
      image: "/images/1121SteamBasmati.jpg",
    },
    {
      name: "1121 Golden Sella Basmati",
      image: "/images/1121GoldenSella.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-60 sm:h-70 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/grain.png')",
          backgroundPosition: "center center",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <h1 className="relative z-10 text-4xl lg:text-6xl font-bold text-white text-center">
          1121 Basmati Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#F9F5EF] to-[#F5EFEB] pt-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              1121 Basmati Rice
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Description Box */}
          <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
              The key grain characteristics is, it has extra-long slender grains
              with a milled rice kernel length. Also, the kernel elongation
              ratio is also the highest ever known for any rice line. It also
              possesses the strong aroma with excellent cooking in the parbal
              test. The volume expansion in the cooked rice is more than 4.0
              times thus it helps in realizing more cooked rice volume with
              lesser milled rice, a trait most preferred in the household as
              well as the most preferable hotel industry.
            </p>
          </div>
        </div>
        <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information:</h3>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-gray-700">Purity</td>
                <td className="py-2 text-gray-600">95%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-gray-700">Average Grain Length</td>
                <td className="py-2 text-gray-600">8.35 mm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-gray-700">Broken</td>
                <td className="py-2 text-gray-600">Nil</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 font-medium text-gray-700">Moisture</td>
                <td className="py-2 text-gray-600">Below 12%</td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-gray-700">Sortex Cleaned</td>
                <td className="py-2 text-gray-600">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Variety Section */}
        <div className="bg-white py-10 mt-10 pb-30">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold pb-2 text-gray-800">
              Variety
            </h3>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Rice Variety Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-4 lg:mx-auto">
              {riceVarieties.map((variety, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C5A065]/30 border border-transparent w-full max-w-xs lg:max-w-none mx-auto lg:mx-0"
                >
                  {/* Image with subtle zoom - made smaller on mobile */}
                  <div className="aspect-square overflow-hidden w-full">
                    <img src={variety.image}
                      alt={variety.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]" loading="lazy" decoding="async" />
                  </div>

                  {/* Label with matching glow */}
                  <div className="bg-[#7A2E45] text-white p-3 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(122,46,69,0.4)]">
                    <div className="flex items-center justify-center space-x-2">
                      <Wheat className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-center">
                        {variety.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
