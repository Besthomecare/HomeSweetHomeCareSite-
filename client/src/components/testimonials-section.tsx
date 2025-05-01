import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <div className="flex items-center mb-4">
        <div className="text-accent flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
        <div className="ml-2 text-sm text-gray-500">Google Review</div>
      </div>
      <p className="italic mb-6">{testimonial.quote}</p>
      <div className="flex items-center mt-auto">
        <div className="bg-secondary bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <span className="font-heading font-bold text-primary text-xl">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.relation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            What Families Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            Read how our care has made a difference in the lives of seniors and their families.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.google.com/business" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors font-semibold flex items-center justify-center"
          >
            Read more Google Reviews 
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
