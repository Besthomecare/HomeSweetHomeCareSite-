import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-merrifield font-bold text-primary mb-4">Why Choose Home Sweet Home Care</h2>
          <p className="text-lg text-textDark max-w-3xl mx-auto">We're committed to providing exceptional care with compassion, respect, and professionalism.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-merrifield font-bold text-primary mb-6">Our Caregivers</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Thorough Screening</h4>
                  <p>All caregivers undergo comprehensive background checks, reference verification, and drug screening.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Trained Professionals</h4>
                  <p>Our caregivers receive specialized training in senior care, dementia care, and safety protocols.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Compassionate Approach</h4>
                  <p>We select caregivers who demonstrate genuine empathy and passion for helping seniors.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-merrifield font-bold text-primary mb-6">Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Personalized Care Plans</h4>
                  <p>We develop customized care plans tailored to your loved one's unique needs and preferences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Consistent Communication</h4>
                  <p>Regular updates and open communication with family members about care progress.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quality Assurance</h4>
                  <p>Ongoing supervision and quality checks to ensure the highest standards of care.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/about">
            <Button className="btn-primary">Learn More About Our Approach</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
