import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/10 border-t-4 border-accent/20">
      <div className="container-fluid px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3">
          <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
          <p className="text-xl md:text-2xl text-gray-700">
            Proudly serving <span className="font-semibold text-primary">Sarasota, Bradenton, Lakewood Ranch, Siesta Key, Longboat Key, and Venice</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
