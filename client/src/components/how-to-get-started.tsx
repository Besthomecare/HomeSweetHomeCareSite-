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
        "If you decide to move forward, we'll complete a full in-home assessment including a safety, fall-risk, and home-environment review.",
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
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-white border-t-4 border-accent/20">
      <div className="container-fluid px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6" data-testid="heading-how-to-get-started">
            How to Get Started With Home Sweet Home Care
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 md:gap-8 list-none">
          {steps.map((step, index) => (
            <li 
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              data-testid={`step-${index + 1}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent text-white rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl md:text-3xl font-bold" data-testid={`step-number-${index + 1}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4" data-testid={`step-title-${index + 1}`}>
                  {step.title}
                </h3>
                <div className="space-y-3">
                  {step.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base md:text-lg text-gray-700 leading-relaxed" data-testid={`step-${index + 1}-description-${pIndex + 1}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

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
