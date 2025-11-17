import { Shield, Clock, Home, CheckCircle } from "lucide-react";
import LeadForm from "./lead-form";

const HeroRedesign = () => {
  const trustBadges = [
    { icon: Shield, text: "Screened Caregivers" },
    { icon: Clock, text: "Flexible Hours" },
    { icon: Home, text: "In-Home Service" },
    { icon: CheckCircle, text: "Licensed & Insured" },
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
              Compassionate In-Home Care, Close to Home
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Trusted non-medical help for seniors in Sarasota, Bradenton, and Lakewood Ranch—on your schedule, in the comfort of home.
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
            <div className="flex flex-col justify-center space-y-6">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    data-testid={`trust-badge-${index}`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-xl md:text-2xl font-semibold text-primary">
                      {badge.text}
                    </span>
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
