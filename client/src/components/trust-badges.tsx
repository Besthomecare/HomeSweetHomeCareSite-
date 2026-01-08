import { Users, Clock, Home, Heart } from "lucide-react";

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustBadge = ({ icon, title, description }: TrustBadgeProps) => {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <div className="bg-secondary p-4 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-lg md:text-xl mb-2 min-h-[3.5rem] flex items-center text-primary">{title}</h3>
      <p className="text-base md:text-lg">{description}</p>
    </div>
  );
};

const TrustBadges = () => {
  const badges = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Screened Caregivers",
      description: "Background-checked & certified professionals"
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "Flexible Hours",
      description: "Care when you need it, tailored to your schedule"
    },
    {
      icon: <Home className="text-primary" size={24} />,
      title: "In-Home Service",
      description: "Comfort and care in familiar surroundings"
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Compassionate Care",
      description: "Personalized attention with dignity"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
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
