import { Clock, Home, Heart, ClipboardList } from "lucide-react";
import LeadForm from "./lead-form";

const HeroRedesign = () => {
  const trustBadges = [
    { 
      icon: Clock, 
      title: "Flexible Hours", 
      text: "We work around your schedule. From a few hours a week to full-time support, our caregivers are available when you need them most."
    },
    { 
      icon: Home, 
      title: "In-Home Service", 
      text: "Your loved one stays safe and comfortable in the place they know best. Our caregivers come to you, eliminating stressful transitions to unfamiliar facilities."
    },
    { 
      icon: Heart, 
      title: "Compassionate Care", 
      text: "Every caregiver is carefully selected, background-checked, and trained to treat your loved one with respect and kindness. We build genuine relationships, not just complete tasks."
    },
    { 
      icon: ClipboardList, 
      title: "Customized Care Plan", 
      text: "After a thorough in-home assessment, we create a personalized plan that addresses your loved one's specific needs, routines, and preferences."
    },
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
