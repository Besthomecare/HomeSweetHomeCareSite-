import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS } from "@/lib/constants";
import LeadForm from "./lead-form";

const ContactSection = () => {

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <p className="mb-8 text-lg md:text-xl leading-relaxed">
              We're here to answer your questions and discuss how we can help your loved one 
              maintain independence and dignity at home.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-primary">Our Office</h3>
                  <p className="text-lg">
                    {COMPANY_INFO.address.street}<br/>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-primary">Phone</h3>
                  <p className="text-lg">
                    <a 
                      href="tel:+19412000848" 
                      className="hover:text-primary/80 transition-colors"
                    >
                      (941) 200-0848
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-primary">Email</h3>
                  <p className="text-lg">
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="hover:text-primary/80 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-base text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-primary">Office Hours</h3>
                  <p className="text-lg">
                    Monday - Friday: {COMPANY_INFO.hours.weekdays}<br/>
                    Saturday: {COMPANY_INFO.hours.saturday}<br/>
                    Sunday: {COMPANY_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-primary">Service Areas</h3>
              <p className="mb-4 text-lg">We proudly serve the following areas in Florida:</p>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="text-primary mr-2 flex-shrink-0" size={16} />
                    <span className="text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
