import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#D9D9D9] rounded-bl-5xl py-2 px-0">
      {/* Header Image with Overlay Text */}
      <div className="mt-3 rounded-bl-4 h-[220px] md:h-[500px] rounded-2xl overflow-hidden relative mb-8 mx-4 md:mx-8">
        <img
          src="/contactuspic.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        
        {/* <div className="absolute left-0 bottom-0 p-8 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Contact Us</h1>
        </div> */}
      </div>

      {/* Main Content: Two Columns */}
      <div className="max-w-full py-13  mx-auto px-4 md:px-8 bg-[#ffffff] flex flex-col md:flex-row gap-8 mb-12">
        {/* Left: Contact Info */}
        <div className="flex-1 ml-4 flex flex-col justify-center gap-4">
          <div className="mb-2">
            <div className="text-xs font-semibold text-[#222] mb-1">Have questions?</div>
            <div
              className="font-poppins font-poppins text-[40px] leading-[100%] tracking-[0] text-[#0D4183] mb-2"
              style={{ letterSpacing: 0 }}
            >
              We are always ready<br />to help you and answer<br />your question
            </div>
            {/* <div
              className="font-poppins font-light text-[20px] leading-[100%] tracking-[0] text-[#000000] mt-8 mb-4"
              style={{ letterSpacing: 0 }}
            >
              Whether you're looking for help with your loan <br />application, need more information about our services, <br />or just want to connect – reach out to us anytime.
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Support Team & Email */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="font-poppins font-poppins text-[20px] leading-[100%] tracking-[0] text-[#000000]" style={{ letterSpacing: 0 }}>Support Team</div>
              <div className="text-[#505050] text-base">+91 7814447895</div>
              <div className="font-poppins font-poppins text-[20px] leading-[100%] tracking-[0] text-[#000000]" style={{ letterSpacing: 0 }}>Email</div>
              <div className="text-[#505050] text-base">info@minibusinessloan.com</div>
              <div className="font-poppins font-poppins text-[20px] leading-[100%] tracking-[0] text-[#000000]" style={{ letterSpacing: 0 }}>Customer Care</div>
              <div className="text-[#505050] text-base">customercare@techaviom.in</div>
            </div>
            {/* Right: Our Location & Social Media */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="font-poppins font-poppins text-[20px] leading-[100%] tracking-[0] text-[#000000]" style={{ letterSpacing: 0 }}>Our Location</div>
              <div className="text-[#505050] text-base leading-tight">
                Lalita Park, Gurudwara, Lalita Park<br />New Delhi, East Delhi 110092 India
              </div>
              <div className="font-poppins font-poppins text-[20px] leading-[100%] tracking-[0] text-[#000000]" style={{ letterSpacing: 0 }}>Social Media</div>
              <div className="flex flex-row gap-3 mt-1">
                <a href="#" title="Email"><img src="/youtube.webp" alt="Email" className="h-7 w-7 object-contain" /></a>
                <a href="https://www.facebook.com/profile.php?id=61576580291499" target="_blank" rel="noopener noreferrer" title="Facebook"><img src="/facebook.png" alt="Facebook" className="h-7 w-7 object-contain" /></a>
                <a href="https://www.instagram.com/minibusinessloan?igsh=MW5zcGt6Z2praHVldw==" target="_blank" rel="noopener noreferrer" title="Instagram"><img src="/Instagram_icon.png" alt="Instagram" className="h-7 w-7 object-contain" /></a>
                {/* <a href="#" title="LinkedIn"><img src="/linkedinicon.png" alt="LinkedIn" className="h-6 w-6 object-contain" /></a> */}
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-md bg-[#E8E8E8] rounded-t-3xl rounded-bl-4xl shadow-lg p-4">
            <h2 className="text-xl text-[#222] mb-4 mt-4">Get in Touch</h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-0 border-b border-[#BDBDBD] rounded-none px-0 py-2 text-[#222] placeholder-[#8C8C8C] font-poppins focus:outline-none focus:border-[#003366] shadow-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-0 border-b border-[#BDBDBD] rounded-none px-0 py-2 text-[#222] placeholder-[#8C8C8C] font-poppins focus:outline-none focus:border-[#003366] shadow-none"
              />
              <input
                type="tel"
                placeholder="Your Number"
                className="w-full bg-transparent border-0 border-b border-[#BDBDBD] rounded-none px-0 py-2 text-[#222] placeholder-[#8C8C8C] font-poppins focus:outline-none focus:border-[#003366] shadow-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-0 border-b border-[#BDBDBD] rounded-none px-0 py-2 text-[#222] placeholder-[#8C8C8C] font-poppins focus:outline-none focus:border-[#003366] shadow-none"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full bg-transparent border-0 border-b border-[#BDBDBD] rounded-none px-0 py-2 text-[#222] placeholder-[#8C8C8C] font-poppins focus:outline-none focus:border-[#003366] shadow-none"
              />
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-3 px-6 rounded-t-2xl rounded-bl-2xl font-bold font-poppins hover:bg-[#0D4183] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="w-full bg-[#E8E8E8] rounded-t-2xl rounded-bl-2xl overflow-hidden flex items-center justify-center h-96 md:h-[500px]">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7652272189698!2d77.14594892047522!3d28.52377151197654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e800fc85b13%3A0x56939bf707597244!2sGanga%20Apartments!5e0!3m2!1sen!2sin!4v1748089679741!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
