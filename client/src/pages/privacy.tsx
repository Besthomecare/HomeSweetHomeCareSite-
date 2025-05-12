import { Helmet } from "react-helmet";
import { Link } from "wouter";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Home Sweet Home Care</title>
        <meta 
          name="description" 
          content="Home Sweet Home Care's privacy policy regarding the collection, use, and protection of personal information."
        />
      </Helmet>
      
      <section className="bg-secondary bg-opacity-30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg">
              At Home Sweet Home Care, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This policy explains how we collect, 
              use, and safeguard your data.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Home Sweet Home Care ("we," "our," or "us") is committed to protecting the privacy of our clients, 
              their families, and visitors to our website. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that 
              you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect personal information that you provide directly to us, including but not limited to:</p>
            <ul>
              <li>Contact information (name, email address, phone number, etc.)</li>
              <li>Demographic information (age, gender, etc.)</li>
              <li>Health and medical information necessary to provide appropriate care</li>
              <li>Emergency contact information</li>
              <li>Payment and billing information</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Developing care plans and delivering appropriate care</li>
              <li>Processing payments and billing</li>
              <li>Communicating with you about our services, updates, and promotional offers</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Complying with applicable laws, regulations, and professional standards</li>
            </ul>
            
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We may share your personal information with third parties only in the ways described in this 
              Privacy Policy or with your consent. We do not sell your personal information to third parties.
            </p>
            <p>We may share your information with:</p>
            <ul>
              <li>Healthcare providers involved in your care</li>
              <li>Service providers who perform services on our behalf</li>
              <li>As required by law, such as in response to a subpoena or similar legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or transaction</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security, 
              confidentiality, and integrity of your personal information. However, no electronic transmission 
              or storage system is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent for the processing of your information</li>
              <li>Opting out of marketing communications</li>
              <li>Requesting a copy of your personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              Home Sweet Home Care<br />
              5265 University Pkwy, STE 101-177<br />
              Sarasota, FL 34201<br />
              Email: Info@besthomecare.net<br />
              Phone: (941) 200-0848
            </p>
            
            <p className="text-sm text-gray-500">Last Updated: May 15, 2023</p>
            
            <div className="mt-8 text-center">
              <div className="inline-block">
                <Link href="/contact">
                  <div className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md transition-colors inline-block font-semibold cursor-pointer">
                    Contact Us With Questions
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
