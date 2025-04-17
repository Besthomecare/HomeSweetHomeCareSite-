import { Link } from 'wouter';
import HomeSweetHomeLogo from '@/lib/logoSvg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <a className="inline-block mb-6">
                <HomeSweetHomeLogo className="h-16 w-auto" inverted={true} />
                <div className="mt-2 text-white font-bold text-lg leading-tight">HOME SWEET</div>
                <div className="text-white font-bold text-lg leading-tight">HOME CARE</div>
              </a>
            </Link>
            <p className="mb-6">Providing compassionate in-home care services to seniors in Sarasota, Manatee County, and Lakewood Ranch areas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-merrifield font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="hover:text-accent transition duration-300">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-accent transition duration-300">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-accent transition duration-300">Services</a></Link></li>
              <li><Link href="/faqs"><a className="hover:text-accent transition duration-300">FAQs</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-accent transition duration-300">Contact</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-accent transition duration-300">Privacy Policy</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-merrifield font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#companionship"><a className="hover:text-accent transition duration-300">Companionship</a></Link></li>
              <li><Link href="/services#personal-care"><a className="hover:text-accent transition duration-300">Personal Care</a></Link></li>
              <li><Link href="/services#medication-reminders"><a className="hover:text-accent transition duration-300">Medication Reminders</a></Link></li>
              <li><Link href="/services#housekeeping"><a className="hover:text-accent transition duration-300">Housekeeping</a></Link></li>
              <li><Link href="/services#meal-preparation"><a className="hover:text-accent transition duration-300">Meal Preparation</a></Link></li>
              <li><Link href="/services#transportation"><a className="hover:text-accent transition duration-300">Transportation</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-merrifield font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Care Lane, Suite 200<br />Sarasota, FL 34236</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>941-555-1234</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@homesweethomecare.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 8am-5pm<br />24/7 Care Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Home Sweet Home Care. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy"><a className="text-sm hover:text-accent transition duration-300">Terms of Service</a></Link>
              <Link href="/privacy"><a className="text-sm hover:text-accent transition duration-300">Privacy Policy</a></Link>
              <Link href="/privacy"><a className="text-sm hover:text-accent transition duration-300">Accessibility</a></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
