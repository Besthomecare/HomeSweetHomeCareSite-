const HowToGetStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Free In-Home Consultation",
      description: [
        "A Home Sweet Home Care coordinator will visit your home (or meet by phone/Zoom) to learn about your loved one's needs, daily routines, health considerations, and preferences.",
        "We'll answer all your questions and explain the best care options for your family."
      ]
    },
    {
      number: "02",
      title: "Receive a Customized Care Plan",
      description: [
        "If you decide to move forward, we'll complete a full in-home assessment — including a safety, fall-risk, and home-environment review.",
        "From there, we create a personalized care plan and recommended schedule based on your goals, lifestyle, and budget."
      ]
    },
    {
      number: "03",
      title: "Meet Your Caregiver",
      description: [
        "We match your loved one with a professional W-2 caregiver who has passed Level-2 background screening and aligns with your preferences.",
        "You'll always know who is coming into the home, and you'll feel confident knowing your loved one is safe, supported, and cared for with dignity."
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-fluid px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            How to Get Started With Home Sweet Home Care
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-secondary/20 to-white p-8 md:p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-testid={`step-${index}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <div className="space-y-3">
                    {step.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://calendar.google.com/appointments/schedules/AcZssZ1HmfJNob7zkiWgHb1185gbsl_v8EOAfqEP5Lili91nLoHV5brvq7oFCxGoVdsFDXoKjhaRsPYY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold text-xl text-white px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg bg-accent hover:bg-accent/90"
            data-testid="button-schedule-consultation"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
