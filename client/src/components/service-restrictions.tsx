import React from "react";
import { Check } from "lucide-react";

const ServiceRestrictions = () => {
  const allowedServices = [
    "Provide companionship and social interaction",
    "Do light housekeeping (sweeping, dishes, laundry, etc.)",
    "Help with meal prep",
    "Assist with medication reminders (but not administer meds)",
    "Perform grocery shopping, errands, transportation",
    "Remind or encourage clients to do tasks",
    "Observe and report health changes to family or professionals"
  ];

  return (
    <section className="py-12 bg-[#F8F5F2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Companion Care Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            As a companion care provider, we offer a range of non-medical services designed to help seniors maintain their independence and quality of life while providing families with peace of mind.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Allowed Services */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent">
            <h3 className="font-heading text-2xl font-bold text-accent flex items-center mb-6">
              <Check className="mr-3" size={28} />
              Services We Provide
            </h3>
            <ul className="space-y-4 grid md:grid-cols-2 gap-x-6">
              {allowedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent flex-shrink-0 mt-1 mr-3" size={16} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRestrictions;