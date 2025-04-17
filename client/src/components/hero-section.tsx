import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-secondary bg-opacity-30 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Compassionate In-Home Care for Your Loved Ones
            </h1>
            <p className="text-lg mb-8">
              We provide professional, non-medical care services that help seniors maintain 
              independence and dignity in the comfort of their own homes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 h-auto font-semibold">
                  Request Care Assessment
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 h-auto font-semibold"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Caregiver helping elderly woman" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
