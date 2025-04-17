import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/services-section";
import ServiceRestrictions from "@/components/service-restrictions";
import AIFeatureSlideshow from "@/components/ai-feature-slideshow";
import CtaSection from "@/components/cta-section";
import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Comprehensive in-home care services including companionship, personal care, medication reminders, housekeeping, meal preparation, and transportation."
        />
      </Helmet>
      
      <section className="bg-secondary bg-opacity-30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-lg mb-6">
              We offer a comprehensive range of non-medical in-home care services, 
              all tailored to meet the unique needs of each client. Our focus is on 
              helping seniors maintain their independence while providing families 
              with peace of mind.
            </p>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 h-auto font-semibold">
                Request a Free Care Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Companionship Feature - Now with Slideshow */}
      <AIFeatureSlideshow />
      
      <section className="py-12 bg-[#F8F5F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Personalized Care Plans</h2>
            <p className="text-lg">
              Every client receives a personalized care plan developed after a thorough assessment 
              of their needs, preferences, and lifestyle. Whether you need a few hours of assistance 
              each week or round-the-clock care, we'll create a solution that works for you.
            </p>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Assessment</h3>
                <p>We conduct a thorough evaluation of care needs and preferences</p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Planning</h3>
                <p>We develop a customized care plan tailored to specific requirements</p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Matching</h3>
                <p>We carefully match caregivers based on needs and compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <ServiceRestrictions />
      
      <section className="py-16 bg-[#F8F5F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">Flexible Care Scheduling</h2>
            <p className="text-lg mb-8">
              We understand that care needs can change and vary. That's why we offer flexible 
              scheduling options to ensure you receive care exactly when you need it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Hourly Care</h3>
                <p>For those who need assistance for a few hours a day or week</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Daily Care</h3>
                <p>Regular daily visits to assist with routine activities and tasks</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">24/7 Care</h3>
                <p>Round-the-clock support for those requiring continuous assistance</p>
              </div>
            </div>
            
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 h-auto font-semibold">
                  Get Started with a Care Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
};

export default Services;
