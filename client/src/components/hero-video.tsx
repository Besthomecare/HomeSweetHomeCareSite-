import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroVideo = () => {
  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Video Background */}
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
      
      {/* Multi-layer overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      
      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-2xl">
              Home Sweet Home Care
            </h1>
            <p className="text-white text-xl md:text-2xl mb-6 leading-relaxed drop-shadow-lg">
              Compassionate in-home care services for seniors in Sarasota, Manatee County, and Lakewood Ranch
            </p>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow-lg">
              Helping your loved ones maintain independence in the comfort of their own home
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+19412000848"
                className="inline-flex items-center justify-center font-medium text-base sm:text-lg text-white px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
                data-testid="button-call-now-hero"
              >
                Call Now
              </a>
              
              <a 
                href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium text-base sm:text-lg text-white px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-accent hover:bg-accent/90"
                data-testid="button-book-consultation-hero"
              >
                <span className="hidden sm:inline">Book Your Free In-Home Consultation</span>
                <span className="sm:hidden">Book Free Consultation</span>
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Controls Hint */}
      <div className="absolute bottom-4 right-4 text-white opacity-60">
        <div className="flex items-center space-x-2 text-sm">
          <Play className="h-4 w-4" />
          <span>Auto-playing video</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;