import { useState } from 'react';

function FlipCard({ icon, title, description, backImage }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[360px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rotate-y-0 rounded-[28px] overflow-hidden shadow-xl">
          <div className="h-full flex flex-col bg-white">
            
            {/* Top colored section */}
            <div className="h-36 bg-feature-light flex items-center justify-center">
              <div className="text-black">{icon}</div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
            <h3 className="font-poppins text-[20px] font-semibold text-black mb-3 text-center">
                {title}
              </h3>
              <p className="font-poppins text-[14px] font-normal text-gray-600 text-center leading-relaxed">

                {description}
              </p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[28px] overflow-hidden shadow-xl">
          <img
            src={backImage}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-end p-6">
            <div className="text-white">
              <h3 className="font-poppins text-lg font-bold">{title}</h3>
              <p className="font-poppins text-sm opacity-90">
                {description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FlipCard;
