const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-secondary">
      <div className="container-fluid px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6" data-testid="heading-about">
            About Home Sweet Home Care
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" data-testid="text-about-intro">
            We're dedicated to providing exceptional in-home care that enhances the quality of life for seniors in Sarasota, Manatee County, and Lakewood Ranch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-12">
          {/* Our Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4" data-testid="heading-mission">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-4" data-testid="text-mission-statement">
              To provide compassionate, personalized care that allows seniors to maintain independence, dignity, and comfort safely at home and surrounded by the people and memories they love.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" data-testid="text-mission-belief">
              We believe that every person deserves to age with dignity, supported by caregivers who genuinely care.
            </p>
          </div>

          {/* CEO Quote */}
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
            <blockquote className="text-lg md:text-xl leading-relaxed italic mb-6" data-testid="quote-ceo">
              "Our approach is built on meaningful relationships with each client and their family to ensure personalized care that truly makes a difference."
            </blockquote>
            <p className="text-lg md:text-xl font-semibold text-primary" data-testid="text-ceo-name">
              Devin Rexford, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
