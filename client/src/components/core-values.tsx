import { Shield, Clock, Heart } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Screened Caregivers",
      description: "Background-checked, trained, and matched to your family.",
    },
    {
      icon: Clock,
      title: "Flexible, When You Need Us",
      description: "From a few hours to full days.",
    },
    {
      icon: Heart,
      title: "Care at Home",
      description: "Comfort, dignity, and independence.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-fluid px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-secondary/20 transition-colors"
                data-testid={`core-value-${index}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
