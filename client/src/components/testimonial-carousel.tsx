import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "Lynette fit in like part of the family and allowed everyone to relax and truly enjoy the evening.",
      name: "Deb"
    },
    {
      quote: "I had a very positive experience with Home Sweet Home Care.",
      name: "Dominic"
    },
    {
      quote: "Mom LOVES Alyssa. When I get home, she is so happy.",
      name: "Kim"
    },
    {
      quote: "Devin was at my home immediately following my surgery.",
      name: "Dominic"
    },
    {
      quote: "A perfect evening with mom, made possible through compassionate care.",
      name: "Deb"
    },
    {
      quote: "He made sure I was well enough to take care of myself before he left.",
      name: "Dominic"
    },
    {
      quote: "I can't thank everyone enough.",
      name: "Kim"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('left');
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsSliding(false);
      }, 500);
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setSlideDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsSliding(false);
    }, 500);
  };

  const goToNext = () => {
    setSlideDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsSliding(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentIndex ? 'left' : 'right');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsSliding(false);
    }, 500);
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t-2 border-gray-300">
      <div className="container-fluid px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 text-center">
          What Our Families Say
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:left-4 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            
            <div 
              className={`px-12 md:px-20 text-center transition-all duration-500 ease-in-out ${
                isSliding 
                  ? slideDirection === 'left' 
                    ? 'opacity-0 -translate-x-8' 
                    : 'opacity-0 translate-x-8'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 italic leading-relaxed mb-6 min-h-[100px] md:min-h-[80px] flex items-center justify-center">
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="text-xl md:text-2xl font-semibold text-primary">
                {testimonials[currentIndex].name}
              </p>
            </div>
            
            <button
              onClick={goToNext}
              className="absolute right-0 md:right-4 z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
