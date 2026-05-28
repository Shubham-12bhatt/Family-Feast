import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Icon4 from '../assets/Icon4.png';
import FlipCard from './FlipCard';

function FeatureSection() {
  const cards = [
    {
      icon: <img src={Icon1} alt="Farm-Fresh Sourcing" className="w-14 h-14 object-contain" />,
      title: 'Farm-Fresh Sourcing',
      description: 'Carefully selected paddy from trusted farms',
      backImage:
        'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <img src={Icon2} alt="Advanced Processing" className="w-14 h-14 object-contain" />,
      title: 'Advanced Processing',
      description: 'Modern techniques to preserve taste and aroma',
      backImage:
        'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <img src={Icon3} alt="Premium Quality" className="w-14 h-14 object-contain" />,
      title: 'Premium Quality',
      description: 'Strict checks meeting international standards',
      backImage:
        'https://images.pexels.com/photos/1094117/pexels-photo-1094117.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <img src={Icon4} alt="Global Trust & Reach" className="w-14 h-14 object-contain" />,
      title: 'Global Trust & Reach',
      description: 'Reliably serving partners across the world',
      backImage:
        'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="bg-white pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20 lg:pb-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
  className="font-poppins font-bold text-3xl md:text-[50px] mb-2 leading-tight md:leading-normal"
  style={{ color: 'var(--color-feature)' }}
>
  What Sets Us Apart
</h2>

          <p className="font-poppins text-lg text-black font-light">
            Serving families. Supplying the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              backImage={card.backImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
