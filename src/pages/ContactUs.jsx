import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#003366] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-15 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E53935] text-white py-3 px-6 rounded-lg font-medium hover:bg-red-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Address */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Our Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>123 Business Park</p>
                <p>Tech Hub, Sector 62</p>
                <p>Noida, Uttar Pradesh 201301</p>
                <p>India</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <p className="text-gray-600">+91 7814447895</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <p className="text-gray-600">info@minibusinessloanloan.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-2xl hover:text-[#003366] transition-colors duration-300">
                  📱
                </a>
                <a href="#" className="text-2xl hover:text-[#003366] transition-colors duration-300">
                  💼
                </a>
                <a href="#" className="text-2xl hover:text-[#003366] transition-colors duration-300">
                  📸
                </a>
                <a href="#" className="text-2xl hover:text-[#003366] transition-colors duration-300">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-[#003366] mb-6 text-center">Find Us</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4054523!3d28.5022296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647880021744!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
