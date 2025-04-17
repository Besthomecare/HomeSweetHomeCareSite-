import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-merrifield font-bold mb-6">Ready to Discuss Care Options for Your Loved One?</h2>
          <p className="text-lg md:text-xl mb-8">Our care consultants are available to answer your questions and help you determine the best care plan for your family's needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="inline-block bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-300">
                Schedule a Free Consultation
              </a>
            </Link>
            <a 
              href="tel:9415551234" 
              className="inline-flex items-center justify-center bg-white hover:bg-opacity-90 text-primary font-semibold py-3 px-8 rounded-md text-lg transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg> 
              Call 941-555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
