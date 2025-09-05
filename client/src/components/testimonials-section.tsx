import React, { useEffect, useRef } from "react";
import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialType } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 h-full max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="text-accent flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
      </div>
      <p className="italic mb-8 text-center text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center justify-center">
        <div className="bg-secondary bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center mr-4">
          <span className="font-heading font-bold text-primary text-xl">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-lg">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.relation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (api) {
      // Start auto-rotation when api is available
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000); // Change slide every 5 seconds
    }
    
    // Clean up the interval when component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

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
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
        

      </div>
    </section>
  );
};

export default TestimonialsSection;
