import { Helmet } from "react-helmet-async";
import { Mail, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Home Sweet Home Care - Join Our Caregiving Team</title>
        <meta name="description" content="Join our compassionate caregiving team in Sarasota and Manatee County. Flexible schedules, competitive pay, and the opportunity to make a difference in seniors' lives." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Caregiver Jobs in Sarasota & Manatee Counties
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Choose Your Schedule, Change a Life
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* About the Role */}
          <div className="bg-secondary rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Heart className="text-primary mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">About the Role</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Help older adults stay comfortable in their own homes while you choose the shifts that fit your life. 
              We are a locally owned agency that blends old-fashioned compassion with modern, easy-to-use tech. 
              You set your availability, we match you with clients, and our Connecteam app keeps paperwork light.
            </p>
          </div>

          {/* What You Will Do */}
          <div className="bg-secondary rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="text-primary mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">What You Will Do</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Provide friendly companionship and conversation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Assist with dressing, grooming, bathing, and safe mobility</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Offer medication reminders and simple record-keeping</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Prepare light meals, tidy living spaces, and run errands</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Drive clients in their vehicles to appointments or outings</span>
              </li>
            </ul>
          </div>

          {/* Why Work With Us */}
          <div className="bg-secondary rounded-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Heart className="text-primary mr-3" size={28} />
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Why Work With Us</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Pick your own hourly or live-in shifts</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">W-2 employment with taxes handled</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg">Locally owned Sarasota care team</span>
              </li>
            </ul>
          </div>

          {/* Qualifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Must-Have Qualifications */}
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">Must-Have Qualifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">A caring attitude and verifiable experience with seniors (work or volunteer)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Valid Florida driver license and clean driving record</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Ability to pass Florida Level 2 fingerprint background screening before the first shift</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Smartphone for schedules and care notes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Physically able to assist transfers and lift up to 30 lbs safely</span>
                </li>
              </ul>
            </div>

            {/* Nice-to-Have */}
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">Nice-to-Have</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Current Florida CNA certificate or HHA training</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">CPR, First Aid</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">Experience with dementia or Parkinson's care</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Apply?</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We review applications daily and can usually schedule a video interview within 48 hours.
            </p>
            <div className="flex justify-center">
              <a href="mailto:careers@besthomecare.net?subject=Caregiver Application">
                <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-4 text-lg h-auto font-semibold">
                  <Mail className="mr-2" size={18} />
                  Apply by Email
                </Button>
              </a>
            </div>
            <p className="text-base md:text-lg mt-4 opacity-90">
              Send your resume to <strong>careers@besthomecare.net</strong> with "Caregiver" in the subject line
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;