import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { COMPANY_INFO } from "@/lib/constants";

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
    <header className="bg-white shadow-sm">
      {/* Top Bar with Contact Info */}
      <div className="bg-accent text-white py-2 hidden md:block">
        <div className="container-fluid px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href="tel:(941) 200-0848" className="mr-6 hover:underline text-sm">
              <Phone className="inline-block w-4 h-4 mr-2" />
              (941) 200-0848
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-sm">
              <Mail className="inline-block w-4 h-4 mr-2" />
              {COMPANY_INFO.email}
            </a>
          </div>
          <div>
            <span className="text-sm flex items-center">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Serving Sarasota, Manatee County, & Lakewood Ranch
            </span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container-fluid px-4 py-4 md:py-6 flex flex-col md:flex-row items-center">
        <div className="flex justify-between w-full md:w-auto md:mr-10">
          <Link href="/" onClick={closeMobileMenu}>
            <div className="flex items-center mb-0 md:mb-0 cursor-pointer">
              <Logo variant="full" />
            </div>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary text-2xl"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center mx-auto space-x-6 px-4">
          <Link href="/">
            <span className={`font-medium text-base ${isActive('/') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>Home</span>
            </span>
          </Link>
          <Link href="/about">
            <span className={`font-medium text-base ${isActive('/about') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>About</span>
              <span>Us</span>
            </span>
          </Link>
          <Link href="/services">
            <span className={`font-medium text-base ${isActive('/services') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>Services</span>
            </span>
          </Link>

          <Link href="/faq">
            <span className={`font-medium text-base ${isActive('/faq') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>FAQs</span>
            </span>
          </Link>
          <Link href="/careers">
            <span className={`font-medium text-base ${isActive('/careers') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>Careers</span>
            </span>
          </Link>
          <Link href="/contact">
            <span className={`font-medium text-base ${isActive('/contact') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer text-center flex flex-col`}>
              <span>Contact</span>
            </span>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white text-center font-medium text-base">
              Get Care Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden w-full mt-4 px-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-1">
            <Link href="/">
              <span 
                className={`font-medium text-base ${isActive('/') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>Home</span>
              </span>
            </Link>
            <Link href="/about">
              <span 
                className={`font-medium text-base ${isActive('/about') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>About</span>
                <span>Us</span>
              </span>
            </Link>
            <Link href="/services">
              <span 
                className={`font-medium text-base ${isActive('/services') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>Services</span>
              </span>
            </Link>

            <Link href="/faq">
              <span 
                className={`font-medium text-base ${isActive('/faq') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>FAQs</span>
              </span>
            </Link>
            <Link href="/careers">
              <span 
                className={`font-medium text-base ${isActive('/careers') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>Careers</span>
              </span>
            </Link>
            <Link href="/contact">
              <span 
                className={`font-medium text-base ${isActive('/contact') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer text-center flex flex-col`}
                onClick={closeMobileMenu}
              >
                <span>Contact</span>
              </span>
            </Link>
            <Link href="/contact">
              <div
                className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-md transition-colors text-center mt-2 cursor-pointer font-medium text-base"
                onClick={closeMobileMenu}
              >
                Get Care Now
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
