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
      <div className="container-fluid px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          What We Help With
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-10">
          <ul className="space-y-5 text-left max-w-2xl mx-auto">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start space-x-4"
                data-testid={`service-item-${index}`}
              >
                <CheckCircle className="w-7 h-7 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-xl text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl font-semibold text-white px-10 py-4 rounded-lg bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          data-testid="button-get-care-plan"
        >
          Get a Free Care Plan
        </a>
      </div>
    </section>
  );
};

export default ServicesList;
