import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Discuss Care Options?
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation care assessment. Our team is here to answer 
          your questions and help you find the perfect care solution for your loved one.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact">
            <Button 
              variant="secondary" 
              className="bg-white hover:bg-opacity-90 text-primary px-8 py-3 h-auto font-semibold"
            >
              Schedule an Assessment
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button 
              className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 h-auto flex items-center justify-center font-semibold"
            >
              <Phone className="mr-2" size={18} /> Call {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
