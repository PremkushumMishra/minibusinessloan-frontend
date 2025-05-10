import React from "react";

const About = () => {
  return (
    <div className="min-h-screen mt-1.5 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]">
      {/* Main Content */}
      <div className="container mx-auto px-6  mt-16 py-16">
        {/* Our Story Section */}
        <div className="mb-16 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border-l-4 border-[#003366]">
          <h2 className="text-3xl font-bold text-[#003366] mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Founded in 2024, we are a team of passionate innovators dedicated to
            transforming India's digital landscape. Our journey began with a
            vision to bridge the gap between traditional business practices and
            modern technological solutions. Today, we stand proud as a leading
            force in India's tech revolution, serving clients across the nation
            with cutting-edge digital solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#003366]">
            <h3 className="text-2xl font-bold text-[#003366] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower Indian businesses with innovative technology solutions that drive growth, create employment opportunities, and contribute to India's digital transformation journey. We are committed to:
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Providing accessible financial solutions to small businesses</li>
                <li>Supporting entrepreneurs in their growth journey</li>
                <li>Creating sustainable employment opportunities</li>
                <li>Building a stronger digital economy</li>
              </ul>
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#E53935]">
            <h3 className="text-2xl font-bold text-[#E53935] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted technology partner, known for excellence, innovation, and commitment to sustainable digital growth. We envision:
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>A digitally empowered business ecosystem</li>
                <li>Financial inclusion for all businesses</li>
                <li>Innovation-driven economic growth</li>
                <li>Building a future-ready India</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#003366]">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-bold text-[#003366] mb-3">
                Web Development
              </h4>
              <p className="text-gray-700">
                Custom web applications, e-commerce solutions, and responsive
                websites built with cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#E53935]">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-[#E53935] mb-3">
                Mobile Apps
              </h4>
              <p className="text-gray-700">
                Native and cross-platform mobile applications for iOS and
                Android with seamless user experience.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#003366]">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold text-[#003366] mb-3">
                AI Solutions
              </h4>
              <p className="text-gray-700">
                Intelligent automation, machine learning models, and AI-powered
                business solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-xl p-8 text-gray-800 shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="font-bold">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="font-bold">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="font-bold">Team Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="font-bold">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#003366]">
              <h4 className="text-xl font-bold text-[#003366] mb-3">
                Innovation
              </h4>
              <p className="text-gray-700">
                Embracing cutting-edge technologies while respecting traditional
                wisdom.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#E53935]">
              <h4 className="text-xl font-bold text-[#E53935] mb-3">
                Excellence
              </h4>
              <p className="text-gray-700">
                Delivering world-class solutions with Indian values and global
                standards.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#003366]">
              <h4 className="text-xl font-bold text-[#003366] mb-3">
                Integrity
              </h4>
              <p className="text-gray-700">
                Building trust through transparent and ethical business
                practices.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#003366]">
              <div className="w-32 h-32 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full mx-auto mb-4 flex items-center justify-center text-gray-800 text-4xl font-bold">
                RK
              </div>
              <h4 className="text-xl font-bold text-[#003366]">Rajesh Kumar</h4>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="text-sm text-gray-600 mt-2">
                IIT Delhi, 15+ years experience
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#E53935]">
              <div className="w-32 h-32 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full mx-auto mb-4 flex items-center justify-center text-gray-800 text-4xl font-bold">
                AS
              </div>
              <h4 className="text-xl font-bold text-[#E53935]">Arjun Sharma</h4>
              <p className="text-gray-700">CTO</p>
              <p className="text-sm text-gray-600 mt-2">
                IIT Bombay, Tech Visionary
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 border-l-4 border-[#003366]">
              <div className="w-32 h-32 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full mx-auto mb-4 flex items-center justify-center text-gray-800 text-4xl font-bold">
                VP
              </div>
              <h4 className="text-xl font-bold text-[#003366]">Vikram Patel</h4>
              <p className="text-gray-700">Lead Developer</p>
              <p className="text-sm text-gray-600 mt-2">
                IIT Madras, Full Stack Expert
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
      </div>
    </div>
  );
};

export default About;
