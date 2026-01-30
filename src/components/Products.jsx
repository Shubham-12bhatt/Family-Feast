import { Heart } from "lucide-react";

// Vite assets
import basmati from "../assets/basmati.png";
import whiteSella from "../assets/whitesella.png";
import goldenSella from "../assets/goldensella.png";

export default function OurProducts() {
  const products = [
    { name: "Basmati Rice", image: basmati },
    { name: "Basmati White Sella Rice", image: whiteSella },
    { name: "Basmati Golden Sella Rice", image: goldenSella },
  ];

  return (
    <section
      className="py-20 bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-[#7A2E45] mb-16 mt-10">
        Our Products
      </h2>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="
              relative bg-white 
              rounded-[32px] 
              shadow-lg 
              px-10 pt-10 pb-8 
              text-center 
              w-[320px]
            "
          >
            {/* Heart Corner */}
            <div className="absolute top-0 right-0 bg-[#7A2E45] w-14 h-14 rounded-bl-[28px] rounded-tr-[28px] flex items-center justify-center">
              <Heart size={22} className="text-white" />
            </div>

            {/* Image (already circular) */}
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 mx-auto"
            />

            {/* Title */}
            <p className="mt-6 text-lg font-semibold text-black">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
