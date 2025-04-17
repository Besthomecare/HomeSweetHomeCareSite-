import { Helmet } from "react-helmet";
import AboutSection from "@/components/about-section";
import TrustBadges from "@/components/trust-badges";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Learn about Home Sweet Home Care's mission, values, and our team of professional caregivers dedicated to providing exceptional in-home care for seniors."
        />
      </Helmet>
      
      <section className="bg-secondary bg-opacity-30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
            <p className="text-lg mb-4">
              Home Sweet Home Care is dedicated to providing exceptional in-home care services 
              that enable seniors to maintain their independence, dignity, and quality of life
              in the comfort of their own homes.
            </p>
            <p className="text-lg">
              Our team of compassionate, professional caregivers is committed to delivering 
              personalized care that meets the unique needs of each client we serve.
            </p>
          </div>
        </div>
      </section>
      
      <TrustBadges />
      <AboutSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Compassion</h3>
                <p>
                  We approach each client with genuine care and empathy, understanding the 
                  challenges that come with aging and providing support with kindness and respect.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Dignity</h3>
                <p>
                  We believe that every person deserves to be treated with dignity, 
                  regardless of age or ability. Our services are designed to promote 
                  independence and preserve dignity.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Excellence</h3>
                <p>
                  We are committed to delivering the highest quality of care through ongoing 
                  training, professional development, and adherence to best practices in 
                  senior care.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Reliability</h3>
                <p>
                  Families can count on us to provide consistent, dependable care that they 
                  can trust. We're there when you need us, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default About;
