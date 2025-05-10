import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE]">
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700 mb-2">Customer Support</p>
              <p className="text-gray-800 font-bold">1800-XXX-XXXX</p>
              <p className="text-gray-600 text-sm">
                Mon-Sat, 9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700 mb-2">Get in touch</p>
              <p className="text-gray-800 font-bold">support@example.com</p>
              <p className="text-gray-600 text-sm">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-700 mb-2">Chat with us</p>
              <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form and Office Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E0BCF3] focus:border-[#7EE7EE] bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E0BCF3] focus:border-[#7EE7EE] bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E0BCF3] focus:border-[#7EE7EE] bg-white/90 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E0BCF3] focus:border-[#7EE7EE] bg-white/90 backdrop-blur-sm"
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white/90 backdrop-blur-sm text-gray-800 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Location */}
            <div className="bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gray-800">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Head Office</h3>
                    <p className="text-gray-700">
                      123 Business Park, Sector 62
                      <br />
                      Noida, Uttar Pradesh 201301
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gray-800">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Working Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gray-800">🚗</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">How to Reach</h3>
                    <p className="text-gray-700">
                      Nearest Metro Station: Noida Sector 62
                      <br />
                      Bus Stop: Business Park
                      <br />
                      Parking Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="#"
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-3xl">📱</span>
                <p className="text-sm mt-2 font-bold">Facebook</p>
              </a>
              <a
                href="#"
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-3xl">📱</span>
                <p className="text-sm mt-2 font-bold">Twitter</p>
              </a>
              <a
                href="#"
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-3xl">📱</span>
                <p className="text-sm mt-2 font-bold">LinkedIn</p>
              </a>
              <a
                href="#"
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-3xl">📱</span>
                <p className="text-sm mt-2 font-bold">Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
