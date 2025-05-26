import React from 'react';
const EmiSheet=()=>{
    return(
        <div className="mt-10 border border-black p-4 text-sm">
        <h2 className="text-center font-bold text-lg mb-4 uppercase">
          New EMI Schedule as per Disbursal Date
        </h2>
      
        <div className="grid grid-cols-2 text-sm mb-4">
          <div>
            <p>Loan No.: <span className="inline-block border-b border-black w-48"></span></p>
            <p>Loan Tenure: 100 Days</p>
          </div>
          <div>
            <p>Loan Amount: ₹25,000</p>
            <p>EMI Start Date: 6/8/2025</p>
          </div>
        </div>
      
        <table className="w-full border text-xs text-center">
          <thead className="bg-yellow-300 font-semibold">
            <tr>
              <th className="border px-1">Instalment No.</th>
              <th className="border px-1">Instalment Date</th>
              <th className="border px-1">Outstanding Principal<br /> (in Rupees)</th>
              <th className="border px-1">Principal<br /> (in Rupees)</th>
              <th className="border px-1">Interest<br /> (in Rupees)</th>
              <th className="border px-1">Instalment<br /> (in Rupees)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "6/8/2025", "25,000", "1,510", "632", "2,143"],
              ["2", "6/22/2025", "23,490", "1,543", "594", "2,143"],
              ["3", "7/6/2025", "21,947", "1,588", "555", "2,143"],
              ["4", "7/20/2025", "20,353", "1,628", "515", "2,143"],
              ["5", "8/3/2025", "18,725", "1,663", "474", "2,143"],
              ["6", "8/17/2025", "17,056", "1,711", "432", "2,143"],
              ["7", "8/31/2025", "15,345", "1,755", "388", "2,143"],
              ["8", "9/14/2025", "13,590", "1,793", "344", "2,143"],
              ["9", "9/28/2025", "11,797", "1,845", "298", "2,143"],
              ["10", "10/12/2025", "9,947", "1,891", "252", "2,143"],
              ["11", "10/26/2025", "8,056", "1,933", "204", "2,143"],
              ["12", "11/9/2025", "6,116", "1,983", "155", "2,143"],
              ["13", "11/23/2025", "4,128", "2,038", "104", "2,143"],
              ["14", "12/7/2025", "2,090", "2,090", "53", "2,143"],
            ].map(([no, date, outPrincipal, principal, interest, emi], i) => (
              <tr key={i}>
                <td className="border px-1">{no}</td>
                <td className="border px-1">{date}</td>
                <td className="border px-1">{outPrincipal}</td>
                <td className="border px-1">{principal}</td>
                <td className="border px-1">{interest}</td>
                <td className="border px-1">{emi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
        <div className="mt-6 text-sm">
          <p>For Richcredit Finance Pvt. Ltd.</p>
          <p className="mt-4">Authorized Signatory</p>
          <p className="mt-4">Date: 01-05-2025</p>
          <p>Place: Delhi</p>
        </div>
      
        <div className="grid grid-cols-2 gap-10 mt-6">
          <div>
            <p>Borrower Name:</p>
            <div className="h-8 border-b border-black w-64 mt-1"></div>
            <p className="mt-4">Prop. of M/s:</p>
            <div className="h-8 border-b border-black w-64 mt-1"></div>
          </div>
          <div>
            <p>Borrower Sign.:</p>
            <div className="h-8 border-b border-black w-64 mt-1"></div>
          </div>
        </div>
      
        <div className="grid grid-cols-2 gap-10 mt-6">
          <div>
            <p>Co-Borrower Name:</p>
            <div className="h-8 border-b border-black w-64 mt-1"></div>
          </div>
          <div>
            <p>Co-Borrower Sign.:</p>
            <div className="h-8 border-b border-black w-64 mt-1"></div>
          </div>
        </div>
        <img src="/sanctionfooter.webp" alt="Sanction Letter Footer" className="w-full h-auto object-cover" />

      </div>
      
    )
  }
  export default EmiSheet;