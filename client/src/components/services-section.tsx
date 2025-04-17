import React from "react";
import { Link } from "wouter";
import { ArrowRight, Circle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-[#F8F5F2] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={`${service.title} services`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
          {service.icon && React.createElement(service.icon, { size: 24 })}
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary mb-3">{service.title}</h3>
        <p className="mb-4">{service.description}</p>
        <ul className="mb-6 space-y-2">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm">
              <Circle className="text-accent flex-shrink-0 mt-1 mr-2" size={8} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <a className="text-accent hover:text-primary transition-colors font-semibold flex items-center">
            Learn More <ArrowRight className="ml-2" size={16} />
          </a>
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
            <a className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-colors inline-block font-semibold">
              Schedule a Free Care Assessment
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
