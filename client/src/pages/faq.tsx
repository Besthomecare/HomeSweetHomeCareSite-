import { Helmet } from "react-helmet";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our in-home care services, caregiver screening, costs, scheduling, and more."
        />
      </Helmet>
      
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Find answers to common questions about our care services and how we can help your loved ones 
              maintain independence and dignity at home.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              If you don't find the answer you're looking for, please don't hesitate to contact us directly.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-4 text-lg h-auto font-semibold">
                Contact Us With Your Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FaqSection />
      
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We understand that choosing in-home care for a loved one is an important decision. 
              Our care experts are here to help answer any questions you may have and guide you through the process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                  Schedule a Free Consultation
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Meet with our care experts to discuss your specific needs and how we can help.
                </p>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg h-auto">
                    Request Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                  Speak with a Care Advisor
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Call us directly to speak with a care advisor who can answer your questions.
                </p>
                <a href="tel:(941) 200-0848">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg h-auto">
                    Call (941) 200-0848
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
};

export default Faq;
