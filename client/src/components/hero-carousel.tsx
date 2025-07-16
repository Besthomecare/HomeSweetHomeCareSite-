import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import carouselInHomeHQ from "@assets/carousel-inhome-hq.jpeg";
import carouselCooking from "@assets/carousel-cooking.jpeg";
import carouselHands from "@assets/carousel-hands.jpeg";

const slides = [
  {
    image: carouselInHomeHQ,
    title: "In-Home Assistance",
    subtitle: "Professional care services in the comfort of home",
    alt: "Caregiver delivering groceries and assisting a senior at home—high-quality in-home assistance image."
  },
  {
    image: carouselCooking,
    title: "Daily Living Support",
    subtitle: "Help with meals, activities, and household tasks",
    alt: "Caregiver and senior preparing lunch together in a cozy kitchen."
  },
  {
    image: carouselHands,
    title: "Compassionate Care", 
    subtitle: "Personalized attention with dignity and respect",
    alt: "Daughter holding her elderly father's hands—warm, reassuring support."
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
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
            aria-label={slide.alt}
            role="img"
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