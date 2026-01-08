import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ServiceType } from "@/types";
import Link from "@/components/ui/link";

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col transition-all hover:shadow-xl">
      {/* Icon and Title Header */}
      <div className="bg-primary p-5 flex items-center">
        <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md">
          {service.icon && <service.icon size={22} />}
        </div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
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
        <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
        
        <div className="mb-5 space-y-3">
          {service.description.split('. ').map((sentence: string, idx: number) => (
            sentence && <p key={idx} className="leading-relaxed text-base md:text-lg">{sentence}{sentence.endsWith('.') ? '' : '.'}</p>
          ))}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-primary mb-3">Benefits:</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start">
                <Check className="text-primary flex-shrink-0 mt-1 mr-2" size={18} />
                <span className="text-base md:text-lg">{benefit}</span>
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
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Care Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
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
