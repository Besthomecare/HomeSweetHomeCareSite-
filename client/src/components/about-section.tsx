const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container-fluid px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Home Sweet Home Care
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We're dedicated to providing exceptional in-home care that enhances the quality of life for seniors in Sarasota, Manatee County, and Lakewood Ranch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-12">
          {/* Our Mission */}
          <div className="bg-gradient-to-br from-secondary/30 to-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              To provide compassionate, personalized care that allows seniors to maintain independence, dignity, and comfort — safely at home and surrounded by the people and memories they love.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We believe that every person deserves to age with dignity, supported by caregivers who genuinely care.
            </p>
          </div>

          {/* CEO Quote */}
          <div className="bg-accent/5 p-8 rounded-lg shadow-md border-l-4 border-accent">
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
              "Our approach is built on meaningful relationships with each client and their family to ensure personalized care that truly makes a difference."
            </blockquote>
            <p className="text-lg md:text-xl font-semibold text-primary">
              – Devin Rexford, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
