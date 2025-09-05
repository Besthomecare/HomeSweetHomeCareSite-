import { Helmet } from "react-helmet";
import AboutSection from "@/components/about-section";
import TrustBadges from "@/components/trust-badges";
import CtaSection from "@/components/cta-section";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Learn about Home Sweet Home Care's mission, values, and our team of professional caregivers dedicated to providing exceptional in-home care for seniors."
        />
      </Helmet>
      
      <section className="bg-secondary bg-opacity-30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">About Us</h1>
            
            <div className="text-left bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="font-heading text-2xl font-semibold text-primary mb-6 text-center">Our Story</h2>
              
              <p className="text-lg mb-6 leading-relaxed">
                Home Sweet Home Care began with a promise I made after watching my grandmother fade 
                when she had to leave the house she shared with my grandfather for 65 years. The assisted 
                living community tried its best, but the sudden change of place and routine was simply too much 
                for her. Six months after moving, she was gone. I realized some seniors thrive in residential 
                communities, yet many—like my grandmother—simply need the right help to stay in the place 
                that feels most like them.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I was born and raised in Sarasota, and this is where I am raising my own family. I know the 
                streets, the churches, the parks, and the people. Home Sweet Home Care exists to give local 
                families a trusted option that keeps loved ones where memories live, while easing the worry that 
                so often falls on adult children.
              </p>
              
              <p className="text-right text-gray-600 font-medium">
                -Devin Rexford, CEO
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TrustBadges />
      <AboutSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Compassion</h3>
                <p>
                  We approach each client with genuine care and empathy, understanding the 
                  challenges that come with aging and providing support with kindness and respect.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Dignity</h3>
                <p>
                  We believe that every person deserves to be treated with dignity, 
                  regardless of age or ability. Our services are designed to promote 
                  independence and preserve dignity.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Excellence</h3>
                <p>
                  We are committed to delivering the highest quality of care through ongoing 
                  training, professional development, and adherence to best practices in 
                  senior care.
                </p>
              </div>
              
              <div className="bg-[#F8F5F2] p-6 rounded-lg">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">Reliability</h3>
                <p>
                  Families can count on us to provide consistent, dependable care that they 
                  can trust. We're there when you need us, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
};

export default About;
