import { Check } from "lucide-react";
import cardGamesImage from "@assets/ChatGPT Image Apr 17, 2025, 01_54_46 PM.png";
import caregiverLadyImage from "@assets/caregiver-elderly-lady.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-[#F8F5F2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            About Home Sweet Home Care
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            We're dedicated to providing exceptional care that enhances the quality of life 
            for seniors in Sarasota, Manatee County, and Lakewood Ranch.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4 text-center">Our Mission</h3>
            <p className="mb-4 text-center">
              To provide compassionate, personalized care that enables seniors to maintain their 
              independence and dignity while remaining in the comfort of their own homes.
            </p>
            <p className="mb-6 text-center">
              We believe that everyone deserves to age with dignity, surrounded by comfort, 
              care, and respect.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent text-center">
              <p className="italic">
                "Our approach is built on creating meaningful relationships with each client 
                and their families to ensure personalized care that truly makes a difference."
              </p>
              <p className="font-semibold mt-2">- Jane Smith, Founder</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={caregiverLadyImage} 
              alt="Caregiver bringing warmth and happiness while assisting an elderly lady, embodying our compassionate care mission." 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-10">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4 text-center">Our Caregivers</h3>
            <p className="mb-4 text-center">
              Our caregivers are the heart of our service. Each team member undergoes rigorous 
              screening, including:
            </p>
            <ul className="mb-6 space-y-2 mx-auto max-w-md">
              {[
                "Comprehensive background checks",
                "Professional references verification",
                "Skills assessment and certification verification",
                "Ongoing training and professional development"
              ].map((item, index) => (
                <li key={index} className="flex items-start justify-center">
                  <Check className="text-accent mt-1 mr-2 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center">
              We carefully match caregivers with clients based on needs, personality, and 
              preferences to ensure the perfect fit.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={cardGamesImage} 
              alt="Caregiver playing card games with elderly client" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
