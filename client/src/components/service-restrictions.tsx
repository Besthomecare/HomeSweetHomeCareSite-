import React from "react";
import { Check } from "lucide-react";
import { Link } from "wouter";

const ServiceRestrictions = () => {
  const allowedServices = [
    "Provide personalized, compassionate care",
    "Offer reliable and trustworthy support",
    "Help maintain dignity and independence",
    "Give peace of mind for families",
    "Offer light housekeeping (sweeping, dishes, laundry)",
    "Provide companionship and social interaction",
    "Assist with meal preparation and nutrition",
    "Give medication reminders (but not administer meds)",
    "Help with grocery shopping, errands, transportation",
    "Observe and report health changes to family"
  ];

  return (
    <section className="py-20 bg-[#f7f4ef]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 pt-4">
            Our Compassionate Care Approach
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-4">
            At Home Sweet Home Care, we focus on creating meaningful relationships with each client and their families.
          </p>
          <p className="max-w-3xl mx-auto text-lg">
            Our non-medical services are designed to enhance quality of life while ensuring safety, comfort, and dignity in the familiar surroundings of home.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Allowed Services */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent mb-10">
            <h3 className="font-heading text-2xl font-bold text-accent flex items-center mb-6">
              <Check className="mr-3" size={28} />
              Our Commitment to Excellence
            </h3>
            <ul className="space-y-4 grid md:grid-cols-2 gap-x-6 gap-y-4">
              {allowedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent flex-shrink-0 mt-1 mr-3" size={18} />
                  <span className="text-gray-800">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <div className="bg-[#047857] hover:bg-[#03543f] text-white px-8 py-3 rounded-lg transition-colors inline-block font-bold cursor-pointer">
                Request a Free Care Assessment
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRestrictions;