import { Helmet } from "react-helmet";
import ContactSection from "@/components/contact-section";
import { useEffect } from "react";

const Contact = () => {
  // Initialize HubSpot form when this component mounts
  useEffect(() => {
    // Wait a short time to ensure DOM is ready
    setTimeout(() => {
      if (window.reinitHubSpotForms) {
        window.reinitHubSpotForms();
      }
    }, 100);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Contact Home Sweet Home Care to request a free care assessment or learn more about our in-home care services for seniors in Sarasota and Manatee County."
        />
      </Helmet>
      
      <section className="bg-secondary bg-opacity-30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg">
              Have questions about our services or ready to discuss care options for your loved one? 
              We're here to help. Reach out to us using the form below or contact us directly by phone or email.
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
};

export default Contact;
