import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ServiceType } from "@/types";
import Link from "@/components/ui/link";

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="bg-[#f7f4ef] rounded-lg shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col transition-all hover:shadow-xl">
      {/* Icon and Title Header */}
      <div className="bg-gradient-to-r from-accent/90 to-accent p-5 flex items-center">
        <div className="bg-white text-accent rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md">
          {service.icon && <service.icon size={22} />}
        </div>
        <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
      </div>
      
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.id === "ai-companionship" 
            ? "Friendly robot chatting with a senior, representing AI companionship" 
            : service.id === "companionship"
              ? "Three seniors laughing together, symbolizing companionship and social support."
              : service.id === "medication-reminders"
                ? "Senior arranging pills in a weekly organizer, symbolizing timely medication reminders."
                : service.id === "housekeeping"
                  ? "Caregiver sweeping a tidy kitchen floor, illustrating light housekeeping assistance."
                  : service.id === "meal-preparation"
                    ? "Senior chopping fresh vegetables, illustrating home meal preparation assistance."
                    : service.id === "transportation"
                      ? "Caregiver delivering groceries to a senior at her doorstep, representing transportation and errand assistance."
                      : service.id === "monitoring"
                        ? "Caregiver and senior smiling while reviewing information on a tablet, illustrating observation and reporting in home care."
                        : `Caregiver providing ${service.title} services to senior client`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 pt-8 pb-8 flex-grow flex flex-col">
        <h2 className="font-heading text-2xl font-semibold text-[#2C5F2D] mb-4">{service.title}</h2>
        
        <div className="mb-5 text-gray-700 space-y-3">
          {service.description.split('. ').map((sentence: string, idx: number) => (
            sentence && <p key={idx} className="leading-relaxed text-base md:text-lg">{sentence}{sentence.endsWith('.') ? '' : '.'}</p>
          ))}
        </div>
        
        <div className="flex-grow">
          <h3 className="font-heading text-lg font-semibold text-[#2C5F2D] mb-3">Benefits:</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start">
                <Check className="text-[#2C5F2D] flex-shrink-0 mt-1 mr-2" size={18} />
                <span className="text-gray-800 text-base md:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C5F2D] mb-4">
            Our Care Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            We offer a comprehensive range of non-medical care services tailored 
            to meet the unique needs of each client.
          </p>
        </div>
        
        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
