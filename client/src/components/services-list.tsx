import { CheckCircle } from "lucide-react";

const ServicesList = () => {
  const services = [
    "Companionship & conversation",
    "Transportation & errands",
    "Medication reminders",
    "Light housekeeping & laundry",
    "Meal planning & preparation",
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-secondary/20 border-t-4 border-accent/20">
      <div className="container-fluid px-4 md:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16">
          What We Help With
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-10 md:p-16">
          <ul className="space-y-8 text-left max-w-3xl mx-auto">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start space-x-5"
                data-testid={`service-item-${index}`}
              >
                <CheckCircle className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                <span className="text-3xl md:text-4xl font-semibold text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
