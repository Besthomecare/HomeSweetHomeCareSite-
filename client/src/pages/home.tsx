import HeroCarousel from "@/components/hero-carousel";
import TrustBadges from "@/components/trust-badges";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Sweet Home Care | In-Home Care Services in Sarasota & Manatee County</title>
        <meta 
          name="description" 
          content="Professional, non-medical in-home care services for seniors in Sarasota, Manatee County, and Lakewood Ranch. Compassionate care that helps seniors maintain independence and dignity."
        />
      </Helmet>
      <HeroCarousel />
      <TrustBadges />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  );
};

export default Home;
