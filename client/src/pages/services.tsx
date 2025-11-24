import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/services-section";
import CtaSection from "@/components/cta-section";
import { Link } from "wouter";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - In-Home Senior Care in Sarasota & Bradenton | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Comprehensive non-medical in-home care services in Sarasota and Bradenton: companionship, personal care, medication reminders, housekeeping, meal preparation, and transportation for seniors."
        />
      </Helmet>
      
      <section className="bg-[#F8F5F2] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C5F2D] mb-6">
              Compassionate In-Home Care Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We provide comprehensive non-medical care services tailored to help seniors maintain 
              independence and dignity in the comfort of their own homes throughout Sarasota, 
              Bradenton, and Lakewood Ranch.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-[#2C5F2D] hover:bg-[#234a24] text-white px-8 py-6 text-lg md:text-xl h-auto font-semibold rounded-lg"
                data-testid="button-request-assessment-top"
              >
                Request a Free Care Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C5F2D] mb-8 text-center">
              Personalized Care Plans
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 text-center leading-relaxed">
              Every client receives a personalized care plan developed after a thorough assessment 
              of their needs, preferences, and lifestyle. Whether you need a few hours of assistance 
              each week or round-the-clock care, we'll create a solution that works for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">Assessment</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We conduct a thorough evaluation of care needs and preferences
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">Planning</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We develop a customized care plan tailored to specific requirements
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">Matching</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We carefully match caregivers based on needs and compatibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-[#F8F5F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C5F2D] mb-8 text-center">
              Flexible Care Scheduling
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 text-center leading-relaxed">
              We understand that care needs can change and vary. That's why we offer flexible 
              scheduling options to ensure you receive care exactly when you need it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">Hourly Care</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  For those who need assistance for a few hours a day or week
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">Daily Care</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Regular daily visits to assist with routine activities and tasks
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C5F2D] mb-3">24/7 Care</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Round-the-clock support for those requiring continuous assistance
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/contact">
                <Button 
                  className="bg-[#2C5F2D] hover:bg-[#234a24] text-white px-8 py-6 text-lg md:text-xl h-auto font-semibold rounded-lg"
                  data-testid="button-request-assessment-bottom"
                >
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
