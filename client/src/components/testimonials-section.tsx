import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 min-w-[300px] md:min-w-[400px] flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="text-accent flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
        <div className="ml-2 text-sm text-gray-500">Google Review</div>
      </div>
      <p className="italic mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      checkScrollButtons();
      
      return () => {
        slider.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          <button 
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:text-accent focus:outline-none ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:text-accent focus:outline-none ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } transition-opacity`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.google.com/business" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-primary transition-colors font-semibold flex items-center justify-center"
          >
            Read more Google Reviews 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
