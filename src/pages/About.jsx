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
            Since our inception in 2024, We have been driven by a single mission: to empower businesses and individuals across India with seamless, technology-driven financial solutions. What started as a small team of visionaries has rapidly grown into a trusted brand, recognized for our commitment to transparency, innovation, and customer-centricity.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Over the years, we have helped thousands of entrepreneurs and families achieve their dreams by making finance accessible, simple, and secure. Our journey is defined by the success stories of our clients, the dedication of our team, and our relentless pursuit of excellence. As we continue to expand our reach and impact, we remain steadfast in our promise to deliver cutting-edge digital solutions and set new benchmarks in the fintech industry.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 rounded-xl p-6 sm:p-8">
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
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="font-bold">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10cr+</div>
              <p className="font-bold">Loan Disbursed</p>
            </div>



            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="font-bold">Team Members</p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="font-bold">Branches</p>
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
            {/* NBFC Partner */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border-l-8 border-[#003366]">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/sourcingpartner.png" alt="NBF Partner" className="w-22 h-22 object-contain" />
              </div>
              <h4 className="text-xl font-bold text-[#003366]  mb-3">Our NBFC Partner</h4>
              <p className="text-gray-700 mb-3 text-sm">
                Leading financial institution providing innovative banking solutions and digital services to empower businesses across India.
              </p>
            </div>
            {/* Sourcing Partner */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center border-l-8 border-[#E53935]">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/techaviomlogo.png" alt="Sourcing Partner" className="w-20 h-20 objec t-contain" />
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
