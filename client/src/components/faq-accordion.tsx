import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

const FaqAccordion = () => {
  const faqs = [
    {
      question: "How fast can we start?",
      answer: "Most families can start within 48-72 hours after an initial consultation.",
    },
    {
      question: "What does it cost?",
      answer: "Rates vary by service type and schedule. Contact us for a personalized quote.",
    },
    {
      question: "Minimum hours?",
      answer: "We offer flexible scheduling starting from a few hours per week.",
    },
    {
      question: "Can we change caregivers?",
      answer: "Yes, we work with you to find the perfect match and can make changes if needed.",
    },
    {
      question: "How are caregivers screened?",
      answer: "All caregivers undergo Florida Level 2 background checks and thorough training.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-fluid px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-secondary rounded-lg px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:text-primary/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg md:text-xl leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <Link href="/faq">
            <span className="text-lg text-primary hover:text-primary/80 font-semibold underline cursor-pointer" data-testid="link-more-faqs">
              More FAQs
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
