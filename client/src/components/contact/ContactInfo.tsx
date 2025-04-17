import { Link } from 'wouter';

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-merrifield font-bold text-primary mb-6">Our Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-accent rounded-full p-2 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Phone</h4>
              <p className="text-textDark">941-555-1234</p>
              <p className="text-sm text-textDark mt-1">Available 24/7 for your questions</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-accent rounded-full p-2 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Email</h4>
              <p className="text-textDark">info@homesweethomecare.com</p>
              <p className="text-sm text-textDark mt-1">We'll respond within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-accent rounded-full p-2 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Office Address</h4>
              <p className="text-textDark">123 Care Lane, Suite 200</p>
              <p className="text-textDark">Sarasota, FL 34236</p>
              <p className="text-sm text-textDark mt-1">Mon-Fri: 8am-5pm</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-merrifield font-bold mb-4">Need Immediate Assistance?</h3>
        <p className="mb-6">Our care consultants are standing by to help you with urgent care needs.</p>
        <a 
          href="tel:9415551234" 
          className="inline-flex items-center justify-center w-full bg-white text-primary font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg> 
          Call Now: 941-555-1234
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
