import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#003366] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-8 py-10">
        {/* Our Story Section */}
        <div className="mb-12 bg-white/95 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl border-l-8 border-[#E53935] hover:shadow-red-200 transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#E53935] mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg">
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
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 border-l-8 border-[#003366]">
            <h3 className="text-2xl font-bold text-[#003366] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To empower Indian businesses with innovative technology solutions that drive growth:
              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-800">
                <li>Accessible financial solutions</li>
                <li>Support for entrepreneurs</li>
                <li>Sustainable employment</li>
                <li>Stronger digital economy</li>
              </ul>
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 border-l-8 border-[#E53935]">
            <h3 className="text-2xl font-bold text-[#E53935] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become India’s most trusted tech partner:
              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-800">
                <li>Digitally empowered ecosystem</li>
                <li>Financial inclusion for all</li>
                <li>Innovation-driven growth</li>
                <li>Future-ready India</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E53935] mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                color: "#003366",
                desc: "Custom web apps, e-commerce, and responsive sites."
              },
              {
                icon: "📱",
                title: "Mobile Apps",
                color: "#E53935",
                desc: "Native and cross-platform mobile solutions."
              },
              {
                icon: "🤖",
                title: "AI Solutions",
                color: "#003366",
                desc: "Automation, machine learning, and intelligent tools."
              }
            ].map(({ icon, title, color, desc }, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 border-l-8`}
                style={{ borderColor: color }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className={`text-xl font-bold mb-3`} style={{ color }}>
                  {title}
                </h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Happy Clients" },
              { num: "1000+", label: "Projects Completed" },
              { num: "50+", label: "Team Members" },
              { num: "15+", label: "Years Experience" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{item.num}</div>
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E53935] mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                color: "#003366",
                desc: "Cutting-edge tech, rooted in traditional wisdom."
              },
              {
                title: "Excellence",
                color: "#E53935",
                desc: "World-class output with Indian values."
              },
              {
                title: "Integrity",
                color: "#003366",
                desc: "Transparent and ethical business practices."
              }
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
                style={{ borderLeft: `8px solid ${val.color}` }}
              >
                <h4 className="text-xl font-bold mb-3" style={{ color: val.color }}>
                  {val.title}
                </h4>
                <p className="text-gray-700">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#E53935] mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO & Founder", initials: "RK", color: "#003366", edu: "IIT Delhi, 15+ years" },
              { name: "Arjun Sharma", role: "CTO", initials: "AS", color: "#E53935", edu: "IIT Bombay, Tech Visionary" },
              { name: "Vikram Patel", role: "Lead Developer", initials: "VP", color: "#003366", edu: "IIT Madras, Full Stack Expert" }
            ].map((leader, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300"
                style={{ borderLeft: `8px solid ${leader.color}` }}
              >
                <div className="w-32 h-32 bg-gradient-to-r from-[#003366] to-[#E53935] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {leader.initials}
                </div>
                <h4 className="text-xl font-bold" style={{ color: leader.color }}>{leader.name}</h4>
                <p className="text-gray-700">{leader.role}</p>
                <p className="text-sm text-gray-600 mt-2">{leader.edu}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
