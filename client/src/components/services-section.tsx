import React from "react";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 h-full flex flex-col transition-all hover:shadow-xl">
      {/* Icon and Title Header */}
      <div className="bg-gradient-to-r from-accent/90 to-accent p-5 flex items-center">
        <div className="bg-white text-accent rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md">
          {service.icon && React.createElement(service.icon, { size: 22 })}
        </div>
        <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
      </div>
      
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={`${service.title} services`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="mb-5 text-gray-700">{service.description}</p>
        
        <div className="flex-grow">
          <ul className="mb-6 space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-accent flex-shrink-0 mt-1 mr-2" size={18} />
                <span className="text-gray-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Button */}
        <Link href="/contact" className="mt-auto">
          <div className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded text-center font-medium transition-colors">
            Learn More <ArrowRight className="inline ml-1" size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Care Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            We offer a comprehensive range of non-medical care services tailored 
            to meet the unique needs of each client.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact">
            <div className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-colors inline-block font-semibold cursor-pointer">
              Schedule a Free Care Assessment
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
