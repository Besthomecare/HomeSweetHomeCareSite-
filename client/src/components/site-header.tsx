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
      <div className="bg-accent text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <a href={`tel:${COMPANY_INFO.phone}`} className="mr-6 hover:underline">
              <Phone className="inline-block w-4 h-4 mr-2" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
              <Mail className="inline-block w-4 h-4 mr-2" />
              {COMPANY_INFO.email}
            </a>
          </div>
          <div>
            <span className="text-sm flex items-center">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Serving Sarasota, Manatee County & Lakewood Ranch
            </span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" onClick={closeMobileMenu}>
          <div className="flex items-center mb-4 md:mb-0 cursor-pointer">
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <span className={`font-medium ${isActive('/') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer`}>
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className={`font-medium ${isActive('/about') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer`}>
              About Us
            </span>
          </Link>
          <Link href="/services">
            <span className={`font-medium ${isActive('/services') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer`}>
              Services
            </span>
          </Link>
          <Link href="/faq">
            <span className={`font-medium ${isActive('/faq') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer`}>
              FAQs
            </span>
          </Link>
          <Link href="/contact">
            <span className={`font-medium ${isActive('/contact') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors cursor-pointer`}>
              Contact
            </span>
          </Link>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Get Care Now
            </Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden w-full mt-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <span 
                className={`font-medium ${isActive('/') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer`}
                onClick={closeMobileMenu}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span 
                className={`font-medium ${isActive('/about') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer`}
                onClick={closeMobileMenu}
              >
                About Us
              </span>
            </Link>
            <Link href="/services">
              <span 
                className={`font-medium ${isActive('/services') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer`}
                onClick={closeMobileMenu}
              >
                Services
              </span>
            </Link>
            <Link href="/faq">
              <span 
                className={`font-medium ${isActive('/faq') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer`}
                onClick={closeMobileMenu}
              >
                FAQs
              </span>
            </Link>
            <Link href="/contact">
              <span 
                className={`font-medium ${isActive('/contact') ? 'text-accent' : 'text-primary hover:text-accent'} transition-colors py-2 border-b border-gray-100 block cursor-pointer`}
                onClick={closeMobileMenu}
              >
                Contact
              </span>
            </Link>
            <Link href="/contact">
              <div
                className="bg-accent hover:bg-opacity-90 text-white px-5 py-2 rounded-md transition-colors text-center mt-2 cursor-pointer"
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
