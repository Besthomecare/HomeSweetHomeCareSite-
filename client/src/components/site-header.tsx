import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="container-fluid px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <div className="flex items-center cursor-pointer">
            <Logo variant="full" />
          </div>
        </Link>
        
        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="tel:+19412000848"
            className="font-semibold text-lg text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap bg-primary hover:bg-primary/90"
            data-testid="button-call-now-desktop"
          >
            (941) 200-0848
          </a>
          <a 
            href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap bg-accent hover:bg-accent/90"
            data-testid="button-book-consultation"
          >
            Book Free Consult
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary text-2xl"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          data-testid="button-mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
      </nav>
      
      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
            <Link href="/" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-home-mobile"
              >
                Home
              </span>
            </Link>
            <Link href="/about" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/about') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-about-mobile"
              >
                About Us
              </span>
            </Link>
            <Link href="/services" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/services') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-services-mobile"
              >
                Services
              </span>
            </Link>
            <Link href="/faq" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/faq') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-faq-mobile"
              >
                FAQs
              </span>
            </Link>
            <Link href="/careers" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/careers') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-careers-mobile"
              >
                Careers
              </span>
            </Link>
            <Link href="/contact" onClick={closeMobileMenu}>
              <span 
                className={`font-medium text-lg ${isActive('/contact') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-3 block cursor-pointer`}
                data-testid="link-contact-mobile"
              >
                Contact
              </span>
            </Link>
            
            {/* Mobile CTAs */}
            <div className="pt-6 space-y-3 border-t border-gray-200">
              <a 
                href="tel:+19412000848"
                className="block text-center font-semibold text-lg text-white px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                data-testid="button-call-now-mobile"
                onClick={closeMobileMenu}
              >
                Call (941) 200-0848
              </a>
              <a 
                href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold text-lg text-white px-6 py-4 rounded-lg bg-accent hover:bg-accent/90 transition-colors"
                data-testid="button-book-consultation-mobile"
                onClick={closeMobileMenu}
              >
                Book Free Consult
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
