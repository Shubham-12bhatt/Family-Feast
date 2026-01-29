import { Sprout, Settings, Award, Shield } from 'lucide-react';
import FlipCard from './FlipCard';

function FeatureSection() {
  const cards = [
    {
      icon: <Sprout size={56} strokeWidth={1.5} />,
      title: 'Farm-Fresh Sourcing',
      description: 'Carefully selected paddy from trusted farms',
      backImage:
        'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Settings size={56} strokeWidth={1.5} />,
      title: 'Advanced Processing',
      description: 'Modern techniques to preserve taste and aroma',
      backImage:
        'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Award size={56} strokeWidth={1.5} />,
      title: 'Premium Quality',
      description: 'Strict checks meeting international standards',
      backImage:
        'https://images.pexels.com/photos/1094117/pexels-photo-1094117.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Shield size={56} strokeWidth={1.5} />,
      title: 'Global Trust & Reach',
      description: 'Reliably serving partners across the world',
      backImage:
        'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
  className="font-poppins font-bold text-[32px] leading-8 mb-2"
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
