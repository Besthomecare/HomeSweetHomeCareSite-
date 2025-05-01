import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import Logo from "@/components/ui/logo";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/">
              <a className="flex items-center mb-6">
                <Logo variant="full" colorMode="dark" />
              </a>
            </Link>
            <p className="mb-6">Providing compassionate in-home care services that help seniors maintain independence and dignity.</p>
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-white hover:text-accent transition-colors">Our Services</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-white hover:text-accent transition-colors">FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white hover:text-accent transition-colors">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-white hover:text-accent transition-colors">Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`}>
                    <a className="text-white hover:text-accent transition-colors">{service.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 flex-shrink-0" size={18} />
                <span>{COMPANY_INFO.address.street}<br/>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 flex-shrink-0" size={18} />
                <a href="tel:(941) 200-8048" className="hover:text-accent transition-colors">
                  (941) 200-8048
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 flex-shrink-0" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-accent transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 flex-shrink-0" size={18} />
                <span>
                  Mon-Fri: {COMPANY_INFO.hours.weekdays}<br/>
                  Sat: {COMPANY_INFO.hours.saturday}<br/>
                  Sun: {COMPANY_INFO.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center text-white text-opacity-70">
          <p>&copy; {currentYear} Home Sweet Home Care. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed and insured in-home care agency serving Sarasota, Manatee County, and Lakewood Ranch.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
