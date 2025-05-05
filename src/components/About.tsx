import React from "react";

export const About = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "We believe in doing what's right, always.",
    },
    {
      title: "Precision",
      description: "We manage every detail, so nothing falls through the cracks.",
    },
    {
      title: "Commitment",
      description: "We walk alongside our clients, from first step to goal achieved.",
    },
    {
      title: "Innovation",
      description: "We evolve with the financial industry to bring modern solutions.",
    },
  ];

  return (
    <section id="about" className="p-4 sm:p-8">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Us</h2>

        <div className="mt-6 sm:mt-12">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-6 sm:mb-12">
            <h3 className="section-subtitle">Who We Are</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Arihant Finance Solution is a comprehensive financial consulting firm dedicated to delivering tailored, transparent, and top-tier financial services. Founded by experienced professionals with a deep understanding of the Indian financial landscape, we serve clients across sectors with smart, scalable, and structured solutions.
              </p>
              <p>
                We specialize in loan processing, accounting and taxation, financial advisory, and back-office operations. Our solutions are built on a strong foundation of ethics, accuracy, and client-centric service delivery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 h-full">
              <h3 className="section-subtitle">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted financial services partner for individuals, entrepreneurs, and businesses across India.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 h-full">
              <h3 className="section-subtitle">Our Mission</h3>
              <p className="text-gray-700">
                To simplify finance by offering clear, structured, and custom solutions that enable our clients to grow with confidence.
              </p>
            </div>
          </div>

          <div className="bg-arihant-gray/50 rounded-lg p-4 sm:p-8 mb-6 sm:mb-12">
            <h2 className="section-title text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-arihant-primary mb-2 text-center">{value.title}</h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title text-center">Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
            {/* Leader 1 */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-arihant-primary transition-colors">
              <img
                src="/assets/images/rushabh-shah.jpg"
                alt="Rushabh Shah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-arihant-secondary">Rushabh Shah</h4>
              <p className="text-gray-600">Director, Ahmedabad</p>
            </div>

            {/* Leader 2 */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-arihant-primary transition-colors">
              <img
                src="/assets/images/ashish-shah.jpg"
                alt="Ashish Shah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-arihant-secondary">Ashish Shah</h4>
              <p className="text-gray-600">Regional Head, Rajkot</p>
            </div>

            {/* Leader 3 */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-arihant-primary transition-colors">
              <img
                src="/assets/images/ankit-shah.jpg"
                alt="Ankit Shah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-arihant-secondary">Ankit Shah</h4>
              <p className="text-gray-600">Regional Head, Mumbai</p>
            </div>

            {/* Leader 4 */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-arihant-primary transition-colors">
              <img
                src="/assets/images/miti-shah.jpg"
                alt="Miti Shah"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-arihant-secondary">Miti Shah</h4>
              <p className="text-gray-600">Head of Operations Support</p>
            </div>

            {/* Leader 5 */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 text-center hover:border-arihant-primary transition-colors">
              <img
                src="/assets/images/ankit-mehta.jpg"
                alt="Ankit Mehta"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-arihant-secondary">Ankit Mehta</h4>
              <p className="text-gray-600">Head of Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};