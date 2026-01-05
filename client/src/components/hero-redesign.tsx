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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Compassionate care in your own home.
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Trusted help and companionship services for seniors in Sarasota, Bradenton, Venice, and Lakewood Ranch on your schedule, in the comfort of your own home.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section Below Video */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-fluid px-4 md:px-6 max-w-7xl mx-auto">
          
          {/* What We Help With - Full Width Bar */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C5F2D] mb-5 text-center">
              What We Help With
            </h2>
            <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-y-3 md:gap-x-8 md:gap-y-3 max-w-md md:max-w-none mx-auto">
              <li className="flex items-center text-lg md:text-xl text-gray-700">
                <span className="w-2 h-2 bg-[#2C5F2D] rounded-full mr-3 flex-shrink-0"></span>
                Companionship & conversation
              </li>
              <li className="flex items-center text-lg md:text-xl text-gray-700">
                <span className="w-2 h-2 bg-[#2C5F2D] rounded-full mr-3 flex-shrink-0"></span>
                Transportation & errands
              </li>
              <li className="flex items-center text-lg md:text-xl text-gray-700">
                <span className="w-2 h-2 bg-[#2C5F2D] rounded-full mr-3 flex-shrink-0"></span>
                Medication reminders
              </li>
              <li className="flex items-center text-lg md:text-xl text-gray-700">
                <span className="w-2 h-2 bg-[#2C5F2D] rounded-full mr-3 flex-shrink-0"></span>
                Light housekeeping & laundry
              </li>
              <li className="flex items-center text-lg md:text-xl text-gray-700">
                <span className="w-2 h-2 bg-[#2C5F2D] rounded-full mr-3 flex-shrink-0"></span>
                Meal planning & preparation
              </li>
            </ul>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Trust Badges */}
            <div className="flex flex-col space-y-5 h-full">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    data-testid={`trust-badge-${index}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {badge.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-700 font-medium">
                        {badge.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Separator for mobile view */}
            <div className="md:hidden border-t-2 border-gray-300 my-8"></div>

            {/* Right Column: Lead Form */}
            <div className="h-full flex items-stretch">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroRedesign;
