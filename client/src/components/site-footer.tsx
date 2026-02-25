import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { COMPANY_INFO } from "@/lib/constants";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 md:py-10">
      <div className="container-fluid px-4 md:px-6 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="text-center mb-6">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg mb-4">
            <a 
              href="tel:+19412000848" 
              className="hover:text-accent transition-colors"
              data-testid="footer-phone"
            >
              (941) 200-0848
            </a>
            <span className="hidden md:inline">•</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-accent transition-colors"
              data-testid="footer-email"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
          
          <div className="text-base md:text-lg mb-4">
            {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
          </div>
          
          <div className="text-base md:text-lg mb-6">
            Mon–Fri 9am–5pm
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg mb-6">
          <Link href="/about">
            <span className="hover:text-accent transition-colors cursor-pointer" data-testid="footer-link-about">
              About
            </span>
          </Link>
          <span>•</span>
          <Link href="/services">
            <span className="hover:text-accent transition-colors cursor-pointer" data-testid="footer-link-services">
              Services
            </span>
          </Link>
          <span>•</span>
          <Link href="/faq">
            <span className="hover:text-accent transition-colors cursor-pointer" data-testid="footer-link-faq">
              FAQs
            </span>
          </Link>
          <span>•</span>
          <Link href="/careers">
            <span className="hover:text-accent transition-colors cursor-pointer" data-testid="footer-link-careers">
              Careers
            </span>
          </Link>
          <span>•</span>
          <Link href="/privacy">
            <span className="hover:text-accent transition-colors cursor-pointer" data-testid="footer-link-privacy">
              Privacy
            </span>
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex justify-center items-center gap-5 mb-6">
          <a
            href={COMPANY_INFO.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Facebook"
            data-testid="footer-social-facebook"
          >
            <SiFacebook className="w-6 h-6" />
          </a>
          <a
            href={COMPANY_INFO.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Instagram"
            data-testid="footer-social-instagram"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
          <a
            href={COMPANY_INFO.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="LinkedIn"
            data-testid="footer-social-linkedin"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Licensed */}
        <div className="text-center text-base font-semibold mb-4">
          Licensed and insured.
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/70">
          &copy; {currentYear} Home Sweet Home Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
