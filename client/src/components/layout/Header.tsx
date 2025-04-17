import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import HomeSweetHomeLogo from '@/lib/logoSvg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <HomeSweetHomeLogo className="h-12 md:h-14 w-auto" />
                <div className="ml-3 hidden sm:block">
                  <div className="text-primary font-bold text-xl leading-tight">HOME SWEET</div>
                  <div className="text-primary font-bold text-xl leading-tight">HOME CARE</div>
                </div>
              </a>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-accent font-bold">Call Us Today</p>
              <p className="text-primary text-xl font-bold">941-555-1234</p>
            </div>
            <Link href="/contact">
              <Button className="btn-primary">Request Care</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/">
                <a className={`text-primary font-semibold hover:text-accent py-2 ${isActive("/") ? "border-b-2 border-accent" : "hover:border-b-2 hover:border-accent"}`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`text-primary font-semibold hover:text-accent py-2 ${isActive("/about") ? "border-b-2 border-accent" : "hover:border-b-2 hover:border-accent"}`}>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={`text-primary font-semibold hover:text-accent py-2 ${isActive("/services") ? "border-b-2 border-accent" : "hover:border-b-2 hover:border-accent"}`}>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a className={`text-primary font-semibold hover:text-accent py-2 ${isActive("/faqs") ? "border-b-2 border-accent" : "hover:border-b-2 hover:border-accent"}`}>
                  FAQs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`text-primary font-semibold hover:text-accent py-2 ${isActive("/contact") ? "border-b-2 border-accent" : "hover:border-b-2 hover:border-accent"}`}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/">
                <a onClick={closeMenu} className="block text-primary font-semibold hover:text-accent py-2 border-b border-secondary">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a onClick={closeMenu} className="block text-primary font-semibold hover:text-accent py-2 border-b border-secondary">
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a onClick={closeMenu} className="block text-primary font-semibold hover:text-accent py-2 border-b border-secondary">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a onClick={closeMenu} className="block text-primary font-semibold hover:text-accent py-2 border-b border-secondary">
                  FAQs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a onClick={closeMenu} className="block text-primary font-semibold hover:text-accent py-2 border-b border-secondary">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <a href="tel:9415551234" className="block text-accent font-bold py-2">
                Call: 941-555-1234
              </a>
            </li>
            <li>
              <Link href="/contact">
                <Button onClick={closeMenu} className="btn-primary w-full text-center">
                  Request Care
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
