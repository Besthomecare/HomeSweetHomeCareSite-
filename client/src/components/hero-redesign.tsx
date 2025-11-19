import { Clock, Home, Heart, ClipboardList } from "lucide-react";
import LeadForm from "./lead-form";

const HeroRedesign = () => {
  const trustBadges = [
    { icon: Clock, title: "Flexible Hours", text: "Care when you need it, tailored to your schedule" },
    { icon: Home, title: "In-Home Service", text: "Comfort and care in familiar surroundings" },
    { icon: Heart, title: "Compassionate Care", text: "Personalized attention delivered with dignity" },
    { icon: ClipboardList, title: "Customized Care Plan", text: "Support designed around your loved one's unique needs" },
  ];

  return (
    <>
      {/* Video Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
          poster="/api/placeholder/1920/1080"
          aria-label="Home Sweet Home Care B-roll video"
        >
          <source src="/website-broll.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        {/* Title and Subhead */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container-fluid px-4 md:px-6 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Compassionate care in your own home.
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Trusted help and companionship services for seniors in Sarasota, Bradenton, Venice, and Lakewood Ranch on your schedule, in the comfort of your own home.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section Below Video */}
      <section className="bg-gradient-to-b from-secondary/30 to-white py-12 md:py-16">
        <div className="container-fluid px-4 md:px-6 max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Trust Badges */}
            <div className="flex flex-col justify-between space-y-8 h-full">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-1"
                    data-testid={`trust-badge-${index}`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                        {badge.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-700">
                        {badge.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Lead Form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroRedesign;
