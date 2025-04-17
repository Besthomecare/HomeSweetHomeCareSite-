import React from "react";
import { Check, X } from "lucide-react";

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

  const prohibitedServices = [
    "Physically touch or lift the client (no hands-on assistance)",
    "Help with bathing, dressing, or toileting",
    "Wipe them, clean them, or manage incontinence",
    "Give medication (not even eye drops or creams)",
    "Use gait belts, lifts, or perform fall recovery",
    "Provide wound care, vital signs, or blood sugar checks"
  ];

  return (
    <section className="py-12 bg-[#F8F5F2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Service Scope
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            As a companion care provider, we follow strict guidelines about services we can and cannot provide.
            This ensures we stay within our licensing requirements while delivering exceptional care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Allowed Services */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <h3 className="font-heading text-xl font-bold text-accent flex items-center mb-4">
              <Check className="mr-2" size={24} />
              Services We Provide
            </h3>
            <ul className="space-y-3">
              {allowedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent flex-shrink-0 mt-1 mr-3" size={16} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited Services */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="font-heading text-xl font-bold text-red-500 flex items-center mb-4">
              <X className="mr-2" size={24} />
              Services We Cannot Provide
            </h3>
            <ul className="space-y-3">
              {prohibitedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <X className="text-red-500 flex-shrink-0 mt-1 mr-3" size={16} />
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