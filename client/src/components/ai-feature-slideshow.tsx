import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Bot, Clock, Heart, ArrowRight, ChevronRight, ChevronLeft, Users } from "lucide-react";
import { Link } from "wouter";
import caregiverImage from "@assets/Screenshot 2025-04-17 134718.png";
import cardGamesImage from "@assets/ChatGPT Image Apr 17, 2025, 01_54_46 PM.png";

// Helper images of caregivers with seniors
const slides = [
  {
    title: "Caring Companionship",
    description: "Our compassionate caregivers provide meaningful companionship and personal connection.",
    image: caregiverImage,
    icon: <Heart className="h-10 w-10 text-white" />,
    features: [
      "Genuine human connection and emotional support",
      "Personalized care from carefully selected caregivers",
      "Meaningful conversations and shared activities"
    ]
  },
  {
    title: "Engaging Activities",
    description: "We keep seniors mentally active and socially engaged with fun, stimulating activities.",
    image: cardGamesImage,
    icon: <Users className="h-10 w-10 text-white" />,
    features: [
      "Card games and cognitive activities to keep minds sharp",
      "Personalized activities based on interests and abilities",
      "Social engagement that creates joy and connection"
    ]
  },
  {
    title: "24/7 AI Companionship",
    description: "Our innovative AI technology provides continuous companionship and support for your loved ones.",
    image: "https://images.pexels.com/photos/6414624/pexels-photo-6414624.jpeg?auto=compress&cs=tinysrgb&h=900",
    icon: <Clock className="h-10 w-10 text-white" />,
    features: [
      "Available around the clock when human caregivers aren't present",
      "Provides companionship during nighttime hours",
      "Always ready to engage in conversation"
    ]
  },
  {
    title: "Personalized Interaction",
    description: "Our AI learns preferences and adapts to provide meaningful, personalized engagement.",
    image: "https://images.pexels.com/photos/18429415/pexels-photo-18429415.jpeg?auto=compress&cs=tinysrgb&h=900",
    icon: <Heart className="h-10 w-10 text-white" />,
    features: [
      "Remembers important details about family members",
      "Adapts to communication style and preferences",
      "Provides tailored entertainment and stimulation"
    ]
  },
  {
    title: "Innovative Technology",
    description: "Cutting-edge AI technology that complements in-person care with digital companionship.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    icon: <Bot className="h-10 w-10 text-white" />,
    features: [
      "Easy to use voice interface for natural conversation",
      "Available through smart speakers or tablet devices",
      "Continuously improving with new capabilities"
    ]
  }
];

const AIFeatureSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="ai-companionship" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-4">
            <Brain className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-medium">Exclusive Technology</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            AI Companionship Technology
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Our innovative AI solution provides 24/7 engagement, conversation, and companionship
            that perfectly complements our in-person care services.
          </p>
        </div>
        
        <div className="relative bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          {/* Slideshow */}
          <div className="relative h-[500px] lg:h-[600px]">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== currentSlide}
              >
                {/* Image and Overlay */}
                <div className="absolute inset-0 bg-black/60">
                  <img 
                    src={slide.image} 
                    alt={slide.title === "24/7 AI Companionship" 
                      ? "Senior woman video chatting late at night—24/7 AI companionship."
                      : slide.title === "Personalized Interaction"
                      ? "Caregiver chatting one-on-one with a senior—personalized interaction."
                      : slide.title} 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center z-10">
                  <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="text-white text-center">
                        <div className="bg-accent p-3 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
                          {slide.icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl mb-6 text-white/90">{slide.description}</p>
                        <ul className="space-y-3 mb-8 mx-auto max-w-md">
                          {slide.features.map((feature, i) => (
                            <li key={i} className="flex items-start justify-center">
                              <div className="bg-accent/20 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div>
                          <Link href="/contact">
                            <Button className="bg-accent hover:bg-accent/90 text-white mt-2">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        {/* Right side - this can be empty to give the text more space */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Indicator dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-accent" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            Experience the Future of Senior Companionship
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
            Our AI Companionship technology sets us apart from other care providers.
            Contact us today to learn how this innovative solution can enhance your loved one's care.
          </p>
          <div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-auto font-semibold">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatureSlideshow;