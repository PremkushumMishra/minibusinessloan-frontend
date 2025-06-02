import React from 'react'

const BankStatementComplted = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-jsutify bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12">
      <div className="bg-white/95 border border-blue-200 rounded-t-3xl rounded-bl-3xl shadow-2xl px-10 py-12 max-w-xl w-full text-center relative overflow-hidden">
        <div className="flex justify-center mb-6">
          <span className="inline-block animate-bounce">
            <svg className="w-20 h-20 text-blue-500 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#dbeafe"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4" />
            </svg>
          </span>
        </div>
        <h2 className="text-3xl font-poppins text-blue-800 mb-3 drop-shadow">
          Bank Statement Analysis <br /> Successfully Completed!
        </h2>
        <p className="text-gray-700 text-lg mb-2">
          This loan application has been allocated to the <span className="font-poppins text-blue-700">Credit Team</span> for further processing.
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-poppins text-blue-700">Our team will contact you soon.</span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <span className="absolute left-8 top-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
          <span className="absolute right-8 top-8 w-3 h-3 bg-blue-200 rounded-full animate-pulse"></span>
          <span className="absolute left-1/2 bottom-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  )
}

export default BankStatementComplted
