import { Users, Clock, Home, Heart } from "lucide-react";

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustBadge = ({ icon, title, description }: TrustBadgeProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-secondary bg-opacity-30 p-4 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const TrustBadges = () => {
  const badges = [
    {
      icon: <Users className="text-3xl text-accent" size={24} />,
      title: "Screened Caregivers",
      description: "Background-checked & certified professionals"
    },
    {
      icon: <Clock className="text-3xl text-accent" size={24} />,
      title: "Flexible Hours & 24/7 Care",
      description: "Care when you need it, tailored to your schedule"
    },
    {
      icon: <Home className="text-3xl text-accent" size={24} />,
      title: "In-Home Service",
      description: "Comfort and care in familiar surroundings"
    },
    {
      icon: <Heart className="text-3xl text-accent" size={24} />,
      title: "Compassionate Care",
      description: "Personalized attention with dignity"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {badges.map((badge, index) => (
            <TrustBadge
              key={index}
              icon={badge.icon}
              title={badge.title}
              description={badge.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
