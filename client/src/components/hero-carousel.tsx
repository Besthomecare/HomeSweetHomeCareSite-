import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import seniorCaregiver1 from "@assets/senior-caregiver-1.jpg";
import seniorCaregiver2 from "@assets/senior-caregiver-2.jpg";
import seniorCaregiver3 from "@assets/senior-caregiver-3.jpg";

const slides = [
  {
    image: seniorCaregiver1,
    title: "Personalized Care",
    subtitle: "Tailored to your unique needs and preferences",
  },
  {
    image: seniorCaregiver2,
    title: "Compassionate Caregivers",
    subtitle: "Professional companion care you can trust",
  },
  {
    image: seniorCaregiver3,
    title: "Peace of Mind", 
    subtitle: "For you and your loved ones",
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h2 className="text-white text-4xl md:text-5xl font-heading font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-white text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* AI Companionship Feature Box */}
      <div className="absolute bottom-10 right-10 max-w-md bg-white rounded-lg shadow-xl p-6 border-l-4 border-accent">
        <h3 className="font-heading text-xl font-bold text-primary mb-2">
          AI Companionship Technology
        </h3>
        <p className="text-gray-700 mb-4">
          24/7 engagement and personalized interaction through our innovative AI technology. 
          The perfect complement to our in-person companion care services.
        </p>
        <Link href="/services">
          <div className="flex items-center text-accent font-semibold cursor-pointer hover:underline">
            Learn more about our AI solution <ArrowRight className="ml-1" size={16} />
          </div>
        </Link>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-accent" : "bg-white bg-opacity-50" 
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;