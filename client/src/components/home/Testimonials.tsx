import TestimonialCard from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    quote: "Home Sweet Home Care has been a blessing for our family. Their caregivers are compassionate, reliable, and truly care about my mother's well-being. I can finally rest easy knowing she's in good hands.",
    name: "Jane D.",
    relation: "Daughter of client",
    rating: 5,
    initials: "JD"
  },
  {
    quote: "We interviewed several agencies before choosing Home Sweet Home Care, and we couldn't be happier with our decision. Their attention to detail and genuine concern for my father has made all the difference in his quality of life.",
    name: "Robert S.",
    relation: "Son of client",
    rating: 5,
    initials: "RS"
  },
  {
    quote: "When my mom needed care after her surgery, Home Sweet Home Care stepped in with professionalism and warmth. Their caregiver became like family, and we're grateful for the peace of mind they've provided during a difficult time.",
    name: "Mary L.",
    relation: "Daughter of client",
    rating: 5,
    initials: "ML"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merrifield font-bold text-primary mb-4">What Families Say About Us</h2>
          <p className="text-lg text-textDark max-w-3xl mx-auto">Hear from families who have experienced our compassionate care services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              relation={testimonial.relation}
              rating={testimonial.rating}
              initials={testimonial.initials}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/place/?q=place_id:ChIJn0G-9TQxw4gRggg-wSSg"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent font-semibold hover:underline"
          >
            Read More Google Reviews 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
