import React from 'react';
// No need to import images if they are in the public folder

const SanctionLatter = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Image */}
        <img src="/sanctionheader.webp" alt="Sanction Letter Header" className="w-full h-auto object-cover" />

        <div className="p-6 md:p-10">
          {/* Borrower Info */}
          <div className="mb-4 text-base text-gray-800">
            <div><span className="font-bold">Borrower Name:</span> ____________________________________________</div>
            <div><span className="font-bold">Address:</span> ____________________________________________________________</div>
            <div><span className="font-bold">Business Address:</span> ____________________________________________________________________________________________</div>
          </div>

          <p className="mb-4 text-gray-700">Thank you for showing your interest in availing loan from 100 Days Co-lending Finance and giving us an opportunity to serve you.</p>

          <p className="mb-4 text-gray-700">We are pleased to inform you that your loan application has been approved as per the below-mentioned terms and conditions. 100 Days Co-lending Finance, given by M/s Naman Finlease Private Limited having a registered office of the company situated at S-370, Basement Panchsheel Park, New Delhi, Delhi, India, 110017, M/s Techavion Finance Private Limited, having a registered office of the company situated at Plot No. 31, 1st Floor, Om Vihar Phase-1, Uttam Nagar Near Metro Pillar No. 702, West Delhi, Delhi, India, 110059 and Richcredit Finance Pvt. Ltd having a registered office of the company situated at 1/50, 2nd Floor, Ganga Appartment, Lalita Park, Laxmi Nagar, Delhi-110092 , these companies are registered under the Companies Act, 2013,</p>

          <p className="mb-6 text-gray-700">This sanction will be subject to the following Terms and Conditions:</p>

          {/* Terms Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Customer Name</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">Sanctioned Loan Amount (Rs.)</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Rate of Interest (%) Fixed</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">Date of Sanction</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Total Repayment Amount (Rs.)</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">Tenure in Days</td>
                  <td className="border px-3 py-2">100 days</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Repayment Frequency</td>
                  <td className="border px-3 py-2">Every 7 days till 100 Days</td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">Penal Interest (%) per month</td>
                  <td className="border px-3 py-2">2</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Processing Fee 10% plus GST</td>
                  <td className="border px-3 py-2">Rs. 11800.00</td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">APR (Annual Percentage Rate)</td>
                  <td className="border px-3 py-2">116.07%</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Net Disbursment Amount</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="font-semibold border px-3 py-2">Date of First INSTALLMENT</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="font-semibold border px-3 py-2">Date of Last INSTALLMENT</td>
                  <td className="border px-3 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Co-Lending Finance Info */}
          <div className="text-xs text-gray-600 border border-gray-200 rounded p-4 bg-gray-50 mb-8">
            <span className="font-bold">Co-Lending Finance</span> <br />
            100 Days Co-lending Finance, given by M/s Naman Finlease Private Limited having a registered office of the company situated at S-370, Basement Panchsheel Park, New Delhi, Delhi, India, 110017, M/s Techavion Finance Private Limited, having a registered office of the company situated at Plot No. 31, 1st Floor, Om Vihar Phase-1, Uttam Nagar Near Metro Pillar No. 702, West Delhi, Delhi, India, 110059 and Richcredit Finance Pvt. Ltd having a registered office of the company situated at 1/50, 2nd Floor, Ganga Appartment, Lalita Park, Laxmi Nagar, Delhi-110092.
          </div>

          {/* Loan Card Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Installment No.</th>
                  <th className="border px-3 py-2">Installment Payment Date</th>
                  <th className="border px-3 py-2">Installment Amount</th>
                  <th className="border px-3 py-2">Principle</th>
                  <th className="border px-3 py-2">Interest</th>
                  <th className="border px-3 py-2">Outstanding Balance</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 14 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border px-3 py-2 text-center">{i + 1}</td>
                    <td className="border px-3 py-2"></td>
                    <td className="border px-3 py-2"></td>
                    <td className="border px-3 py-2"></td>
                    <td className="border px-3 py-2"></td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
   {/* Meeting Confirmation Letter Section */}
   <div className="mb-8 text-sm text-gray-800 leading-relaxed border border-gray-200 rounded p-6 bg-gray-50">
            <div className="mb-2">
              <span className="font-bold">To,</span><br />
              <span className="font-bold">The Manager,<br />TECHAVIOM FINANCE PRIVATE LIMITED</span>
            </div>
            <div className="mb-2">Dear Sir/Madam.</div>
            <div className="mb-4">
              This is to confirm and inform you that in respect of my/our application for Business Loan from you and execution of necessary Loan Agreements, other documents relating to disbursement of my/our loan and to comply with all other necessary formalities for the financial assistance, I/We had a meeting as per the following description:
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-400 text-sm">
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Name of the Company Official/ Representative met</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Date of Meeting</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Time of Meeting</td>
                    <td className="border px-3 py-2">A.M/P.M</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-medium">Place/ Address of Meeting</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-8">
              Thanking you<br /><br />
              Yours Sincerely,
            </div>
            <div className="flex flex-row justify-between mb-8">
              <div className="text-center">
                <div className="border-t border-gray-400 w-48 mx-auto mb-1"></div>
                <span className="text-xs">(Signature Of Applicant)</span>
              </div>
              <div className="text-center">
                <div className="border-t border-gray-400 w-48 mx-auto mb-1"></div>
                <span className="text-xs">(Signature Of Co Applicant 1)</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="border-t border-gray-400 w-full mb-1"></div>
              <span className="text-xs">Signature of TECHAVIOM FINANCE PRIVATE LIMITED Representative</span>
            </div>
            <div className="mb-4">
              <div className="border-t border-gray-400 w-full mb-1"></div>
              <span className="text-xs">Signature of NAMAN FINLEASE PRIVATE LIMITED Representative</span>
            </div>
            <div className="mb-2">
              <div className="border-t border-gray-400 w-full mb-1"></div>
              <span className="text-xs">Signature of RICHCREDIT FINANCE PRIVATE LIMITED</span>
            </div>
          </div>

          {/* LOAN AGREEMENT Section */}
          <div className="mb-10 text-gray-900 text-xs md:text-sm leading-snug font-[arial] break-words px-2 md:px-8">
            <h2 className="text-center text-base md:text-lg font-bold uppercase mb-3 tracking-wider underline">LOAN AGREEMENT</h2>
            <p className="font-bold mb-2">
              THIS LOAN AGREEMENT <span className="font-normal">(hereinafter referred to as the "Agreement")</span> is made as of the Effective Date (defined hereinafter) at the place and on the date stated in the Schedule A ("Execution Date") <span className="font-bold uppercase">BETWEEN</span>
            </p>
            <p className="font-bold mb-3">
              THIS LOAN AGREEMENT <span className="font-normal">(hereinafter referred to as the "Agreement")</span> is made as of the Effective Date (defined hereinafter) at the place and on the date stated in the Schedule A ("Execution Date")
            </p>

            <div className="text-center font-bold uppercase my-3 tracking-wider">BETWEEN</div>

            <div className="mb-3">
              <span className="font-bold">TECHAVIOM FINANCE PRIVATE LIMITED</span>, <span className="font-normal">a Non-Banking Finance Company (NBFC) registered with the Reserve Bank of India and incorporated under the Companies Act, 1956/2013, having its registered office at Plot No. 31, 1st Floor, Om Vihar Phase-1, Uttam Nagar Near Metro Pillar No. 702, West Delhi, Delhi, India, 110059 and S-370, Basement Panchsheel Park, New Delhi, Delhi, India, 110017, CIN - U65990DL2020PTC365615 acting as Sourcing and Collection Agent (hereinafter referred to as the "Agent" which expression shall, unless it be repugnant to the meaning or context thereof, include its successors in title and assigns) of the FIRST PARTY.</span>
            </div>
            <div className="text-center font-bold my-1">AND</div>
            <div className="mb-3">
              <span className="font-bold">NAMAN FINLEASE PRIVATE LIMITED</span>, <span className="font-normal">a Non-Banking Finance Company (NBFC) registered with the Reserve Bank of India and incorporated under the Companies Act, 1956/2013, having its registered office at S-370, Basement Panchsheel Park, New Delhi, India, 110017, CIN - U70101DL1997PTC088735 acting as Syndicator activity between the Lender and Borrower (hereinafter referred to as the "Syndicator" which expression shall, unless it be repugnant to the meaning or context thereof, include its successors in title and assigns) of the SECOND PARTY.</span>
            </div>
            <div className="text-center font-bold my-1">AND</div>
            <div className="mb-3">
              <span className="font-bold">RICHCREDIT FINANCE PRIVATE LIMITED</span>, <span className="font-normal">a company incorporated under the Companies Act, 1956, having its registered office at 1/50, 2nd Floor, Ganga Appartment, Lalita Park, Laxmi Nagar, Delhi-110092, CIN - U65990DL1996PTC193537, acting as the Lender/Funder (hereinafter referred to as the "Lender" or "Funder" which expression, unless it be repugnant to the meaning or context thereof, include its successors in title and assigns) of the THIRD PARTY.</span>
            </div>
            <div className="text-center font-bold my-1">AND</div>
            <div className="mb-3">
              <span className="font-normal">The Borrower(s) whose name(s) and address(es) is/are stated in Schedule A. (hereinafter referred to / collectively referred to as <span className="font-bold">"the Borrower(s)"</span> which expression shall, unless it be repugnant to the meaning or context thereof, be deemed to mean and include his/her legal heirs, executors and administrators of the OTHER PARTY;</span>
            </div>
            <div className="mb-3">
              <span className="font-normal">The Agent, Syndicator, Lender, and Borrower(s) shall be hereinafter individually referred to as "Party" and collectively as "Parties," as the context may require.</span>
            </div>
            <div className="font-bold mb-2 mt-4">WHEREAS:</div>
            <div className="mb-2">
              <div className="flex items-start mb-2">
                <span className="mr-2 font-bold">a)</span>
                <span className="bg-yellow-100 border-l-4 border-yellow-400 pl-2 py-1 block rounded">
                  Relying upon the representations made and information provided by the Borrower(s) and Lender has agreed to grant the Loan subject to terms and conditions contained in this Agreement and Schedules attached hereto and the Interest which is acceptable and binding on the Parties to this Agreement. The Loan shall be disbursed in the manner stated hereinafter.
                </span>
              </div>
              <div className="flex items-start mb-2">
                <span className="mr-2 font-bold">b)</span>
                <span>
                  The Borrower(s) acknowledge(s) and accept(s) that notwithstanding anything to the contrary contained in this Agreement, the Loan can be recalled, and the entire outstanding amount (as defined hereinafter) would be repayable on demand at the sole discretion of LENDER.
                </span>
              </div>
              <div className="flex items-start mb-2">
                <span className="mr-2 font-bold">c)</span>
                <span>
                  The Parties hereto are desirous of recording the terms and conditions in relation to the Loan to be granted by the LENDER to the Borrower(s) and certain other matters related thereto in the manner hereinafter contained.
                </span>
              </div>
            </div>
            <div className="font-bold mt-3">
              NOW, THEREFORE, THIS AGREEMENT WITNESSETH AND MUTUALLY AGREED, DECLARED AND CONFIRMED BETWEEN THE PARTIES HERETO AS FOLLOWS:
            </div>
          </div>

          {/* ARTICLE-1: DEFINITIONS Section */}
          <div className="mb-10 text-gray-900 text-xs md:text-sm leading-snug font-[arial] break-words px-2 md:px-8">
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide">ARTICLE-1: DEFINITIONS</h3>
            <p className="font-bold mb-1">1.1</p>
            <p className="mb-3">In this Agreement, unless the subject or context otherwise requires, the following words and expressions shall have the following meanings</p>
            <div className="space-y-2">
              <div className="flex">
                <span className="font-bold w-8">(a)</span>
                <span>"Agreement" means and includes this Agreement and the attachment/s annexed hereto. Agreement shall also include applications, supplementary agreements, modifications, alterations, addendum attachments and schedules subsequently executed during the tenure of this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(b)</span>
                <span>"Agent" refers to TECHAVIOM FINANCE PRIVATE LIMITED, responsible for sourcing and collection of loans on behalf of the Lender.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(c)</span>
                <span>"Annual Percentage Rate (APR)" means the annual cost of credit to the borrower which includes interest rate and all other charges associated with the credit facility.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(d)</span>
                <span>"Amortization" means repayment of the loan and interest thereon by way of EMls or in any other manner determined by the Lender and includes repayment of other dues, charges etc. under this Agreement. The mode of amortization is more specifically described and set out in the Schedule - A.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(e)</span>
                <span>"Borrower" means and includes the person(s) named in Schedule A, to whom the Lender has agreed to grant the loan and who will receive the loan pursuant to this Agreement. The term "Borrower" shall wherever the context so requires mean and be construed as "Borrowers". Moreover, the term "Borrower" which expression shall unless the context otherwise requires, include his/ her/ their heirs, representatives, executors, administrators and permitted assignees.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(f)</span>
                <span>"Default Interest Rate" means the rate as stated in the Schedule or as maybe amended by the LENDER from time to time at which the LENDER shall compute and apply interest on all amounts not paid when due for payment or reimbursement by the Borrower to the LENDER.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(g)</span>
                <span>"Disbursement Request Form" is a Letter through which the Borrower requests the Lender to release part/ s or whole payment of the loan amount. This form will form a part of the agreement and shall be binding upon the Borrower/ s.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(h)</span>
                <span>"Effective Date" means the date on which the first disbursement is availed by the Borrower out of the total loan sanctioned.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(i)</span>
                <span>"Equated Monthly Installment" (EMI) means the amount of monthly payment necessary to amortize the loan with interest within such period as may be determined by the Lender from time to time. The term "Equated Monthly Installment" shall not mean or be construed as equal installments where the rate of interest to be levied is agreed to be.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(j)</span>
                <span>"Equated Periodic Instalment" (EPI) means an equated or fixed amount of repayments, consisting of both the principal and interest components, to be paid by a borrower towards repayment of a loan at periodic intervals for a fixed number of such intervals; and which result in complete amortisation of the loan. EPIs at monthly intervals are called EMIs.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(k)</span>
                <span>"Fees and Charges" shall mean and include without limitation Processing Fees, service Charges, Prepayment charges, cheque bounce charges, cheque swapping charges, loan re-schedulement charges, loan statement charges, loan cancellation and rebooking charges, non-utilization charges, stamp duty, registration and other statutory duties, NOC issuance charges, legal collection, repossession and incidental charges, change in repayment frequency charges and all other fees and charges payable by the Borrower to the Lender and shall include all charges which the lender may have to incur during the tenure of the loan on account of the existence of the present agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(l)</span>
                <span>"Financial Year" means period of twelve months commencing from 1st April.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(m)</span>
                <span>"Financing" means providing of loan to the Borrower by the Lender.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(n)</span>
                <span>"Guarantee" means the irrevocable and unconditional Business guarantee (if any) in favour of LENDER issued or to be issued by the Guarantor in a form and manner satisfactory to LENDER to secure the obligations of the Borrower(s) under this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(o)</span>
                <span>"Interest Rate" means the interest rate announced by the Lender from time to time as its prime lending rate and applied by the Lender with spread, if any, as may be decided by the Lender, as applicable to the loan of the Borrower pursuant to this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(p)</span>
                <span>"KFS" means a statement of key facts of a loan agreement, in simple and easier to understand language, provided to the borrower in a standardized format.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(q)</span>
                <span>"Loan" means the loan of an amount as set out in Article 2.1 of this Agreement and Schedule, including any additional top-up Loan availed in future by the Borrower and includes all interests, costs or any other expenses related to the Loan.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(r)</span>
                <span>"Loan Application" means the application along with the supporting documents submitted by the borrower for the purpose of availing a finance facility from the Lender for the purpose stated in Schedule A of this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(s)</span>
                <span>"Loan Document" means and includes the loan agreement along with annexures and any other document executed in relation to the present loan.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(t)</span>
                <span>"Loan Offer Letter" means the sanction Letter issued by the Lender for sanctioning of the loan to the borrower containing all the terms and conditions on which the loan is offered by the lender to the borrower.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(u)</span>
                <span>"Lender" or "Funder" refers to RICHCREDIT FINANCE PRIVATE LIMITED, providing the financial backing for the loans.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(v)</span>
                <span>"Pre-payment" means foreclosing of the loan or premature repayment of the entire loan amount including all charges as per terms and conditions laid down by the Lender in that behalf.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(w)</span>
                <span>"Prime Lending Rate" or "PLR" means the interest rate announced by the Lender from time to time as its prime lending rate.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(x)</span>
                <span>"Rate of Interest" means the rate of interest referred to in Article 2.2 of this Agreement and as varied from time to time in terms of this Agreement and as agreed by the Borrower and specified in Schedule - B.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(y)</span>
                <span>"Repayment" means and includes repayment of all dues in respect of the loan, which shall be construed to include the principal amount of the loan, interest, all other charges, legal fees, expenses and costs, etc. provided for in this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(z)</span>
                <span>"Syndicator" refers to NAMAN FINLEASE PRIVATE LIMITED, which connects the Agent with organizations providing funding.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(aa)</span>
                <span>"Schedule" means the Schedules as set out in this Agreement.</span>
              </div>
            </div>
            {/* Interpretations Subsection */}
            <p className="font-bold mb-1 mt-4">1.2 Interpretations:</p>
            <div className="space-y-2">
              <div className="flex">
                <span className="font-bold w-8">(a)</span>
                <span>Unless the context otherwise requires, reference to one gender includes a reference to the other and the words importing the singular include the plural and vice versa.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(b)</span>
                <span>Reference to the words "includes" or "including" shall be construed as being by way of illustration only and shall not be construed as limiting the generality of any forgoing words.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(c)</span>
                <span>Unless the context otherwise requires, any consent, permission, approval or no objection (by whatever name called) of the Lender shall mean the prior written consent of the Lender.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(d)</span>
                <span>Any document required to be executed for the purposes of this Agreement would be in a form acceptable to the Lender.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(e)</span>
                <span>When there is more than one guarantor, the term guarantor shall include all such guarantors and the grammar in this agreement shall be deemed to have been appropriately modified. If however there are no guarantors, the provision relating to guarantee to be provided by the guarantor (s) shall be deemed to be excluded from this Agreement.</span>
              </div>
              <div className="flex">
                <span className="font-bold w-8">(f)</span>
                <span>Unless the contrary intention appears or context otherwise requires, or is otherwise specified herein, a term defined in this Agreement, which is not otherwise defined in any other documents or in any notice given under or in connection with this Agreement, will have the same meaning in the documents or notice, as in this Agreement. Any term or expression used but not defined herein or in the other documents shall have the same meaning attributable to it under applicable law including the General Clauses Act, 1897.</span>
              </div>
            </div>
          </div>

          {/* ARTICLE-2: LOAN, INTEREST & AMORTISATION Section */}
          <div className="mb-10 text-gray-900 text-xs md:text-sm leading-snug font-[arial] break-words px-2 md:px-8">
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide">ARTICLE-2: LOAN, INTEREST & AMORTISATION</h3>
            
            {/* 2.1 */}
            <p className="font-bold text-sm mt-4 mb-2">2.1</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a) Amount of the loan</span>
                <span><br />The Lender agrees, based on the Borrowers' request, representations, warranties, covenants, and undertakings as contained herein and in the application for Business Loan, to lend to the Borrower and the Borrower agrees to borrow from the Lender, the Business Loan on the terms and conditions as fully set out in this Agreement and Schedule hereto.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b) Details of Disbursement</span>
                <span><br />The loan will be disbursed in one installment over a period to be decided by the Lender with reference to the need. The Borrower hereby acknowledges the receipt of the loan/ installment disbursed as indicated in the Receipt annexed herein and agrees to acknowledge the receipt of the loan against future disbursement, if any.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(c) Mode of Disbursement</span>
                <span><br />All payments to be made by the Lender to the Borrower (s) under or in terms of this agreement shall be made by Bank transfer or cheque duly crossed and marked "Account Payee Only" and also by way of NEFT/RTGS. The collection charges, if any in respect of all such cheques/transfers will have to be borne by the Borrower. The Bank transfer or cheque will be in the name of the borrower or the person/ entity in which / whose name the disbursement memo is filled for release of loan amount.</span>
              </div>
            </div>

            {/* 2.2 Interest */}
            <p className="font-bold text-sm mt-4 mb-2">2.2 Interest</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a)</span>
                <span>The rate of interest applicable to the said loan as at the date of execution of this agreement is as stated in the Schedule.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b)</span>
                <span>The Borrower shall reimburse or pay to the Lender such amount as may have been paid or payable by the Lender to the Central or State Government on account of any tax levied on interest on the loan by the Central or State Government. The reimbursement or payment shall be made by the Borrower as and when called upon to do so by the Lender.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(c)</span>
                <span>The interest on loan will begin to accrue in favour of the Lender as and from the date of disbursement of fund from bank account of Lenders towards the borrowers.</span>
              </div>
            </div>

            {/* 2.3 Computation of Interest */}
            <p className="font-bold text-sm mt-4 mb-2">2.3 Computation of Interest</p>
            <div className="ml-4 space-y-1"> {/* Reduced space-y for single paragraph */}
              <div>
                 <span>The EMI comprises of principal and interest calculated on the basis of monthly rests at the rate applicable and is rounded off to the next rupee. Interest and any other charges shall be computed on the basis of a year of three hundred and sixty five days.</span>
              </div>
            </div>

            {/* 2.4 Amortization */}
            <p className="font-bold text-sm mt-4 mb-2">2.4 Amortization</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a)</span>
                <span>Subject to Article 2.2 and the provision for variation of interest rates, etc. contained in this Agreement the Borrower will amortize the loan as stipulated in the Schedule subject to however that in the event of delay or advancement of disbursement for any reason whatsoever, the date of commencement of EMI, as the case may be, shall be the first day of the month following the month in which the disbursement of the loan would have been completed and consequently the due date of payment of first EMI shall in such case be the 10th day (which is subject to change at the discretion of the Lender) of the following month.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b)</span>
                <span>The Borrower agrees and accepts that:-<br />Lender shall have the right from time to time as mentioned herein, to review and reschedule the repayment of the Loan and dues under this Agreement including the tenure. information with respect to such revision and the applicable/ applied interest shall be communicated to the Borrower in writing. Notwithstanding what is stated in Article 2.4 (a) above and in the schedule the Lender, shall have the right at any time or from time to time to review and reschedule the 
repayment terms of the loan or of the outstanding amount thereof in such manner and to such extent 
as the Lender may in its sole discretion decide. In such event/ s the Borrower shall repay the loan 
or the outstanding amount thereof as per the revised schedule as may be determined by the Lender 
in its sole discretion and communicated to the Borrower by the Lender in writing at the time of 
such revision or at the end of the said financial year in the discretion of the Lender which writing 
shall thereafter form an integral part of this Agreement.</span>
              </div>
              {/* 2.4 (c) */}
              <div>
                <span className="font-bold mr-2">(c)</span>
                <span>Notwithstanding anything to the contrary contained in this Agreement, the Lender shall be 
entitled to increase the EMI amount suitably if:</span>
                <div className="ml-6 space-y-1 mt-1">
                  <div>
                    <span className="font-bold mr-2">(i)</span>
                    <span>the said EMI would lead to negative amortization (i.e. EMI not being adequate to cover interest in full), and/ or</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(ii)</span>
                    <span>the principal component contained in the EMI is inadequate to amortize the loan within such period as determined by the Lender and/ or</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(iii)</span>
                    <span>any such damage as warranted by the Lender.</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(iv)</span>
                    <span>the Borrower shall be required to pay such increased EMI amount and number thereof as decided by the Lender and intimated to the Borrower by the Lender.</span>
                  </div>
                </div>
              </div>
              {/* 2.4 (d) */}
              <div>
                <span className="font-bold mr-2">(d)</span>
                <span>The Borrower undertakes to be bound by any rescheduling the tenure of the loan and the amount of the EMls/ recomputing of tenure and/ or EMls and/ or interest by the Lender in terms of this Agreement for repayment of the loan.</span>
              </div>
              {/* 2.4 (e) */}
              <div>
                <span className="font-bold mr-2">(e)</span>
                <span>The borrower agrees and accepts that notwithstanding anything contained in this agreement, the Lender may, in its discretion, during the tenure of this agreement, with a view to keep the EMls constant, vary the tenure of the agreement or with a few to fix a particular tenure, vary the EMI.</span>
              </div>
              {/* 2.4 (f) */}
              <div>
                <span className="font-bold mr-2">(f)</span>
                <span>The Borrower understands and accepts that upon variation of the EMls, adjustments, if any, may be done at the end of any month/ quarter/ financial year as may be decided by the Lender from time to time, additional amounts may have to be paid by the Borrower in the event the EMI has increased, to make up the shortfall in the EMI, if any. However, if EMI has been reduced, adjustment shall be made by the Lender from future EMls and other dues of the Borrower.</span>
              </div>
              {/* 2.4 (g) Tenure */}
              <div>
                <span className="font-bold mr-2">(g) Tenure</span>
                <span><br />The tenure of the Loan and its commencement shall be as set out in Schedule - A. However, this Agreement shall remain in force till all the monies due and payable under this Agreement are fully paid by the Borrower to the satisfaction of the Lender.</span>
              </div>
            </div>

            {/* 2.5 Place and Mode of Payment by the Borrower */}
            <p className="font-bold text-sm mt-4 mb-2">2.5 Place and Mode of Payment by the Borrower</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a)</span>
                <span>The Borrower understands & undertakes that the loan and all dues shall be amortized by any of the following modes:</span>
                <div className="ml-6 space-y-1 mt-1">
                  <div>
                    <span className="font-bold mr-2">(i)</span>
                    <span>IRCs or</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(ii)</span>
                    <span>ECH& IRCs or</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(iii)</span>
                    <span>Deduction at source from salary & IRCs or</span>
                  </div>
                  <div>
                    <span className="font-bold mr-2">(iv)</span>
                    <span>Such other mode as may be approved by the Lender.</span>
                  </div>
                </div>
                <p className="mt-2">All monies due and payable by the Borrower to the Lender under or in terms of this Agreement shall be paid at the registered office or the concerned regional/ branch office of the Lender by cheque or bank draft, drawn in favour of the Lender on a scheduled bank in the town or city where such registered office/ branch/ regional office is situated or Cheque executed in favour of the Lender or in any other manner as may be approved by the Lender and shall be so paid as to enable the Lender to realize the amount sought to be paid on or before the due date to which the payment relates. Credit for all payments by cheque/ bank draft drawn will be given only on realization thereof by the Lender.</p>
                <p className="mt-2">In addition to the above,</p>
              </div>
              <div>
                <span className="font-bold mr-2">(a)</span>
                <span>The Lender shall be entitled to present the appropriate Postdated cheque(s) in respect of an EMI in its bank at any time on or after the due date of such EMI, the borrower undertakes to keep sufficient balance in his account to honour the same.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b)</span>
                <span>In the event the Lender does not for any reason deposit the IRCs/ post dated cheque(s) before</span>
              </div>
            </div>

            {/* 2.10 Borrower Employment Status Changes */}
            <p className="font-bold text-sm mt-4 mb-2">2.10 Borrower Employment Status Changes</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>In case the Borrower is employed with a concern then upon the Borrower opting for any scheme or 
accepting any offer from his employer providing for any benefit for resigning or retiring from the 
service of the employer or upon the employer terminating his employment for any reason or upon the 
Borrower resigning or retiring from the services for any reason whatsoever, then notwithstanding 
anything to the contrary contained in this Agreement or any letter or document, the entire outstanding 
principal amount of the loan including outstanding interest and other dues thereon shall be payable 
by the Borrower to the Lender from the amount(s) receivable by him from the employer under such 
scheme or offer, or any terminal benefit, as the case may be. Provided however, in the event of the 
said amount or amounts being insufficient to repay the said sums to the Lender in full, the unpaid 
amount remaining due to the Lender shall be paid by the Borrower in such a manner as the Lender 
may in its discretion decide and the payment will be made by the Borrower accordingly. notwithstanding anything stated in article 2.4 and the Schedule. The Borrower hereby irrevocably authorizes the Lender to communicate with and receive the said amounts from his employer directly.</span>
              </div>
            </div>

            {/* 2.11 Continuation of Liability of Borrower by the Legal heir(s) of the Borrower */}
            <p className="font-bold text-sm mt-4 mb-2">2.11 Continuation of Liability of Borrower by the Legal heir(s) of the Borrower</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Where the Borrower being an individual dies during the pendency of the loan, the liability of the deceased Borrower to repay the loan together with the interest etc. and to observe the terms and conditions of this Agreement and/ or any other agreement(s), document(s) that may have been or may be executed by the deceased Borrower with the Lender in respect of this loan or any other loan, devolves to the legal heir(s)/ representative(s)/ assignees/ successors of the said deceased Borrower, as if they were executed by the legal heir(s)/ representative(s)/ assignees/ successors of the deceased.</span>
              </div>
            </div>
          </div>
          
          {/* ARTICLE-3: CONDITIONS PRECEDENT TO DISBURSEMENT OF THE LOAN Section */}
          <div className="mb-10 text-gray-900 text-xs md:text-sm leading-snug font-[arial] break-words px-2 md:px-8">
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide">ARTICLE-3: CONDITIONS PRECEDENT TO DISBURSEMENT OF THE LOAN</h3>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a) Non-existence of Event of Default:</span>
                <span> No event of default as defined in Article 6 shall have happened.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b) Extra-ordinary circumstances:</span>
                <span> No extra-ordinary or other circumstances have come into existence which shall make it improbable/impossible for the Borrower to fulfill his obligations under this Agreement.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(c)</span>
                <span> The Borrower shall have executed and delivered a money bond or a demand promissory note in favour of the Lender for the amount of the Loan, if required by the Lender.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(d)</span>
                <span> The Borrower shall provide evidence or satisfy the Lender to the effect that there is no action, suit, proceedings or investigation pending or to the knowledge of the Borrower, or is threatened by or against the Borrower, before any Court of Law or Government authority or any other competent authority which might have a material effect on the financial and other affairs of the Borrower or which might put into question the validity or performance of any of the Transaction Documents executed by the Borrower or in favour of the Lender.</span>
              </div>
            </div>
          </div>

          {/* ARTICLE-4: GENERAL CONVENANTS OF THE BORROWER Section */}
          <div className="mb-10 text-gray-900 text-xs md:text-sm leading-snug font-[arial] break-words px-2 md:px-8">
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide">ARTICLE-4: GENERAL CONVENANTS OF THE BORROWER</h3>
            <p className="font-bold text-sm mt-4 mb-2">4.1 Particular Affirmative Covenants</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold mr-2">(a) Utilization of loan:</span>
                <span> The Borrower shall utilize the entire loan for the Purposes as mentioned in Schedule A, as indicated by him in his loan application and for no other purpose whatsoever.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(b) To notify change in employment etc.:</span>
                <span> The Borrower shall notify any change in his employment, business or profession within seven days of the change.</span>
              </div>
              <div>
                <span className="font-bold mr-2">(c)</span>
                <span> The Borrower shall promptly give written notice to the Lender of any material circumstances affecting the ability of the Borrower to repay the Loans in the manner stipulated hereunder.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">4.2 Credit, Other Information, Disclosure and Inspection</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower shall immediately furnish such information and documents in relation to their income and expenses as may be required by the Lender from time to time. The Borrowers hereby authorize the Lender to make or cause to make such inquiries as it may deem fit for establishing their creditworthiness; and to disclose information relating to their Loan Account and/or dealing relationship(s) with the Lender, including but not limited to details of the Loan, defaults made, transactions undertaken and balances and positions with the Lender or any other relevant information, as the Lender may think fit, to the Regulator, any third party, credit reference agencies, government or other authorized agencies, without the prior written consent of the Borrowers. As and when required by the Lender, the Borrowers shall permit inspection of all books of accounts and other records maintained by them in respect of the Loan, to the officers of the Lender or the person nominated by it.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">4.3</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>On the Lender\'s request the Borrower shall do, perform and execute any such acts, deeds, matters and things as the Lender may consider necessary in respect of this agreement.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">4.4</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>In case Borrower commits default in payment or repayment of principal amount of the loan or interest thereon, the Lender will have unqualified right to disclose or publish the details of default in such manner and medium as the Lender may in its sole discretion think fit.</span>
              </div>
            </div>

            {/* 4.5 Litigation */}
            <p className="font-bold text-sm mt-4 mb-2">4.5 Litigation</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>That the Borrower is not a party to any litigation of a material character and that the Borrower is not aware of any facts likely to give rise to such litigation or to material claims against the Borrower.</span>
              </div>
            </div>

            {/* 4.6 Negative Covenants */}
            <p className="font-bold text-sm mt-4 mb-2">4.6 Negative Covenants</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Unless the Lender shall otherwise agree:</span>
                <ul className="list-disc ml-6">
                  <li><b>Loan, Surety or Guarantee:</b> The Borrower shall not obtain any other loan/ credit facility from any bank/ financial institution etc. or repay any such loan, advance etc. or stand surety for anybody or guarantee the repayment of any loan or the purchase price of any asset. The Borrower shall not avail any loan/ credit facility from any other bank/ financial institution etc.</li>
                  <li><b>Leaving (India):</b> Where the Borrower has to, during the tenure of the loan leave (India) for employment or business or for long term stay abroad, he shall give prior written notice to the Lender and shall at the discretion of the Lender prepay the entire loan and other dues under this Agreement or pay the same as per the directions of the Lender.</li>
                  <li><b>Closure of Account:</b> The Borrower shall not close the bank account against which any cheques/IRCs have been issued to the Lender in respect to repayment of dues under this Agreement.</li>
                </ul>
              </div>
            </div>

            {/* 4.7 Change in address */}
            <p className="font-bold text-sm mt-4 mb-2">4.7 Change in address</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower shall forthwith inform the Lender as regards any change in his address for service of notice or change in his residence.</span>
              </div>
            </div>

            {/* 4.8 Additional Covenants */}
            <p className="font-bold text-sm mt-4 mb-2">4.8 Additional Covenants</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower shall:</span>
                <ul className="list-disc ml-6">
                  <li>In the event the Borrower fails to pay when due any sum which it may owe to the Lender and the Lender resorts to legal proceedings to recover such sums, the lender shall be entitled to recover from the Borrower all advances, charges, costs and expenses including legal fees, incurred or paid by the Lender in enforcing any such right, or remedy conferred by this Agreement (or in the enforcement thereof). All such sums shall become a part of the outstanding dues hereunder and shall be paid to the Lender by the Borrower immediately and without delay and demur.</li>
                </ul>
              </div>
            </div>

            {/* ARTICLE-5: BORROWERS WARRANTIES */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-5: BORROWERS WARRANTIES</h3>
            <p className="font-bold text-sm mt-4 mb-2">5.1 The Borrower hereby warrants and undertakes to the Lender as follows:</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold">(a)</span> <span>Confirmation of loan application: The Borrower confirms the accuracy of the information given in his loan application made to the Lender and any prior or subsequent information or explanation given to the Lender in this behalf. The Borrower confirms that all the photocopy/ true copies of documents submitted for the purpose of the loan are genuine. The Lender may at any time call for proper verification of originals of any such copies.</span>
              </div>
              <div>
                <span className="font-bold">(b)</span> <span>Compliance of 'Know Your Customer Policy' (KYC Policy): That the Borrower is fully aware of the 'KYC Policy' and confirms that, the information/ clarification/ document/ signage provided by him for his identity, age, address, signature, photograph, bank account, occupation, income and transaction and all other material facts are true and correct & that the transaction, etc. are bonafide and are law. The Borrower further confirms that he has disclosed all facts/information as are required to be so disclosed for the adherence and compliance of the provisions relatable to the KYC Policy.</span>
              </div>
              <div>
                <span className="font-bold">(c)</span> <span>The Borrower has informed the Lender about all facts relating to his Assets to the Lender.</span>
              </div>
              <div>
                <span className="font-bold">(d)</span> <span>Due Payments of public and other demands: The Borrower has paid all public demands such as Income Tax and all other taxes and revenues payable to the Government of (India) or to the Government of State or to any local authority and that at present there are no sums due as such taxes and revenues due and outstanding.</span>
              </div>
              <div>
                <span className="font-bold">(e)</span> <span>It shall be the Borrower's obligation to keep himself acquainted with the policy (ies)/ rules of the Lender, regarding the issue of cheques for discharge of the loan and the consequences of dishonor thereof and the penal liabilities for that dishonor.</span>
              </div>
              <div>
                <span className="font-bold">(f)</span> <span>The Borrower is aware that the act of issuing a cheque or stopping payment of the cheques issued to the Lender also constitutes criminal offence.</span>
              </div>
              <div>
                <span className="font-bold">(g)</span> <span>To make good all payment(s), expenses(s), fees(s), cost(s), duty (ies), charge(s) etc. as and when incurred by the Lender on behalf of the Borrower.</span>
              </div>
            </div>

            {/* 5.2 Indemnity */}
            <p className="font-bold text-sm mt-4 mb-2">5.2 Indemnity:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower undertakes to indemnify and keep the Lender indemnified for any loss(es), damage(s), cost(s) etc. incurred/ suffered by the Lender for breach by the Borrower of any of the terms of this Agreement or for acts of omission/ commission of the Borrower or as a consequence of the Lender relying on the representations, warranties and acknowledgements and information provided by the Borrower under this Agreement while granting the loan. In the event of any claims being made on the Lender, on account of any breach of warranty, representations, non-compliance of any applicable law, unauthorized act, fraud, deed or thing done or omitted to be done or undertaking made by the Borrower or its employees, agents, being false, the Borrower undertakes to pay on first demand made by the Lender of any amount on this account without any demur, reservation, contest, protest whatsoever within 7 working days from the demand being made.</span>
              </div>
            </div>

            {/* 5.3 Statement of Income */}
            <p className="font-bold text-sm mt-4 mb-2">5.3 Statement of Income:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower undertakes that he shall of his own accord send to the Lender a statement of his income, every year with effect from the date hereof. However, the Lender shall have the right to require the Borrower to furnish such information/documents concerning his employment, trade, business, profession etc. at any time and the Borrower shall furnish such information/ documents immediately.</span>
              </div>
            </div>

            {/* ARTICLE-6: EVENTS OF DEFAULTS & REMEDIES OF THE LENDER */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-6: EVENTS OF DEFAULTS & REMEDIES OF THE LENDER</h3>
            <p className="font-bold text-sm mt-4 mb-2">6.1</p>
            <div className="ml-4 space-y-2">
              <div>
                <span>The occurrence of any or all of the following events shall constitute events of default:</span>
                <ul className="list-disc ml-6 space-y-1">
                  <li><b>(a) Payment of Dues:</b> Default shall have occurred in case of failure to make payment of EMIs and/or interest and/ or in payment of any other amounts when due or demanded by the Lender in terms of this Agreement and/ or in terms of any other Agreement/s, documents that may be subsisting or that may be executed between the Borrower and the Lender hereafter.</li>
                  <li><b>(b) Performance of Covenants:</b> Default shall have occurred in the performance of any other covenants, conditions or Agreements on the part of the Borrower under this Agreement or any other agreement/s between the Borrower and the Lender in respect of this loan and/ or any other loan and such default shall have continued over a period of 30 days after notice thereof shall have been given to the Borrower by the Lender.</li>
                  <li><b>(c)</b> If wrong/fraudulent documents submitted for availing the loan facility.</li>
                  <li><b>(d) Supply of Misleading Information:</b> Any information given by the Borrower in his loan application to the Lender for financial assistance is found to be misleading, incorrect or in any material respect any warranty referred to in Article 6 is found to be incorrect.</li>
                  <li><b>(e) Failure to furnish information/ documents:</b> If the Borrower fails to furnish information/ documents as and when required by the Lender.</li>
                  <li><b>(f) Dishonor of any PDCs/IRCs/ cheque provided under this Agreement:</b> Any instructions given by the Borrower for stopping payment of any PDCs/ IRCs/ cheques under this Agreement or instructions to the Lender not to deposit any PDCs/ IRCs / cheques.</li>
                  <li><b>(g)</b> If any security to the facility becomes infructuous or is challenged by the Borrower or some other person.</li>
                  <li><b>(h) Divorce/ marital dispute:</b> Where the loan is given jointly to husband and wife and if a divorce/ marital dispute occurs between them, the same may be considered as event of default at the sole discretion of the Lender.</li>
                  <li><b>(i) Inability to pay debts:</b>
                    <ul className="list-decimal ml-6">
                      <li>If there is reasonable apprehension that the Borrower is unable to pay his debts as and when due/ is writing his inability to pay his debts and when such debts mature or any recovery proceedings or any insolvency proceedings have been admitted/ instituted before a court.</li>
                      <li>If the Borrower commits an act of insolvency or the Borrower is declared insolvent or bankrupt or if the Borrower makes any application for declaring himself as insolvent or if an application regarding the Borrower as insolvent/ bankrupt is made and is admitted in a court of law by any competent authority for taking the Borrower into insolvency/ bankruptcy.</li>
                      <li>If any other financial institution (s)/ bank(s) or non-banking financial companies with whom the Borrower has entered into agreements for financial assistance have recalled/ withdrawn such loan(s) or any part thereof or have recalled its/ their loan(s) under their respective loan agreement(s).</li>
                    </ul>
                  </li>
                  <li><b>(j)</b> In case the Borrower is an employee: The Borrower opts for any scheme or accepts any other scheme from the employer providing any benefit or resigning or retiring or retiring from the employment prior to superannuation, or upon the employer terminating the Borrower's employment for any reason, or upon the Borrower resigning or retiring from the service of its employer for any reason whatsoever.</li>
                  <li><b>(k)</b> The Borrower commits any breach of the terms and conditions of this Agreement.</li>
                </ul>
              </div>
            </div>

            {/* 6.2 Notice to the Lender on the happening of an Event of Default */}
            <p className="font-bold text-sm mt-4 mb-2">6.2 Notice to the Lender on the happening of an Event of Default:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>If any event of default or any event which, after the notice or lapse of time or both would constitute an event of default shall have occurred under this Agreement, it shall be the obligation of the Borrower to forthwith notify/ give the Lender notice thereof in writing specifying such event of default and thereupon the entire principal amount of loan together with interest and all other amounts shall become due and payable forthwith and the Lender shall be entitled to recover the loan with interest and all other amounts due and payable under this Agreement.</span>
              </div>
              <div>
                <span>If one or more of the events specified in "events of default" shall have happened, then, the Lender, by a written notice to the Borrower may declare that the principal, all accrued interest and all other amounts payable by the Borrower in terms of this Agreement and/ or any other agreement/s/ document/ s subsisting between the Borrower and the Lender, shall become due and payable and upon such declaration the same shall become due and payable forthwith by the Borrower to the Lender. The Lender shall be at liberty to recover the amounts due from the Borrower.</span>
              </div>
            </div>

            {/* 6.3 Remedies of the Lender in an Event of Default */}
            <p className="font-bold text-sm mt-4 mb-2">6.3 Remedies of the Lender in an Event of Default:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Upon occurrence of an Event of Default, the Lender shall have the right to</span>
                <ul className="list-disc ml-6">
                  <li>recall the entire outstanding Loan along with any interest (including default interest), fees, costs, charges and all other sums whatsoever payable by the Borrower to the Lender etc ("Outstanding Amount") whereby the Outstanding Amount shall become immediately due and payable by the Borrower;</li>
                  <li>the Lender shall be entitled to initiate and pursue any actions/ proceedings as deemed necessary by the Lender for recovery of such Outstanding Amount;</li>
                  <li>terminate this agreement and to immediately recover from the Borrower the Outstanding Amount;</li>
                  <li>report the Borrower as a defaulter to RBI and other credit bureau agencies;</li>
                  <li>invoke any repayment instruments or similar forms obtained from the Borrower, and/or</li>
                  <li>exercise any other rights or remedy available to the Lender under law or equity.</li>
                </ul>
                <span>The powers and the entitlements conferred herein are cumulative and nothing herein contained shall prejudice or affect any general or special powers to which the Lender is may be by law or otherwise entitled or shall preclude the Lender from enforcing its rights under this agreement. Notwithstanding any cancellation or termination pursuant to the provisions of this clause, all the provisions of this agreement shall continue in full force and effect as herein specifically provided mutatis mutandis till such time as the Outstanding Amount is repaid by the Borrower, to the satisfaction of the Lender.</span>
              </div>
            </div>

            {/* 6.4 */}
            <p className="font-bold text-sm mt-4 mb-2">6.4</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>It is hereby clarified that the remedies referred to above shall be in addition to and without prejudice to any other remedy available to the Lender either under this Agreement, or under any other agreement, or in law.</span>
              </div>
            </div>

            {/* 6.5 Expenses of collection */}
            <p className="font-bold text-sm mt-4 mb-2">6.5 Expenses of collection</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>All costs incurred by the Lender after an event of default have occurred in connection with:<br/>(a) The collection of amounts due under this Agreement shall be charged to the Borrower and reimbursed by the Borrower as the Lender may demand.</span>
              </div>
            </div>

            {/* 6.6 Evidence of debt */}
            <p className="font-bold text-sm mt-4 mb-2">6.6 Evidence of debt</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The records and accounts maintained by the Lender in its ordinary course of business shall be prima facie proof of amounts and other claims under this Agreement. A certified copy of the statement of account by an officer of the Lender stating the amount due at any particular time shall be prima facie evidence against the Borrower in respect of payments due.</span>
              </div>
            </div>

            {/* 6.7 Communication with third party, etc. */}
            <p className="font-bold text-sm mt-4 mb-2">6.7 Communication with third party, etc.</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>In the event of default, the Lender shall be entitled to communicate, in any manner it may deem fit, or with any person or person with a view to receiving assistance of such persons in recovering the defaulted amounts. Also, representatives of the Lender shall be entitled to visit any place of work of the Borrower.</span>
              </div>
            </div>

            {/* 6.8 Disclosure of names to appropriate authorities */}
            <p className="font-bold text-sm mt-4 mb-2">6.8 Disclosure of names to appropriate authorities:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Borrower hereby agrees as a pre-condition of the loan given to borrower by the Lender that in case Borrower commits default in the repayment of the loan or in repayment of interest thereon or any of the agreed installment of the Loan on due date(s), the Lender shall have an unqualified right to disclose or publish the name of the Borrower, as the case may be, as defaulters, in such manner and through such medium as the Lender in its absolute discretion may think fit to the appropriate authorities.</span>
            </div>
          </div>
          
            {/* 6.9 */}
            <p className="font-bold text-sm mt-4 mb-2">6.9</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>It be noted by the borrower that the list of events of defaults is only suggestive and not exhaustive. The Lender in its sole discretion may determine any future event(s) which may constitute an event of default.</span>
              </div>
            </div>

            {/* 6.10 */}
            <p className="font-bold text-sm mt-4 mb-2">6.10</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>It be also be noted by the borrower that if the borrower unable to repay the loan within the specified time frame, lending institutions may send loan recovery agents to collect the remaining balance from the borrower.</span>
              </div>
            </div>

            {/* ARTICLE-7: WAIVER */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-7: WAIVER</h3>
            <p className="font-bold text-sm mt-4 mb-2">7.1 Waiver not to impair the Rights of the Lender</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>No delay in exercising or omission to exercise, any right, power or remedy accruing to the Lender upon any default under this Agreement, or any other agreement or document shall impair any such right, power or remedy or shall be construed to be a waiver thereof or any acquiescence in such default nor shall the action or inaction of the Lender in respect of any default, affect or impair any right, power or remedy of the Lender in respect of any other default. The acceptance by the Lender of any payment which is less than the full installment shall not constitute a waiver.</span>
              </div>
            </div>

            {/* ARTICLE-8: TERMINATION */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-8: TERMINATION</h3>
            <p className="font-bold text-sm mt-4 mb-2">8.1</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>This Agreement shall continue and remain in full force and effect until all outstanding are repaid an all obligations are performed, satisfied and discharged by the Borrower and/ or Guarantor.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">8.2</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Notwithstanding anything to the contrary in this Agreement or any other documents, the Lender may terminate this agreement without assigning any reason by giving a written notice of 7 days to the Borrower. Upon such notice, all outstanding shall become payable forthwith to the Lender by the Borrower.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">8.3</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>All rights of the lender and all obligations, warranties and indemnities of the Borrower to the Lender hereunder shall survive the termination of this Agreement.</span>
              </div>
            </div>

            {/* ARTICLE-9: SET OFF AND GENERAL LIEN */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-9: SET OFF AND GENERAL LIEN</h3>
            <p className="font-bold text-sm mt-4 mb-2">9.1</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower expressly accepts that if the borrower fails to pay any monies when due or which may be declared due prior to the date when it would otherwise have become due or commits any other default under any agreement or document (including this agreement) with the Lender and/ or its Affiliates under which the Borrower enjoys financial / credit / other facilities, then in such event the Lender shall, without prejudice to any of its specific rights under each of the agreements and/ or documents, be absolutely entitled to exercise all or any of its rights under any such agreements or documents (including this agreement) at the sole discretion of the Lender.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">9.2</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Lender shall be entitled to set off all monies, securities, deposits and other assets and properties belonging to the Borrower in possession of the Lender, whether in or on any account of the Lender, and may appropriate the same to the settlement of the outstanding hereunder at its sole discretion of the Lender.</span>
              </div>
            </div>
            {/* 9.3 */}
            <p className="font-bold text-sm mt-4 mb-2">9.3</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The clause shall survive the termination of the Agreement.</span>
              </div>
            </div>

            {/* ARTICLE-10: EFFECTIVE DATE OF AGREEMENT */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-10: EFFECTIVE DATE OF AGREEMENT</h3>
            <p className="font-bold text-sm mt-4 mb-2">10.1 Agreement to become effective from the date of execution.</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Agreement shall have become binding on the Borrower and the Lender and from the date of execution hereof it shall be in force till all monies due and payable to the Lender under this Agreement as well as all other agreement/s document/s that may be subsistingly executed between the Borrower and the Lender are fully paid to the satisfaction of the Lender.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">10.2</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Any changes in any change in the terms and conditions including disbursement schedule, interest rates, service charges, prepayment charges etc. should be prospectively.</span>
              </div>
            </div>

            {/* ARTICLE-11: MISCELLANEOUS */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-11: MISCELLANEOUS</h3>
            <p className="font-bold text-sm mt-4 mb-2">11.1</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>(a) The Schedules attached herewith shall be deemed to be part of the Agreement as if the provisions thereof were set out herein in extension.</span>
              </div>
              <div>
                <span>(b) Any amendment(s), modification(s), revision(s) to the Agreement, Schedule(s) thereto, documents and collateral documents shall be in writing, which writing shall form an integral part of this Agreement without the need to enter into any Supplementary Agreement.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.2 Inspection, Assignment, Disclosure etc.</p>
            <div className="ml-4 space-y-2">
              <div>
                <span>(a) The Borrower shall permit inspection of all books of accounts and other records maintained by him in respect of the loan, to officers of the Lender. The Borrower shall also permit similar inspection by officers of such other companies, banks, institutions or bodies as the Lender may approve and intimate to the Borrower.</span>
              </div>
              <div>
                <span>(b) The Borrower expressly recognizes and accepts that the Lender shall in its discretion be absolutely entitled and have full power and authority without limitation/ permission of the Borrower at any time to sell, transfer, assign or securitize in whole or in part, the Loan and/ or Security Interest or any other right, title, interest or benefit of the Lender and whether by way of an absolute or partial assignment whether to one or more than one person and upon such terms and conditions as the Lender may decide, in favour of anyone or more party(ies) of the Lender's choice, banks or other financial institutions or non-financial institutions or all or any part of the Lender's rights and benefits hereunder and/ or under any Document executed in favour of the Lender (including reserving a right to the Lender to retain its power hereunder to proceed against the Borrower on behalf of the purchaser, assignee or transferee) and in that event the assignee/ beneficiary/ buyer/ transferee shall have the same rights against the Borrower as it would have had if it had been a party hereto or thereto. Any such action, sale, assignment or transfer etc. shall bind the Borrower to accept other party(ies) as creditor exclusively or as a joint creditor with the Lender, or as creditor exclusively with the right of the Lender to continue to exercise all powers hereunder on behalf of the other party. Any cost incurred by the Lender in so assigning the Lender for enforcement of its rights and recovery of amounts due shall be charged to the Borrower. The Borrower acknowledges and undertakes that upon such transfer, assignment, it shall continue to pay its dues under this Agreement to the other party.</span>
              </div>
              <div>
                <span>(c) The Lender may, in its sole discretion, without notice to the Borrower, grant/ transfer the credit of this loan or a part of the facilities with any other person by way of sub participation or otherwise with all or part of its rights, title, interests, obligations, benefits and privileges and all security and rights conferred upon or held by the Lender under the lending documents and the other transactions documents shall remain valid, effective and enforceable by the Lender on the same terms, conditions and the Borrower shall continue to discharge in full all its obligations under this Agreement and the other transactions documents. The Borrower shall not claim any privity of contract with such participant or transferee.</span>
              </div>
              <div>
                <span>(d) The Lender, as it may deem appropriate and necessary, be entitled to disclose all or any: (i) information and data relating to the Borrower; (ii) Information or data relating to the Loan, Standard Terms, Transaction Documents furnished by the Borrower in favour of the Lender; (iii) obligations assumed/ to be assumed by the Borrower in relation to the Loan under the Standard Terms, the Transaction Documents or any other securities furnished by the Borrower for any other credit facility granted by the Lender; (iv) default, if any committed by the Borrower/ s in discharge of the aforesaid obligations, to the Credit Information Bureau (India) Limited ("CIBIL") and any other agency authorized in this behalf by the RBI/ CIBIL and/ or any other agency so authorized may use and/ or process the aforesaid information and data disclosed by the Lender in any manner as deemed fit by them. CIBIL and/ or any other agency so authorized may furnish for consideration, the processed information and data or products prepared by them, to the Lender/financial institutions and other credit grantors or registered users, as may be specified by the RBI in this behalf. All information and data furnished by the Borrower/ s to the Lender from time to time shall be true and correct.\nIn case the Borrower commits a default in payment or repayment of any amounts in respect of the Loan, the Lender and/or RBI will have an unqualified right to disclose or publish the details of the default and the name of the Borrower/ s, as defaulters, in such manner and through such medium as the Lender or RBI in their absolute discretion may think fit.\nThe Borrower undertakes and authorizes the Lender, its group companies to exchange, share or part with all the information, data or documents relation to his/ her application to the Lender group companies/ Banks/ Financial Institutions/ Credit Bureau/ Agencies/ Statutory Bodies/ as may be required for use or processing of the said information/ data by such person/ s of furnishing of the processed information/ data/ products thereof to other Banks/ Financial Institutions/ Credit providers/ users registered with such persons and shall not hold the Lender/ its group companies liable for use of this information.</span>
              </div>
              <div>
                <span>(e) The Borrower authorizes the Lender to communicate with, and receive amounts due to the Borrower from its employer, directly from such employer and agrees to issue suitable instructions to its employer in this regard, as may be required by the Lender. The aforesaid authorization shall however not affect the Borrower's obligations to make repayment/ payment of the Facility and other monies in respect of the Facility.</span>
              </div>
              <div>
                <span>(f) Nothing herein shall however, entitle the Borrower to sell, transfer or assign any of its right, title, interest, benefit or obligation.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.3 Costs, Charges and Expenses</p>
            <div className="ml-4 space-y-2">
              <div>
                <span>(a) The Borrower undertakes to pay forthwith on demand to the Lender all costs and expenses (including legal costs between legal counsel and clients on a full indemnity basis) incurred and/ or to be incurred by the Lender for the preparation, execution, preservation, performance, enforcement and realization of loan and also any other instruments required in connection with the loan as provided therein.</span>
              </div>
              <div>
                <span>(b) Any and all stamp duties, legislation fees or other taxes/levies, duties, charges etc. levied by the Government or any Appropriate Authority in respect of the loan and/or any Asset and/ or in respect of the documents evidencing/ concerning the loan and/ or any penalties that may be imposed, shall be borne and paid for only by the Borrower. If the Borrower fails to pay the same, the Lender will make such payments, in which event such amounts paid by the Lender will form part of the principal amount of the loan disbursed. Such levies shall not be limited to the above charges but shall include the charges of whatsoever nature as may be imposed by the Govt., Statutory Authority or any other competent authority from time to time under either retrospectively or otherwise irrespective of closure of account of the Borrower. In case the Lender happens to pay any such tax/ levy to the Govt., as above, the Borrower will immediately on demand repay the same to the Lender and make good its loss.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.4</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Lender shall be entitled to interest on the said amount at such rate as may be specified in the Schedule. The Lender shall be entitled to debit all amounts due and payable by the Borrower under any account of the Borrower maintained with the Lender and appropriate the same to the settlement of the outstanding hereunder.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.5 Subordination of other loans.</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>All other loans/ advances/ facility(ies) obtained/ to be obtained by the Borrower from any source whatsoever except for the normal working facilities availed by the Borrower from its bankers shall be on the terms and conditions as may be agreed to by the Lender and subject to its prior approval of the Lender. In any case, such loans/ advances/ facilities raised by the Borrower shall always remain subordinate to the loan or any other loan(s)/ facility(ies) granted by the Lender.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.6 Partial Invalidity</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>If at any time any provision of this Agreement is or becomes illegal, invalid or unenforceable under the law, neither the legality, validity, enforceability of the remaining provisions under this Agreement not the legality, validity, enforceability of other provisions shall in any way be affected or impaired thereby. The parties may, in such an event amend the provisions in such reasonable manner as it achieves the intention of the parties without legality.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.7 Engagement of Specialized Agencies</p>
            <div className="ml-4 space-y-2">
              <div>
                <span>(a) The Borrower expressly recognizes and accepts that the Lender may engage services of specialized agencies to perform specific tasks assigned to them.</span>
              </div>
              <div>
                <span>(b) The Borrower hereby agrees that the provisions hereof are subject to market conditions, which in the sole opinion of the lender, may be relevant to the terms contained herein. The Borrower hereby agrees that, in the event of any material changes in market or in the national or international political or economic situation, any disbursement or in the event that the lender determines that the prevailing market conditions prior to any disbursement may not permit successful funding, the Lender shall be entitled to re-negotiate the terms on which such loan is to be granted to the Borrowers and/or terminate the current financial arrangement.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.8 Service of Notice</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Any communication/ notice/ letter/ document sent by one party to another shall be in English and delivered at the address specified hereinabove or at such address notified in writing to the other party. The communication etc. may be sent by mail, Business delivery or Email. Where sent by Email, it must be backed with Registered A.D. communication/ courier receipt for valid service. The communication etc. shall be deemed to have been received by the Borrower or by the person notified by the Borrower at the notified address when sent by mail, 3 days after the date of posting under certificate of posting, or 48 hours after dispatch by registered post; when Businessly delivered, on receipt of the same at the address of the party and when sent by fax, upon receipt of confirmation etc. sent by the Borrower to the Lender shall be effective only when received by the Lender. Any change in the address shall be duly notified to the other party within 7 days of such change.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.9 The Borrower agrees/ confirms as follows</p>
            <div className="ml-4 space-y-2">
              <div>
                <span>(a) The Lender may return the documents to either/ any of the Borrowers notwithstanding any contrary advice/ intimation from either/ any of the Borrowers at a later date;</span>
              </div>
              <div>
                <span>(b) The Lender is not obliged to return any documents which have been handed over to the Lender for any purpose whatsoever until and unless the loan and all the amounts in respect thereof have been paid off in full to the satisfaction of the Lender.</span>
              </div>
              <div>
                <span>(c) That the Borrower has read and understood this agreement and in the event that the Borrower is illiterate and/ or cannot read the English language, the terms and conditions of this agreement have been read over, translated and explained in detail in the vernacular language to the borrower.</span>
              </div>
              <div>
                <span>(d) That the Sanction Letter forms an integral part of this Agreement and the terms and conditions thereof, unless contrary to the provisions of this Agreement, shall be binding on the Borrower.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.10 Entire agreement</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Unless otherwise specified / agreed between the parties, save and except the documents so executed between the parties hereto made in writing prior to or concurrently herewith, this Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior discussions, negotiations and agreements between them.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.11 Severability</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>If any provision of this agreement or the application thereof to any person or circumstance shall be invalid or unenforceable to any extent, the remainder of the Agreement and the application of such provisions to persons and circumstances other than those as to which it is held invalid or unenforceable shall not be effected thereby, and other parts of this Agreement shall be valid and enforceable to the fullest extent permitted by the applicable law. Any invalid or unenforceable provision of this agreement shall be replaced with a provision which is valid and enforceable and most nearly reflects the original intent of the unenforceable provision.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.12 <span className="underline">Independent Rights</span></p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Each of the parties under this agreement are independent, cumulative and without prejudice to ask other rights available to them, and the exercise of any such rights shall not prejudice or constitute waiver of any other right of the party, whether under this Agreement.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.13 Further Assurances</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>The Borrower assures the Lender that it shall execute, sign, seal and deliver all documents, paper, acknowledgments and representations as may be required at any time during the tenure of this Agreement and thereafter with a view to more fully and effectively securing the amounts due and payable or to become by the Borrower to the Lender in terms of the Agreement.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.14 Time</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>Time shall be the essence of the contract, in relation to repayment of the amounts by the Borrower.</span>
              </div>
            </div>
            <p className="font-bold text-sm mt-4 mb-2">11.15 Variation</p>
            <div className="ml-4 space-y-1">
              <div>
                <span>No variation of this Agreement or the Schedules and Annexures hereto shall be effective unless reduced to writing and signed by or on behalf of duly authorized persons of each of the Parties to the Agreement.</span>
              </div>
            </div>

            {/* ARTICLE-12: Grievance Redressal */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-12: Grievance Redressal</h3>
            <p className="font-bold text-sm mt-4 mb-2">12.1 Grievance Redressal-Matrix</p>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold">Level 1</span><br />
                <span>The customer may post his/ her complaint to the branch office or write to us under 'Customer Care' section of our website, i.e., www.techaviom.in or customercare@techaviom.in</span>
              </div>
              <div>
                <span className="font-bold">Level 2</span><br />
                <span>If the customer is not satisfied with the resolution provided by the Customer Care, he/she may post their complaint to The Grievance Redressal Officer at HR@techaviom.in.</span>
              </div>
              <div>
                <span className="font-bold">Level 3</span><br />
                <span>If the customer is not satisfied with the resolution provided by the Grievance Redressal Officer, he/she may post their complaint to Compliance/nodal officer at pradeep.mandal@techaviom.in</span>
              </div>
              <div>
                <span className="font-bold">Level 4</span><br />
                <span>If the customer is not satisfied with the resolution provided by the Compliance/nodal officer, he/she may post their complaint to Ombudsman at amarn@techaviom.in<br />Alternatively, the customer may write to The Grievance Redressal Officer at -</span>
              </div>

              {/* Level 5 and NBFC Ombudsman */}
              <div className="mt-4">
                <span className="font-bold">Level 5</span><br />
                <span>In case of non-addressal of the complaint to the customer's satisfaction, within a reasonable period from the above quarters, the customer may approach<br />
                <span className="font-bold">Reserve Bank of India</span> at the address given below:</span>
                <div className="border border-gray-400 rounded p-2 mt-2 text-xs bg-gray-50">
                  C/o Reserve Bank of India, Sansad Marg, New Delhi STD Code: 011<br />
                  Tel. No. 23715393
                </div>
                <div className="mt-2 text-xs">
                  Note: - Please mention 'Grievance Redressal' on the top of the envelope.
                </div>
              </div>

              {/* 12.2 NBFC Ombudsman Clause */}
              <div className="mt-4">
                <span className="font-bold">12.2</span> In case, for the NBFC related complaints the Customer is not satisfied with the response or the resolution provided to it or the Complaint is still not resolved within the period of 21 (Twenty-One) working days from the date of the Complaint, the Customer may appeal to NBFC Ombudsman at:
                <div className="border border-gray-400 rounded p-2 mt-2 text-xs bg-gray-50">
                  <div className="font-bold text-center">Address of NBFC Ombudsman</div>
                  C/o Reserve Bank of India Sansad Marg, New Delhi - 110001 STD Code: 011, Tel. No.23724856 Fax No. 23725218 - 19 Email: nbfconewdelhi@rbi.org.in
                </div>
              </div>
            </div>

            {/* ARTICLE-13: ARBITRATION */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-13: ARBITRATION</h3>
            <div className="ml-4 space-y-2">
              <div>
                <span className="font-bold">13.1</span> Any dispute in connection with the interpretation, performance, termination of this agreement, and/or the documents, or otherwise in connection with this agreement, shall be referred for Arbitration under the Arbitration and Conciliation Act, 1996 (as amended up to date) or in re-enactment thereof, before a sole Arbitrator to be appointed by the Lender.
              </div>
              <div>
                <span className="font-bold">13.2</span> The Arbitration proceedings shall be conducted at Delhi in English language.
              </div>
              <div>
                <span className="font-bold">13.3</span> The Arbitral award shall be final and binding on the parties and enforceable in accordance with its terms. The Arbitrator shall state reasons for their findings in writing. The parties agreed to be bound thereby and act accordingly.
              </div>
            </div>

            {/* ARTICLE-14: ACCEPTANCE */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-14: ACCEPTANCE</h3>
            <div className="ml-4 space-y-2">
              <div><span className="font-bold">14.1</span> The Borrower has read the entire Agreement including the details given in the Schedules, which have been filled in the presence of the Borrower.</div>
              <div><span className="font-bold">14.2</span> The Borrower hereby expressly and irrevocably agrees to be bound by all conditions including the details in the Schedule.</div>
              <div><span className="font-bold">14.3</span> The aforementioned Agreement and other documents have been explained in the language known to the Borrower by one of the relative/ friend of the Borrower and the Borrower has understood the entire meaning of the various clauses.</div>
              <div><span className="font-bold">14.4</span> The Borrower is aware that the Lender shall agree to become a party to this Agreement only after satisfying itself with regard to all condition and details filled by the Borrower in the application for the agreement in consonance with the Lender's policy.</div>
              <div><span className="font-bold">14.5</span> The Borrower agrees that this Agreement shall be deemed to commence and legally binding on the date when the Authorized Office of the Lender signs this Agreement at the city where the branch office of the Lender is situated. It shall be in force till all the monies due and payable to the Lender under this Agreement as well as all other Agreements that may be subsisting /executed between the Borrower and Lender are fully paid.</div>
            </div>

            {/* ARTICLE-15: PENAL CHARGES */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE-15: PENAL CHARGES</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">(i) Penal charges, if any, in case of delayed payment</td>
                    <td className="border px-3 py-2">Rs.200 Per EMI</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">(ii) Other penal charges, if any</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">(iii) Foreclosure charges, if applicable</td>
                    <td className="border px-3 py-2">5% + Applicable Tax</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">(iv) Charges for switching of loans from floating to fixed rate and vice versa</td>
                    <td className="border px-3 py-2">NA</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">(v) Any other charges (please specify)</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">C Pre-closure Statement/request</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">D Changes in Terms of Loan</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">E Document Retrieval</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">F Schedule and Statement of Accounts</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">G Duplicate NOC/No dues</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">H Charges for List of accounts</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">I Loan Account Maintenance Charges (AMC)</td>
                    <td className="border px-3 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ARTICLE-16: KFS */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 tracking-wide text-center">ARTICLE 16: KFS</h3>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <tbody>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">Nature of Facility</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">Type of Interest Rate</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">Processing Fees</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">Annual Percentage Rate (APR) %</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">Processing Fees and other Charges</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-4 font-semibold">List of Documents Required</td>
                    <td className="border px-3 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ARTICLE-17: JURISDICTION */}
            <h3 className="text-sm md:text-base font-bold uppercase mt-6 mb-3 ml-4 mr-4 tracking-wide text-center">ARTICLE-17: JURISDICTION</h3>
            <div className="text-xs md:text-sm text-center mb-8">
              <span>
                Subject to the provisions of Article-12 above, if the cause of action arises anywhere in the country, it is specifically agreed between the parties that in respect of any suit pertaining to any matter, claims or disputes arising out of or in any way relating to this Agreement, the courts at Delhi alone shall have exclusive jurisdiction.
              </span>
            </div>
          </div>

          {/* SCHEDULE A */}
          <h3 className="text-sm md:text-base font-bold uppercase mt-10 mb-3 tracking-wide text-center ml-4 mr-4">SCHEDULE A</h3>
          <div className="overflow-x-auto mb-8 ml-4 mr-4">
            <table className="min-w-full border border-gray-300 text-xs md:text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2 w-16">Item No.</th>
                  <th className="border px-3 py-2">Particulars</th>
                  <th className="border px-3 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2"></td>
                  <td className="border px-3 py-2 font-semibold">Place of Execution of Agreement</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">I.</td>
                  <td className="border px-3 py-2 font-semibold">Date of Execution of Agreement</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">II.</td>
                  <td className="border px-3 py-2 font-semibold">Address of the concerned Branch (TECHAVIOM FINANCE PRIVATE LIMITED)</td>
                  <td className="border px-3 py-2">TECHAVIOM FINANCE PRIVATE LIMITED</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2" rowSpan={2}>III.</td>
                  <td className="border px-3 py-2 font-semibold">Name and Address of Borrower/s</td>
                  <td className="border px-3 py-2 align-top" rowSpan={2}>
                    <div className="mb-2"><span className="font-bold">1) Name:</span><br />Address 1:<br />Address 2:<br />Address 3:<br />City: <span className="ml-8">Pin:</span></div>
                    <div><span className="font-bold">2) Name:</span><br />Address 1:<br />Address 2:<br />Address 3:<br />City: <span className="ml-8">Pin:</span></div>
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 font-semibold"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">IV.</td>
                  <td className="border px-3 py-2 font-semibold">Loan amount (Amount in numbers and words)</td>
                  <td className="border px-3 py-2">
                    Number: Rs. <span className="inline-block w-40 border-b border-gray-400"></span><br />
                    Words:<br />
                    <span className="inline-block w-full border-b border-gray-400 mb-1"></span><br />
                    <span className="inline-block w-full border-b border-gray-400 mb-1"></span><br />
                    <span className="inline-block w-full border-b border-gray-400 mb-1"></span><br />
                    <span className="inline-block w-full border-b border-gray-400 mb-1"></span>
                    <span className="font-bold">Only)</span>
                  </td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">V.</td>
                  <td className="border px-3 py-2 font-semibold">Purpose of the Loan</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">VI.</td>
                  <td className="border px-3 py-2 font-semibold">Rate of Interest (Please tick whichever is applicable)</td>
                  <td className="border px-3 py-2">Fixed Interest Rate as per Schedule B</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">VII.</td>
                  <td className="border px-3 py-2 font-semibold">Annual Maintenance Charge (As referred in Article 2.8)</td>
                  <td className="border px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-3 py-2" rowSpan={2}>VII.</td>
                  <td className="border px-3 py-2 font-semibold">Cheque Dishonor Charges</td>
                  <td className="border px-3 py-2">Rs. 400/- plus Taxes per instrument per instance</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2 font-semibold">Swap Charges (for replacement of Post Dated Cheques)</td>
                  <td className="border px-3 py-2">Rs. 750/- plus Taxes per instance</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SCHEDULE B */}
          <h3 className="text-sm md:text-base font-bold uppercase  ml-4 mr-4 mt-10 mb-3 tracking-wide text-center">SCHEDULE B</h3>
          <div className="mb-6 text-center font-semibold text-xs  ml-4 mr-4 md:text-sm">TERMS AND CONDITIONS APPLICABLE TO THE LOAN WITH FIXED INTEREST RATE</div>
          <div className="mb-4 text-xs md:text-sm ml-4 mr-4">
            <div className="mb-2"><span className="font-bold">(A) Computation of Interest:</span><br />The Fixed Interest Rate shall be <span className="inline-block w-24 border-b border-gray-400"></span> % p.a. The same shall be computed on a Monthly Rate basis. The same shall be payable on a monthly basis.</div>
            <div className="mb-2"><span className="font-bold">(B) Repayment of Loan and Payment of Interest:</span><br />Loan and Interest shall be payable by the Borrower in the following Monthly Installments.</div>
          </div>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-xs md:text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border  px-3 py-2">EMI (Equated Monthly Installment) Rs.</th>
                  <th className="border px-3 py-2">No. of EMIs</th>
                  <th className="border px-3 py-2">Period<br />From</th>
                  <th className="border px-3 py-2">Period<br />To</th>
                  <th className="border px-3 py-2">Payable monthly on or before</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-6"></td>
                  <td className="border px-3 py-6"></td>
                  <td className="border px-3 py-6"></td>
                  <td className="border px-3 py-6"></td>
                  <td className="border px-3 py-6"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-8 mt-8">
            <div className="font-bold text-xs md:text-sm mb-2">IN WITNESS WHEREOF the parties hereto have signed this agreement on the day, month and year first above written.</div>
            <div className="flex flex-row justify-between mb-8">
              <div className="w-1/2">
                <div className="font-semibold text-xs md:text-sm mb-1">Name of Borrower</div>
                <div className="border-b border-gray-400 w-11/12 mb-4"></div>
                <div className="border-b border-gray-400 w-11/12 mb-4"></div>
              </div>
              <div className="w-1/2">
                <div className="font-semibold text-xs md:text-sm mb-1">Signature of the Borrowers</div>
                <div className="border-b border-gray-400 w-11/12 mb-4"></div>
                <div className="border-b border-gray-400 w-11/12 mb-4"></div>
              </div>
            </div>

            <div className="mb-6 text-xs md:text-sm">
              <div className="mb-2">Signed and Delivered by the within named:</div>
              <div className="mb-4">
                <span className="font-bold">TECHAVIOM FINANCE PRIVATE LIMITED</span><br />
                The hand of Mr./Ms.<span className="inline-block w-32 border-b border-gray-400"></span> <span className="inline-block w-64 border-b border-gray-400 ml-4"></span><br />
                <span className="text-xs">It's Authorized Signatory</span>
              </div>
              <div className="mb-4">
                <span className="font-bold">NAMAN FINLEASE PRIVATE LIMITED</span><br />
                The hand of Mr./Ms.<span className="inline-block w-32 border-b border-gray-400"></span> <span className="inline-block w-64 border-b border-gray-400 ml-4"></span><br />
                <span className="text-xs">It's Authorized Signatory</span>
              </div>
              <div className="mb-4">
                <span className="font-bold">RICHCREDIT FINANCE PRIVATE LIMITED,</span><br />
                The hand of Mr./Ms.<span className="inline-block w-32 border-b border-gray-400"></span> <span className="inline-block w-64 border-b border-gray-400 ml-4"></span><br />
                <span className="text-xs">It's Authorized Signatory</span>
              </div>
            </div>
          </div>
            {/* RECEIPT SECTION */}
        <div className="my-12 border border-gray-400 rounded bg-white p-8 max-w-2xl mx-auto shadow-md">
          <div className="flex justify-center mb-6">
            <span className="bg-black text-white px-6 py-2 rounded-full font-bold text-lg tracking-widest">RECEIPT</span>
          </div>
          <div className="flex justify-end mb-2 text-sm">
            <div className="mr-8">Date: <span className="inline-block w-32 border-b border-gray-400 align-bottom"></span></div>
            <div>Place: <span className="inline-block w-32 border-b border-gray-400 align-bottom"></span></div>
          </div>
          <div className="text-xs leading-relaxed mb-8">
            Received on the day and year written above from <span className="font-semibold">TECHAVIOM FINANCE PRIVATE LIMITED AND NAMAN FINLEASE PRIVATE LIMITED AND RICHCREDIT FINANCE PRIVATE LIMITED</span>, the sum of Rs.<span className="inline-block w-40 border-b border-gray-400"></span> /- (Rupees only) by cheque/draft no./NEFT No.<span className="inline-block w-40 border-b border-gray-400"></span> dated <span className="inline-block w-32 border-b border-gray-400"></span> drawn on <span className="inline-block w-32 border-b border-gray-400"></span> favouring
          </div>
          <div className="text-xs mb-8">[I/ We say received]</div>
          <div className="flex flex-row justify-between items-end mt-12">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg mb-8">X</span>
              <div className="border border-gray-400 p-2 text-center text-xs w-28 mb-8">
                REVENUE<br />STAMP<br />&<br />SIGNATURE
              </div>
              <span className="font-bold text-lg">X</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg mb-16">X</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg mb-16">X</span>
            </div>
          </div>
        </div>

        {/* DEMAND PROMISSORY NOTE SECTION */}
        <div className="my-12 border border-gray-400 rounded bg-white p-8 max-w-2xl mx-auto shadow-md">
          <div className="flex justify-center mb-6">
            <span className="bg-black text-white px-6 py-2 rounded-full font-bold text-lg tracking-widest">DEMAND PROMISSORY NOTE</span>
          </div>
          <div className="text-xs mb-2 font-semibold">Loan File No. <span className="inline-block w-64 border-b border-gray-400 align-bottom"></span></div>
          <div className="text-xs mb-4">FOR VALUE RECEIVED <span className="inline-block w-64 border-b border-gray-400 align-bottom"></span></div>
          <div className="text-xs mb-2">I/We)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span> ii)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span> iii)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span>
          </div>
          <div className="text-xs mb-2">iv)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span> v)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span> vi)
            <span className="inline-block w-32 border-b border-gray-400 align-bottom mx-1"></span>
          </div>
          <div className="text-xs mb-2">
            promise to pay <span className="font-semibold">TECHAVIOM FINANCE PRIVATE LIMITED AND NAMAN FINLEASE PRIVATE LIMITED</span>, or its assigns or its successors ON DEMAND, a sum of Rs(Rupees
            <span className="inline-block w-40 border-b border-gray-400 align-bottom"></span>)
          </div>
          <div className="border-b border-gray-400 my-2"></div>
          <div className="text-xs mb-2">
            together with interest at the compounding rate of <span className="inline-block w-8 border-b border-gray-400 align-bottom"></span>% per annum with monthly rests or such other rates which TECHAVIOM FINANCE PRIVATE LIMITED AND NAMAN FINLEASE PRIVATE LIMITED AND RICHCREDIT FINANCE PRIVATE LIMITED, may specify from time to time with reference to the then prevailing Interest Rate.
          </div>
          <div className="text-xs mb-2">
            The undersigned hereby unconditionally waive demand, presentment and protest of this note.
          </div>
          <div className="text-xs mb-2">
            Signed and sealed under penalty of perjury this <span className="inline-block w-32 border-b border-gray-400 align-bottom"></span> day of <span className="inline-block w-32 border-b border-gray-400 align-bottom"></span> 20<span className="inline-block w-8 border-b border-gray-400 align-bottom"></span>.
          </div>
          <div className="text-xs mb-8">Revenue Stamp & Signature of applicant/ s</div>
          <div className="flex flex-row justify-between items-end mt-12">
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg mb-8">X</span>
              <div className="border border-gray-400 p-2 text-center text-xs w-28 mb-8">
                REVENUE<br />STAMP<br />&<br />SIGNATURE
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg mb-16">X</span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <div className="flex flex-col items-center">
              <div className="border-t border-gray-400 w-48 mx-auto mb-1"></div>
              <span className="text-xs">Signature of the borrower<br/>Name:</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-t border-gray-400 w-48 mx-auto mb-1"></div>
              <span className="text-xs">Signature of the co-borrower<br/>Name:</span>
            </div>
          </div>
        </div>
        </div>

      
          
        {/* Footer Image */}
        <img src="/sanctionfooter.webp" alt="Sanction Letter Footer" className="w-full h-auto object-cover" />
      </div>
    // </div>
  );
};

export default SanctionLatter;

