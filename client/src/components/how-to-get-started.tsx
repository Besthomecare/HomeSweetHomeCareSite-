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
    <section className="py-16 md:py-20 bg-blue-50 border-t-2 border-gray-300">
      <div className="container-fluid px-4 md:px-6 max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8" data-testid="heading-new-to-home-care">
            New to In-Home Care?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-5xl mx-auto" data-testid="text-new-to-home-care-intro">
            Choosing home care for a loved one can feel overwhelming, but Home Sweet Home Care makes the process simple, clear, and stress-free. We guide you every step of the way with compassion, clarity, and flexibility.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto" data-testid="text-new-to-home-care-benefit">
            Learn how easy it is to get started with professional home care, and discover how our tailored support promotes comfort, safety, and peace of mind at home.
          </p>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mt-16 mb-8" data-testid="heading-how-to-get-started">
            How to Get Started With Home Sweet Home Care
          </h3>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 md:gap-8 list-none">
          {steps.map((step, index) => (
            <li 
              key={index}
              className="bg-gradient-to-br from-secondary/10 to-white p-8 md:p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              data-testid={`step-${index + 1}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent text-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl md:text-4xl font-bold" data-testid={`step-number-${index + 1}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6" data-testid={`step-title-${index + 1}`}>
                  {step.title}
                </h3>
                <div className="space-y-4">
                  {step.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-xl text-gray-700 leading-relaxed" data-testid={`step-${index + 1}-description-${pIndex + 1}`}>
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
