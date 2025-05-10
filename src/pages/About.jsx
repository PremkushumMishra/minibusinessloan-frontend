import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8  py-10">
        {/* Our Story Section */}
        <div className="mb-12 bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-8 border-[#E53935]">
          <h2 className="text-3xl font-bold text-[#003366] mb-6 mt-10 text-center">
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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-l-8 border-[#E53935]">
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
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-l-8 border-[#E53935]">
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

        {/* Achievements Section */}
        <div className="mb-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-[#003366]">
              <h4 className="text-xl font-bold text-[#003366] mb-3">
                Innovation
              </h4>
              <p className="text-gray-700">
                Embracing cutting-edge technologies while respecting traditional
                wisdom.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-[#E53935]">
              <h4 className="text-xl font-bold text-[#E53935] mb-3">
                Excellence
              </h4>
              <p className="text-gray-700">
                Delivering world-class solutions with Indian values and global
                standards.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-8 border-[#003366]">
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

        {/* Partners Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* NBF Partner */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border-l-8 border-[#003366]">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/newlogo.png" alt="NBF Partner" className="w-22 h-22 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-[#003366]  mb-3">Our NBF Partner</h4>
              <p className="text-gray-700 mb-3 text-sm">
                Leading financial institution providing innovative banking solutions and digital services to empower businesses across India.
              </p>
            </div>
            {/* Sourcing Partner */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border-l-8 border-[#E53935]">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/sourcingpartner.png" alt="Sourcing Partner" className="w-20 h-20 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-[#E53935] mb-2">Our Sourcing Partner</h4>
              <p className="text-gray-700 text-sm">
                Trusted partner in business development and customer acquisition, helping us reach and serve more entrepreneurs nationwide.
              </p>
            </div>
            {/* Tech Partner */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border-l-8 border-[#003366]">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/fintechcloud.png" alt="Tech Partner" className="w-22 h-22 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-[#003366] mb-2">Our Tech Partner</h4>
              <p className="text-gray-700 text-sm">
                Cutting-edge technology solutions provider ensuring secure, scalable, and efficient digital infrastructure for our services.
              </p>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
