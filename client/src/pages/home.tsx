import HeroRedesign from "@/components/hero-redesign";
import CoreValues from "@/components/core-values";
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
      <CoreValues />
      <ServicesList />
      <ServiceArea />
      <FaqAccordion />
    </>
  );
};

export default Home;
