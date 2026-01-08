import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-fluid px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3">
          <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
          <p className="text-lg md:text-xl leading-relaxed">
            Proudly serving <span className="font-semibold text-primary">Sarasota, Bradenton, Lakewood Ranch, Siesta Key, Longboat Key, and Venice</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
