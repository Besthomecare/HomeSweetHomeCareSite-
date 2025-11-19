import HeroRedesign from "@/components/hero-redesign";
import AboutSection from "@/components/about-section";
import HowToGetStarted from "@/components/how-to-get-started";
import ServicesList from "@/components/services-list";
import ServiceArea from "@/components/service-area";
import FaqAccordion from "@/components/faq-accordion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Sweet Home Care | In-Home Senior Care in Sarasota & Bradenton</title>
        <meta 
          name="description" 
          content="Compassionate non-medical in-home care—companionship, transportation, meals, housekeeping. Free care assessment. Call (941) 200-0848."
        />
      </Helmet>
      <HeroRedesign />
      <HowToGetStarted />
      <ServicesList />
      <ServiceArea />
      <AboutSection />
      <FaqAccordion />
    </>
  );
};

export default Home;
