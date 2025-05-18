import React from 'react'

const NewWhy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Text Card */}
          <div className="bg-pink-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#222]">Priya Shukla</h2>
            <p className="text-base text-[#444]">I had a great experience with the loan disbursement process. The team was very professional and explained everything in detail. My loan was approved quickly, and the disbursement happened within 10 mins, as promised.</p>
          </div>
          {/* Center Image Card with Overlay */}
          <div className="relative rounded-2xl overflow-hidden flex items-end justify-center min-h-[420px]">
            <img src="/center-image.jpg" alt="Ravi Gaur" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Ravi Gaur</h2>
              <p className="text-white text-base">From applying for the loan to getting the funds in my account, I had an amazing experience! The entire process was very smooth. The staff was polite and guided me at each step of the procedure.</p>
            </div>
          </div>
          {/* Right Text Card */}
          <div className="bg-pink-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#222]">Rohit Dandotiya</h2>
            <p className="text-base text-[#444]">It's rare to come across such credible financial providers as the staff I found here. They were really understanding and transferred us the money we required immediately without making us go through any long processes.</p>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[320px]">
            <img src="/student.jpg" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div></div>
          <div className="rounded-2xl overflow-hidden flex items-center justify-center min-h-[320px]">
            <img src="/youngman.jpg" alt="Young Man" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewWhy
