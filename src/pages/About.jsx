import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-6 bg-white">
      {/* Hero Section */}
      <div
        // className="w-full bg-[#003366] max-w-screen-lg mx-auto mb-10 rounded-t-3xl rounded-bl-3xl overflow-hidden shadow-lg relative"

        className="w-full bg-[#003366] mx-auto mb-10 rounded-t-3xl rounded-bl-3xl overflow-hidden shadow-lg relative"
        style={{ minHeight: 320 }}
      >
        <img
          src="/abouheropic.png"
          alt="About Hero"
          className="w-full h-[320px] md:h-[420px] object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 text-center">
          <h1 className="text-white text-[24px] sm:text-[32px] md:text-[40px] leading-tight font-semibold font-poppins drop-shadow-lg">
            A Journey Rooted in Trust, Innovation, and Growth
          </h1>
          <p className="text-white/90 text-[14px] sm:text-[16px] md:text-lg font-poppins mt-4 max-w-[700px] leading-relaxed">
            Our journey began with a simple mission — to provide fast, flexible,
            and accessible loans tailored to the unique needs of MSMEs. We're
            committed to helping small businesses thrive, scale, and contribute
            to economic growth across the country. Over time, we've grown by
            understanding the real challenges MSMEs face, continuously
            innovating our offerings, and delivering financial support that
            truly makes a difference. From day one, our goal has been clear: to
            empower small businesses with the capital and confidence they need
            to succeed and grow.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-12 w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl text-[#003366] mb-8 text-center">
          Our Core Values
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          {/* Card 1 */}
          <div className="bg-[#E5E5E5] rounded-xl px-8 py-6 flex-1 w-xs sm:w-full sm:ml-10 text-left">
            <div className="font-poppins font-semibold text-lg md:text-xl mb-2">
              Innovation
            </div>
            <div className="font-poppins text-base text-[#222]">
              Embracing cutting-edge technologies while respecting traditional
              wisdom.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#E5E5E5] rounded-xl px-8 py-6 flex-1 w-xs sm:w-full text-left">
            <div className="font-poppins font-semibold text-lg md:text-xl mb-2">
              Excellence
            </div>
            <div className="font-poppins text-base text-[#222]">
              Delivering world-class solutions with Indian values and global
              standards.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#E5E5E5] rounded-xl px-8 py-6 flex-1 w-xs sm:w-full sm:mr-10 text-left">
            <div className="font-poppins font-semibold text-lg md:text-xl mb-2">
              Integrity
            </div>
            <div className="font-poppins text-base text-[#222]">
              Building trust through transparent and ethical business practices.
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8  py-10">
        {/* Core Values Section */}

        {/* Mission & Vision Section */}
        <div className="mb-16 px-4 md:px-8">
          {/* Our Vision Section */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 items-start">
            {/* Vision Content - Left Side */}
            <div className="order-2 md:order-1">
              <h3 className="text-[#003366] text-[28px] md:text-[40px] font-poppins font-semibold mb-4 md:mb-6">
                Our Vision
              </h3>
              <p className="font-poppins text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] mb-4 md:mb-6 text-gray-800">
                To empower Indian businesses with innovative technology
                solutions that drive growth, create employment opportunities,
                and contribute to India's digital transformation journey. We are
                committed to:
              </p>
              <ol className="list-decimal ml-5 font-poppins text-[15px] md:text-[18px] leading-[24px] md:leading-[30px] space-y-2 text-gray-700">
                <li>
                  Providing accessible financial solutions to small businesses
                </li>
                <li>Supporting entrepreneurs in their growth journey</li>
                <li>Creating sustainable employment opportunities</li>
                <li>Building a stronger digital economy</li>
              </ol>
            </div>

            {/* Vision Image - Right Side */}
            <div className="order-1 md:order-2 flex justify-center mt-6 md:mt-0">
              <img
                src="/ourvissionpic.jpg"
                alt="Our Vision"
                className="object-cover w-full max-w-[320px] sm:max-w-[400px] md:max-w-md h-[250px] sm:h-[350px] md:h-[500px] rounded-xl"
              />
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Mission Image - Left Side */}
            <div className="order-1 md:order-1 flex justify-center mt-6 md:mt-0">
              <img
                src="/about-mission.png"
                alt="Our Mission"
                className="rounded-2xl object-cover w-full max-w-[320px] sm:max-w-[400px] md:max-w-md h-[250px] sm:h-[350px] md:h-[500px]"
              />
            </div>

            {/* Mission Content - Right Side */}
            <div className="order-2 md:order-2 flex flex-col justify-center">
              <h3 className="text-[#003366] text-[28px] md:text-[40px] font-poppins font-semibold mb-4 md:mb-6">
                Our Mission
              </h3>
              <p className="font-poppins text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] mb-4 md:mb-6 text-gray-800">
                To become India's most trusted technology partner, known for
                excellence, innovation, and commitment to sustainable digital
                growth. We envision:
              </p>
              <ol className="list-decimal ml-5 font-poppins text-[15px] md:text-[18px] leading-[24px] md:leading-[30px] space-y-2 text-gray-700">
                <li>A digitally empowered business ecosystem</li>
                <li>Financial inclusion for all businesses</li>
                <li>Innovation-driven economic growth</li>
                <li>Building a future-ready India</li>
              </ol>
            </div>
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

        {/* Partners Section */}

        <div className="mb-12">
          <h2 className="text-3xl font-poppins flex-between text-[#0D4183] mb-8 text-center">
            Our Partners
          </h2>
          <div className="relative">
            {/* Mobile Layout */}
            <div className="md:hidden space-y-0">
              {/* First Partner Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-l-8 border-[#003366] relative">
                <div className="w-20 h-20 object-contain rounded-xl mx-auto mb-4">
                  <img
                    src="/sourcingpartner.png"
                    alt="NBF Partner"
                    className="w-22 h-22 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-3">
                  Our NBFC Partner
                </h4>
                <p className="text-gray-700 text-sm">
                  Leading financial institution providing innovative banking
                  solutions and digital services to empower businesses across
                  India.
                </p>
              </div>

              {/* Mobile Bridge Connection */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="flex flex-col items-center py-4">
                  {/* Top Bridge Support */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#003366] to-[#0D4183] rounded-full mb-2"></div>

                  {/* Main Vertical Bridge */}
                  <div className="relative">
                    {/* Central Support */}
                    <div className="w-2 h-12 bg-gradient-to-b from-[#003366] via-[#0D4183] to-[#E53935] rounded-full shadow-lg"></div>

                    {/* Side Supports */}
                    <div className="absolute top-2 -left-3 w-1 h-8 bg-[#003366] rounded-full transform rotate-12"></div>
                    <div className="absolute top-2 -right-3 w-1 h-8 bg-[#E53935] rounded-full transform -rotate-12"></div>
                  </div>

                  {/* Connection Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-2 border-[#0D4183]">
                    <svg
                      className="w-4 h-4 text-[#0D4183]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.5 6L18 8.5l2.5 2.5L22 9.5 20.5 6zM12 4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm8.5 7.5L19 13l2.5 2.5L23 14l-2.5-2.5zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>

                  {/* Bottom Bridge Support */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#0D4183] to-[#E53935] rounded-full mt-2"></div>

                  {/* Mobile Partnership Label */}
                  <div className="mt-3">
                    <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#003366] to-[#E53935] px-3 py-1 rounded-full shadow-md">
                      Partnership
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Partner Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-l-8 border-[#E53935] relative">
                <div className="w-30 h-20 object-contain rounded-xl mx-auto mb-4">
                  <img
                    src="/techaviomlogo.png"
                    alt="Sourcing Partner"
                    className="w-25 h-18 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  Our Sourcing Partner
                </h4>
                <p className="text-gray-700 text-sm">
                  Trusted partner in business development and customer
                  acquisition, helping us reach and serve more entrepreneurs
                  nationwide.
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              {/* First Partner Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-l-8 border-[#003366] relative">
                <div className="w-20 h-20 object-contain rounded-xl mx-auto mb-4">
                  <img
                    src="/sourcingpartner.png"
                    alt="NBF Partner"
                    className="w-22 h-22 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-3">
                  Our NBFC Partner
                </h4>
                <p className="text-gray-700 text-sm">
                  Leading financial institution providing innovative banking
                  solutions and digital services to empower businesses across
                  India.
                </p>
              </div>

              {/* Desktop Connection Element */}
              <div className="flex flex-col items-center justify-center px-4">
                <div className="relative w-full">
                  {/* Bridge Design */}
                  <div className="relative">
                    {/* Main Bridge Line */}
                    <div className="w-full h-2 bg-gradient-to-r from-[#003366] via-[#0D4183] to-[#E53935] rounded-full shadow-md"></div>

                    {/* Bridge Supports */}
                    <div className="absolute -top-4 left-6 w-1 h-8 bg-[#003366] rounded-full"></div>
                    <div className="absolute -top-4 right-6 w-1 h-8 bg-[#E53935] rounded-full"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-[#0D4183] rounded-full"></div>
                  </div>

                  {/* Central Connection Icon */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg border-3 border-[#0D4183]">
                    <svg
                      className="w-6 h-6 text-[#0D4183]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.5 6L18 8.5l2.5 2.5L22 9.5 20.5 6zM12 4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm8.5 7.5L19 13l2.5 2.5L23 14l-2.5-2.5zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  </div>

                  {/* Partnership Label */}
                  <div className="text-center mt-8">
                    <span className="text-xs font-semibold text-white bg-gradient-to-r from-[#003366] to-[#E53935] px-4 py-2 rounded-full shadow-md">
                      Strategic Alliance
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Partner Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border-l-8 border-[#E53935] relative">
                <div className="w-30 h-20 object-contain rounded-xl mx-auto mb-4">
                  <img
                    src="/techaviomlogo.png"
                    alt="Sourcing Partner"
                    className="w-25 h-18 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  Our Sourcing Partner
                </h4>
                <p className="text-gray-700 text-sm">
                  Trusted partner in business development and customer
                  acquisition, helping us reach and serve more entrepreneurs
                  nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
