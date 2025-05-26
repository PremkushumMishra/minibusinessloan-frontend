import React from "react";

const KeyFactsStatement = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 my-10 print:shadow-none print:border-none">
      <h2 className="text-center text-lg md:text-xl font-semibold underline mb-2">Key Facts Statement</h2>
      <div className="text-center font-medium mb-4">Part 1 (Interest rate and fees/charges)</div>
      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 w-1/2">1 Loan proposal/ Account No.</td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">2 Type of Loan</td>
            <td className="border border-gray-400 px-2 py-1">Mini Business Loan (100 Days)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">3 Name of the Entity</td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">4 Sanctioned Loan amount (in Rupees)</td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">5 Disbursal schedule</td>
            <td className="border border-gray-400 px-2 py-1">100% Disbursement upfront.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">6 Loan term (year/months/days)</td>
            <td className="border border-gray-400 px-2 py-1">100 Days</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">7 Interest rate (%) and type (fixed or floating or hybrid)</td>
            <td className="border border-gray-400 px-2 py-1">20% (Flat);<br/>Fixed</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">8 Additional Information in case of Floating rate of interest</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border border-gray-400 text-sm mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-2 py-1">Fee/ Charges</th>
            <th className="border border-gray-400 px-2 py-1">One-time/ Recurring</th>
            <th className="border border-gray-400 px-2 py-1">Amount (in Rupees) or Percentage (%) as applicable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">i. Processing fees</td>
            <td className="border border-gray-400 px-2 py-1">One Time</td>
            <td className="border border-gray-400 px-2 py-1">10% of the Sanction Amount</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">ii. Insurance charges</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">Nil</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">iii. Valuation fees</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">Nil</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">iv. Any other (please specify)</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">9 Annual Percentage Rate (APR)</td>
            <td className="border border-gray-400 px-2 py-1">. . . . . %</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">10 Details of Contingent Charges (in Rupees or %, as applicable)</td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">i. Penal charges, in case of delayed payment</td>
            <td className="border border-gray-400 px-2 py-1">....... % per month over and above the rate of Loan.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1 pl-6">ii. Other penal charges</td>
            <td className="border border-gray-400 px-2 py-1">As per Loan Agreement</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">iii. Foreclosure charges</td>
            <td className="border border-gray-400 px-2 py-1">As per Loan Agreement</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1 pl-6">iv. Charges for switching of loans from floating to fixed rate and vice versa</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">v. Other charges :</td>
            <td className="border border-gray-400 px-2 py-1">As per Loan Agreement</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center font-medium mb-4 mt-8">Part 2 (Other qualitative information)</div>
      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 w-2/3">1 Clause of Loan agreement relating to engagement of recovery agents</td>
            <td className="border border-gray-400 px-2 py-1">Clause 6</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">2 Clause of Loan agreement which details grievance redressal mechanism</td>
            <td className="border border-gray-400 px-2 py-1">Clause 12</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">3 Phone number and email id of the nodal grievance redressal officer</td>
            <td className="border border-gray-400 px-2 py-1">XXXXXXXXXXXXXX</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">4 Whether the loan is, or in future maybe, subject to transfer to other REs or securitization.</td>
            <td className="border border-gray-400 px-2 py-1">Yes</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between mt-10 text-xs text-gray-500">
        <div className="flex flex-col items-center">
          <div className="border-t border-gray-400 w-32 mb-1"></div>
          Applicant/Borrower
        </div>
        <div className="flex flex-col items-center">
          <div className="border-t border-gray-400 w-32 mb-1"></div>
          Co-Applicant/Co-Borrower
        </div>
      </div>
    </div>
  );
};

export default KeyFactsStatement; 