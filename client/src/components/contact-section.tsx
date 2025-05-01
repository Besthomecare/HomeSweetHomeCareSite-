import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS } from "@/lib/constants";

const ContactSection = () => {

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <p className="mb-8 text-lg">
              We're here to answer your questions and discuss how we can help your loved one 
              maintain independence and dignity at home.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Our Office</h3>
                  <p>
                    {COMPANY_INFO.address.street}<br/>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Phone</h3>
                  <p>
                    <a 
                      href="tel:(941) 200-0848" 
                      className="hover:text-accent transition-colors"
                    >
                      (941) 200-0848
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
                  <p>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="hover:text-accent transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Office Hours</h3>
                  <p>
                    Monday - Friday: {COMPANY_INFO.hours.weekdays}<br/>
                    Saturday: {COMPANY_INFO.hours.saturday}<br/>
                    Sunday: {COMPANY_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8F5F2] p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">Service Areas</h3>
              <p className="mb-4">We proudly serve the following areas in Florida:</p>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="text-accent mr-2 flex-shrink-0" size={16} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-[#F8F5F2] p-8 rounded-lg">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Request a Free Care Assessment
            </h2>
            
            {/* HubSpot form embed */}
            <div id="hs-contact-form" style={{maxWidth: "600px", margin: "2rem auto"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
