import React, { useState } from "react";

const KeyFactsStatement = () => {
  const bankAccNumber = "1234567890";
  const loanAmount = "100000";
  const loanTerm = "100 Days";
  const interestRate = "20% (Flat)";
  const processingFees = "10% of the Sanction Amount";
  const insuranceCharges = "NA";
  const valuationFees = "NA";
  const otherCharges = "NA";
  const apr = "20%";
  const contingentCharges = "NA";
  const penalCharges = "2% per month over and above the rate of Loan.";
  const foreclosureCharges = "As per Loan Agreement";
  const entityName = "tam";
  const sanctionedAmount = "";
  const applicantName = "prem";
  const coApplicantName = "mishra";
  const borrowerSignature = "Borrower's Signature";
  const lenderSignature = "Lender's Signature";
 
  // Schedule A variables
  const placeOfExecution = "Delhi";
  const dateOfExecution = "01/07/2024";
  const branchAddress = "1/50, 2nd Floor, Ganga Apartment, Lalita Park, Laxmi Nagar, Delhi-110092";
  const borrower1 = {
    name: "Amit Kumar",
    address1: "123 Main St",
    address2: "Near Park",
    address3: "Block A",
    city: "Delhi",
    pin: "110092"
  };
  const borrower2 = {
    name: "Sunita Devi",
    address1: "456 Market Rd",
    address2: "Opp. School",
    address3: "Block B",
    city: "Delhi",
    pin: "110093"
  };
  const loanAmountNumber = "1,00,000";
  const loanAmountWords = "One Lakh Rupees Only";
  const loanPurpose = "Business Expansion";
  const interestType = "Fixed Interest Rate as per Schedule B";
  const charges = "As per loan Agreement";

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-200 my-10 print:shadow-none print:border-none">
      <img
        src="/sanctionheader.webp"
        alt="Sanction Letter Header"
        className="w-full h-auto object-cover"
      />

      <h2 className="text-center text-lg md:text-xl font-semibold underline mb-2">
        Key Facts Statement
      </h2>
      <div className="text-center font-medium mb-4">
        Part 1 (Interest rate and fees/charges)
      </div>
      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 w-1/2">
              1 Loan Account No.
            </td>
            <td className="border border-gray-400 px-2 py-1">
              {bankAccNumber}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">2 Product Name</td>
            <td className="border border-gray-400 px-2 py-1">
              Mini Business Loan (100 Days)
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              3 Name of the Lender
            </td>
            <td className="border border-gray-400 px-2 py-1">
              Rich Credit Finance Private Limited
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              4 Name of the Entity(Refurds as coustomer)
            </td>
            <td className="border border-gray-400 px-2 py-1">{entityName}</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              5 Sanctioned Loan amount (in Rupees)
            </td>
            <td className="border border-gray-400 px-2 py-1">
              {sanctionedAmount}
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              6 Disbursal schedule
            </td>
            <td className="border border-gray-400 px-2 py-1">
              Upfront Disbursement (After Deducting 10% Processing Fees + GST)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              7 Loan term (days/weekly)
            </td>
            <td className="border border-gray-400 px-2 py-1">100 Days</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              8 Interest rate (%) and type (fixed or floating or hybrid)
            </td>
            <td className="border border-gray-400 px-2 py-1">
              20%(fixed)
              <br />
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              9 Additional Information in case of Floating rate of interest
            </td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border border-gray-400 text-sm mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-2 py-1">Fee/ Charges</th>
            <th className="border border-gray-400 px-2 py-1">
              One-time/ Recurring
            </th>
            <th className="border border-gray-400 px-2 py-1">
              Amount (in Rupees) or Percentage (%) as applicable
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              i. Processing fees
            </td>
            <td className="border border-gray-400 px-2 py-1">One Time</td>
            <td className="border border-gray-400 px-2 py-1">
              10% of the Sanction Amount + GST
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              ii. Insurance charges
            </td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">Nil</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              iii. Valuation fees
            </td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">Nil</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              iv. Any other (please specify)
            </td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              9 Annual Percentage Rate (APR)
            </td>
            <td className="border border-gray-400 px-2 py-1">....%</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              10 Details of Contingent Charges (in Rupees or %, as applicable)
            </td>
            <td className="border border-gray-400 px-2 py-1"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">
              i. Penal charges, in case of delayed payment
            </td>
            <td className="border border-gray-400 px-2 py-1">
              2% per month over and above the rate of Loan.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1 pl-6">
              ii. Other penal charges
            </td>
            <td className="border border-gray-400 px-2 py-1">
              As per Loan Agreement
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">
              iii. Foreclosure charges
            </td>
            <td className="border border-gray-400 px-2 py-1">
              As per Loan Agreement
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1 pl-6">
              iv. Charges for switching of loans from floating to fixed rate and
              vice versa
            </td>
            <td className="border border-gray-400 px-2 py-1">NA</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 pl-6">
              v. Other charges :
            </td>
            <td className="border border-gray-400 px-2 py-1">
              As per Loan Agreement
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-center font-medium mb-4 mt-8">
        Part 2 (Other qualitative information)
      </div>
      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1 w-2/3">
              1 Clause of Loan agreement relating to engagement of recovery
              agents
            </td>
            <td className="border border-gray-400 px-2 py-1">Clause 6</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              2 Clause of Loan agreement which details grievance redressal
              mechanism
            </td>
            <td className="border border-gray-400 px-2 py-1">Clause 12</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-400 px-2 py-1">
              3 Phone number and email id of the nodal grievance redressal
              officer
            </td>
            <td className="border border-gray-400 px-2 py-1">
              grievance.redressal@richcredit.in,
              <br />
              +91 99999 99371
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-2 py-1">
              4 Whether the loan is, or in future maybe, subject to transfer to
              other REs or securitization.
            </td>
            <td className="border border-gray-400 px-2 py-1">Yes</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between mt-10 text-xs text-gray-500 w-full">
        <div className="flex flex-col items-center w-1/2">
          <span className="mb-1">Applicant/Borrower</span>
          <div className="border-t border-gray-400 w-32 mb-1"></div>
          <span>{applicantName || "Signature"}</span>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <span className="mb-1">Co-Applicant/Co-Borrower</span>
          <div className="border-t border-gray-400 w-32 mb-1"></div>
          <span>{coApplicantName || "Signature"}</span>
        </div>
      </div>

      <LoanAgreement />
    </div>
  );
};

const LoanAgreement = () => {
  const placeOfExecution = "Delhi";
  const dateOfExecution = "01/07/2024";
  const branchAddress = "1/50, 2nd Floor, Ganga Apartment, Lalita Park, Laxmi Nagar, Delhi-110092";
  const borrower1 = {
    name: "Amit Kumar",
    address1: "123 Main St",
    address2: "Near Park",
    address3: "Block A",
    city: "Delhi",
    pin: "110092"
  };
  const borrower2 = {
    name: "Sunita Devi",
    address1: "456 Market Rd",
    address2: "Opp. School",
    address3: "Block B",
    city: "Delhi",
    pin: "110093"
  };
  const loanAmountNumber = "1,00,000";
  const loanAmountWords = "One Lakh Rupees Only";
  const loanPurpose = "Business Expansion";
  const interestType = "Fixed Interest Rate as per Schedule B";
  const charges = "As per loan Agreement";
  const fixedInterestRate = "20";
  const noOfEmis = "14";
  const periodFrom = "01/07/2024";
  const periodTo = "01/10/2024";
  const payableOn = "Every Monday";
  const borrowerName = "Amit Kumar";
  const borrowerSignature = "Amit Kumar";
  const lenderSignature = "Rohit Sharma";
  const authorisedSignatory = "Rohit Sharma";

  // Vernacular Declaration variables
  const vernacularName = "Amit Kumar";
  const vernacularAge = "35";
  const vernacularParentName = "Rajesh Kumar";
  const vernacularAddress = "123 Main St, Near Park, Block A, Delhi-110092";
  const vernacularPlace = "Delhi";
  const vernacularDate = "01/07/2024";
  const vernacularDay = "1st";
  const vernacularMonth = "July";
  const vernacularYear = "24";
  const borrowerThumbImpression = ""; // If available
  const borrowerAadhaar = "XXXX-XXXX-1234";
  const borrowerPAN = "ABCDE1234F";

  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          LOAN AGREEMENT
        </h1>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          THIS LOAN AGREEMENT (hereinafter referred to as the "Agreement") is
          made as of the Effective Date (defined hereinafter) at the place and
          on the date stated in the Schedule A ("Execution Date")
        </p>

        <div className="text-center font-semibold">BETWEEN</div>

        <p className="text-justify">
          <strong>RICHCREDIT FINANCE PRIVATE LIMITED</strong>, a company
          incorporated under the Companies Act, 1956, having its registered
          office at 1/50, 2nd Floor, Ganga Apartment, Lalita Park, Laxmi Nagar,
          Delhi-110092, CIN - U65909DL1996PTC319357, acting as the Lender/Funder
          (hereinafter referred to as the "Lender" or "Funder" which expression
          shall, unless it be repugnant to the meaning or context thereof,
          include its successors in title and assigns) of the FIRST PART.
        </p>

        <div className="text-center font-semibold">AND</div>

        <p className="text-justify">
          The Borrower(s) whose name(s) and address(es) is/are stated in
          Schedule A, (hereinafter referred to / collectively referred to as
          "the Borrower(s)" which expression shall, unless it be repugnant to
          the meaning or context thereof, be deemed to mean and include his/her
          legal heirs, executors and administrators of the OTHER PART;
        </p>

        <p>
          The both the parties shall be hereinafter individually referred to as
          "Party" and collectively as "Parties," as the context may require.
        </p>

        <div className="font-semibold">WHEREAS:</div>

        <div className="pl-4 space-y-3">
          <p>
            a. Relying upon the representations made and information provided by
            the Borrower(s) and Lender has agreed to grant the Loan subject to
            terms and conditions contained in this Agreement and Schedules
            attached hereto and the Interest which is acceptable and binding on
            the Parties to this Agreement. The Loan shall be disbursed in the
            manner stated hereinafter.
          </p>

          <p>
            b. The Borrower(s) acknowledge(s) and accept(s) that notwithstanding
            anything to the contrary contained in this Agreement, the Loan can
            be recalled, and the entire outstanding amount (as defined
            hereinafter) would be repayable on demand at the sole discretion of
            LENDER.
          </p>

          <p>
            c. The Parties hereto are desirous of recording the terms and
            conditions in relation to the Loan to be granted by the LENDER to
            the Borrower(s) and certain other matters related thereto in the
            manner hereinafter contained.
          </p>
        </div>

        <div className="text-center font-semibold mt-8">
          NOW, THEREFORE, THIS AGREEMENT WITNESSETH AND MUTUALLY AGREED,
          DECLARED AND CONFIRMED BETWEEN THE PARTIES HERETO AS FOLLOWS:
        </div>

        <div className="space-y-8 mt-8">
          <section>
            <h2 className="text-lg font-semibold mb-4">1. DEFINITIONS</h2>

            <p className="mb-4">
              <strong>1.1</strong> In this Agreement, unless the subject or
              context otherwise requires, the following words and expressions
              shall have the following meanings:
            </p>

            <div className="space-y-3 pl-4">
              <p>
                a. "Agreement" means and includes this Agreement and the
                attachment/s annexed hereto. Agreement shall also include
                applications, supplementary agreements, modifications,
                alterations, addendum attachments and schedules subsequently
                executed during the tenure of this Agreement.
              </p>

              <p>
                b. "Support agent" refers to Techaviom Finance Private Limited
                or such other entity which may be empowered by the lender for
                sourcing of the loan files and whose assistance may be taken for
                the collection of loans on behalf of the Lender.
              </p>

              <p>
                c. "Annual Percentage Rate (APR)" means the annual cost of
                credit to the borrower which includes interest rate and all
                other charges associated with the credit facility.
              </p>

              <p>
                d. "Amortization" means repayment of the loan and interest
                thereon by way of EMIs or in any other manner determined by the
                Lender and includes repayment of other dues, charges etc. under
                this Agreement. The mode of amortization is more specifically
                described and set out in the Schedule - A.
              </p>

              <p>
                e. "Borrower" means and includes the person(s) named in Schedule
                A, to whom the Lender has agreed to grant the loan and who will
                receive the loan pursuant to this Agreement. The term "Borrower"
                shall wherever the context so requires mean and be construed as
                "Borrowers". Moreover, the term "Borrower" which expression
                shall unless the context otherwise requires, include
                his/her/their heirs, representatives, executors, administrators
                and permitted assignees.
              </p>

              <p>
                f. "Default Interest Rate" means the rate as stated in the
                Schedule or as maybe amended by the LENDER from time to time at
                which the LENDER shall compute and apply interest on all amounts
                not paid when due for payment or reimbursement by the Borrower
                to the LENDER.
              </p>

              <p>
                g. "Disbursement Request Form" is a Letter through which the
                Borrower requests the Lender to release part/s or whole payment
                of the loan amount. This form will form a part of the agreement
                and shall be binding upon the Borrower/s.
              </p>

              <p>
                h. "Effective Date" means the date on which the first
                disbursement is availed by the Borrower out of the total loan
                sanctioned.
              </p>

              <p>
                i. "Equated Weekly Installment" (EMI) means the amount of weekly
                payment necessary to amortize the loan with interest within such
                period as may be determined by the Lender from time to time. The
                term "Equated weekly Installment" shall not mean or be construed
                as equal installments where the rate of interest to be levied is
                agreed to be.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              2. LOAN, INTEREST & AMORTISATION
            </h2>

            <div className="space-y-4">
              <p>
                <strong>2.1</strong> Pursuant to the Borrower's application and
                based on their representations, warranties, and covenants, the
                Lender agrees to grant, and the Borrower agrees to accept, a
                business loan on the terms set forth in this agreement and the
                accompanying schedule. The loan shall be disbursed in a single
                installment at the discretion of the Lender, depending on the
                Borrower's requirements. Disbursement will be made through bank
                transfer, crossed cheque marked "Account Payee Only," or via
                NEFT/RTGS. Any collection charges shall be borne by the
                Borrower.
              </p>

              <p>
                <strong>2.2</strong> The applicable rate of interest is
                specified in the Schedule attached to this agreement. The
                Borrower shall reimburse the Lender for any taxes paid or
                payable to the government on interest. Interest shall begin to
                accrue from the date of disbursement and will be computed on the
                basis of a 365-day year with weekly rests. The Equated Monthly
                Installment (EMI) includes both principal and interest.
              </p>

              <p>
                <strong>2.3</strong> The Borrower shall repay the loan as per
                the amortization schedule in the agreement. If disbursement is
                delayed or advanced, EMI shall begin the month following the
                disbursement, with the first payment typically due on the 10th.
                The Lender reserves the right to review and reschedule the
                repayment terms, including the tenure and EMI amount, based on
                its sole discretion. The Borrower shall be bound by any such
                revisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              3. PRE-CONDITIONS TO DISBURSEMENT OF THE LOAN
            </h2>

            <p className="mb-4">
              <strong>3.1</strong> The conditions precedent to the disbursement
              of the loan shall be as follows:
            </p>

            <div className="space-y-3 pl-4">
              <p>
                a. No Event of Default, as defined under Article 6, has occurred
                or is continuing.
              </p>
              <p>
                b. No extraordinary or unforeseen circumstances exist that would
                render the Borrower's performance under this Agreement
                impossible or impracticable.
              </p>
              <p>
                c. The Borrower has executed and delivered a money bond or
                demand promissory note in favour of the Lender, if so required.
              </p>
              <p>
                d. The Borrower has provided satisfactory evidence that there
                are no pending or threatened legal proceedings, investigations,
                or actions which may materially affect the Borrower's financial
                condition or the validity and enforceability of any transaction
                documents executed in connection with this Agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              4. GENERAL COVENANTS OF THE BORROWER
            </h2>

            <div className="space-y-4">
              <h3 className="font-semibold">4.1 Affirmative Covenants</h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Borrower shall utilize the loan strictly for the
                  purposes specified in Schedule A and as stated in the loan
                  application. Any change in the Borrower's employment,
                  business, or profession must be communicated to the Lender
                  within seven days. Additionally, the Borrower must notify the
                  Lender in writing of any material circumstances that may
                  impact the Borrower's ability to repay the loan.
                </p>

                <p>
                  b. The Borrower shall provide, upon request, all relevant
                  information and documents concerning their financial
                  condition. The Lender is authorized to conduct credit
                  inquiries, disclose the Borrower's loan-related information to
                  regulatory authorities, credit bureaus, or other third
                  parties, and inspect the Borrower's financial records. The
                  Borrower agrees to perform any actions or execute any
                  documents reasonably required by the Lender in relation to the
                  Agreement.
                </p>

                <p>
                  c. In the event of default, the Lender reserves the right to
                  disclose or publish details of such default in any form it
                  deems fit. The Borrower also confirms that they are not
                  involved in any material litigation or aware of any facts that
                  could give rise to such proceedings.
                </p>
              </div>

              <h3 className="font-semibold mt-6">4.2 Negative Covenants</h3>

              <p className="pl-4">
                Without the prior written consent of the Lender, the Borrower
                shall not obtain or repay any other loan or credit facility, act
                as guarantor or surety for others, or close any bank account
                used for repayment under this Agreement. If the Borrower plans
                to leave India for employment, business, or long-term stay, they
                must provide prior written notice to the Lender and settle the
                loan as directed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              5. BORROWER'S WARRANTIES AND INDEMNITY
            </h2>

            <div className="space-y-4">
              <h3 className="font-semibold">
                5.1 Borrower's Warranties and Undertakings
              </h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Borrower confirms that all information provided in the
                  loan application and any related documents is accurate and
                  genuine, and the Lender may verify originals at any time.
                </p>

                <p>
                  b. The Borrower acknowledges compliance with the Lender's Know
                  Your Customer (KYC) policy, confirming that all personal and
                  financial information disclosed is true, correct, and
                  complete.
                </p>

                <p>
                  c. The Borrower agrees to disclose all relevant facts about
                  their assets and confirms that all public dues, including
                  taxes, are fully paid with no outstanding arrears.
                </p>

                <p>
                  d. The Borrower commits to staying informed of the Lender's
                  policies and acknowledges that dishonoring or stopping cheque
                  payments is both a civil and criminal offense. Furthermore,
                  the Borrower agrees to promptly reimburse all payments, fees,
                  costs, duties, or charges incurred by the Lender on their
                  behalf.
                </p>
              </div>

              <p>
                <strong>5.2</strong> The Borrower undertakes to indemnify and
                hold the Lender harmless against any losses, damages, costs, or
                claims arising from any breach of this Agreement, including
                false representations, warranties, or non-compliance with laws
                by the Borrower or their agents. The Borrower agrees to pay any
                such claims immediately upon demand, without dispute, within
                seven working days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              6. EVENTS OF DEFAULTS & REMEDIES OF THE LENDER
            </h2>

            <div className="space-y-4">
              <p>
                <strong>6.1</strong> The following shall constitute events of
                default under this Agreement:
              </p>

              <div className="space-y-3 pl-4">
                <p>
                  a. <strong>Non-Payment:</strong> Failure to pay any EMI,
                  interest, or other amounts due under this Agreement or any
                  other related agreements, when due or upon demand by the
                  Lender.
                </p>

                <p>
                  b. <strong>Covenant Breach:</strong> Failure to perform any
                  covenant, condition, or obligation under this Agreement or any
                  other agreement with the Lender, continuing for more than 30
                  days after written notice.
                </p>

                <p>
                  c. <strong>Fraudulent Documents:</strong> Submission of false
                  or fraudulent documents to obtain the loan.
                </p>

                <p>
                  d. <strong>Misleading Information:</strong> Providing
                  materially incorrect or misleading information in the loan
                  application or breaching any warranty under this Agreement.
                </p>

                <p>
                  e. <strong>Failure to Provide Information:</strong> Not
                  furnishing requested information or documents as required by
                  the Lender.
                </p>

                <p>
                  f. <strong>Dishonor of Payment Instruments:</strong> Dishonor
                  of any post-dated cheques (PDCs), irrevocable receipts (IRCs),
                  or other cheques, or instructions to stop payment or not to
                  deposit such instruments.
                </p>

                <p>
                  g. <strong>Security Issues:</strong> If any security for the
                  loan becomes invalid, ineffective, or is challenged by the
                  Borrower or any third party.
                </p>

                <p>
                  h. <strong>Marital Dispute:</strong> In cases of joint loans
                  to spouses, occurrence of divorce or marital dispute may be
                  treated as an event of default at the Lender's sole
                  discretion.
                </p>

                <p>
                  i. <strong>Inability to Pay Debts and Insolvency:</strong>{" "}
                  Reasonable grounds to believe the Borrower is unable to pay
                  debts when due, or admission of such inability, or initiation
                  of recovery or insolvency proceedings against the Borrower.
                </p>

                <p>
                  j. <strong>Employment-Related Default:</strong> If the
                  Borrower is employed and opts for any employer-provided
                  scheme, resigns, retires before superannuation, or if the
                  employer terminates the Borrower's employment for any reason.
                </p>
              </div>

              <p>
                <strong>6.2</strong> Upon the occurrence of an Event of Default,
                the Lender shall have the right to recall the entire outstanding
                loan amount, including all accrued interest, fees, costs,
                charges, and any other sums payable by the Borrower, which shall
                become immediately due and payable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">7. WAIVER</h2>

            <p>
              Any delay or failure by the Lender to exercise any right, power,
              or remedy under this Agreement or related documents shall not
              constitute a waiver or diminish such right, power, or remedy.
              Similarly, any action, inaction, or acquiescence by the Lender
              with respect to any default shall not affect its rights in
              relation to other defaults.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">8. TERMINATION</h2>

            <div className="space-y-3">
              <p>
                <strong>8.1</strong> This Agreement shall remain in full force
                and effect until all outstanding amounts are fully repaid and
                all obligations of the Borrower and/or Guarantor are duly
                performed and discharged.
              </p>

              <p>
                <strong>8.2</strong> Notwithstanding any contrary provisions in
                this Agreement or related documents, the Lender may terminate
                this Agreement at its sole discretion by providing the Borrower
                with seven (7) days' written notice, upon which all outstanding
                amounts shall become immediately payable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              9. SET OFF AND GENERAL LIEN
            </h2>

            <p>
              The Lender may set off and appropriate any monies, securities,
              deposits, or other assets of the Borrower held by the Lender, in
              any account or form, to settle any outstanding amounts under this
              Agreement. The Borrower irrevocably waives any right of set-off,
              counterclaim, deduction, withholding, or adjustment against
              payments due to the Lender.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              10. EFFECTIVE DATE OF AGREEMENT
            </h2>

            <p>
              This Agreement shall become effective and binding upon both the
              Borrower and the Lender from the date of its execution. It shall
              remain in force until all amounts due and payable by the Borrower
              under this Agreement are fully repaid to the satisfaction of the
              Lender.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">11. MISCELLANEOUS</h2>

            <div className="space-y-4">
              <h3 className="font-semibold">11.1 Schedules and Amendments</h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Schedules attached to this Agreement shall be deemed to
                  form an integral part hereof as though fully incorporated
                  herein.
                </p>

                <p>
                  b. Any amendments, modifications, or revisions to this
                  Agreement, including its Schedules or any collateral
                  documents, shall be valid only if made in writing.
                </p>
              </div>

              <h3 className="font-semibold mt-6">
                11.2 Inspection, Assignment, and Disclosure
              </h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Borrower shall permit the Lender and its authorized
                  representatives, including those of any approved third-party
                  institutions, to inspect its books of accounts and other
                  loan-related records at any reasonable time.
                </p>

                <p>
                  b. The Borrower expressly agrees that the Lender shall have
                  the absolute right, without any prior notice or consent from
                  the Borrower, to sell, transfer, assign, or securitize, wholly
                  or partially, its rights, title, and interest in the Loan and
                  any security created thereunder.
                </p>

                <p>
                  c. The Lender shall be entitled to disclose all relevant
                  information regarding the Borrower and the Loan—including
                  default data—to Credit Information Bureaus such as CIBIL and
                  other agencies authorized by the RBI.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-4">11. MISCELLANEOUS</h2>

            <div className="space-y-4">
              <h3 className="font-semibold">11.1 Schedules and Amendments</h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Schedules attached to this Agreement shall be deemed to
                  form an integral part hereof as though fully incorporated
                  herein.
                </p>

                <p>
                  b. Any amendments, modifications, or revisions to this
                  Agreement, including its Schedules or any collateral
                  documents, shall be valid only if made in writing.
                </p>
              </div>

              <h3 className="font-semibold mt-6">
                11.2 Inspection, Assignment, and Disclosure
              </h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Borrower shall permit the Lender and its authorized
                  representatives, including those of any approved third-party
                  institutions, to inspect its books of accounts and other
                  loan-related records at any reasonable time.
                </p>

                <p>
                  b. The Borrower expressly agrees that the Lender shall have
                  the absolute right, without any prior notice or consent from
                  the Borrower, to sell, transfer, assign, or securitize, wholly
                  or partially, its rights, title, and interest in the Loan and
                  any security created thereunder.
                </p>

                <p>
                  c. The Lender shall be entitled to disclose all relevant
                  information regarding the Borrower and the Loan—including
                  default data—to Credit Information Bureaus such as CIBIL and
                  other agencies authorized by the RBI.
                </p>
              </div>

              <h3 className="font-semibold mt-6">11.3 Costs and Expenses</h3>

              <div className="space-y-3 pl-4">
                <p>
                  a. The Borrower agrees to pay all costs and expenses,
                  including legal fees on a full indemnity basis, incurred by
                  the Lender in connection with the preparation, enforcement,
                  and realization of this Agreement.
                </p>

                <p>
                  b. All stamp duties, taxes, levies, penalties, or charges
                  imposed by any competent authority in connection with the Loan
                  or this Agreement shall be borne solely by the Borrower. If
                  the Lender makes such payments on the Borrower's behalf, those
                  amounts shall be treated as part of the Loan and shall accrue
                  interest accordingly.
                </p>

                <p>
                  c. The Lender shall be entitled to charge interest on the
                  aforementioned costs and charges as per the terms of this
                  Agreement.
                </p>
              </div>

              <p className="mt-4">
                <strong>11.4</strong> The Borrower authorizes the Lender to set
                off any credit balances of the Borrower against any amounts due
                under this Agreement or any other facility availed by the
                Borrower from the Lender. This right shall be unaffected by any
                circumstance and shall remain valid regardless of the closure of
                accounts.
              </p>

              <p>
                <strong>11.5</strong> All loans or credit facilities obtained or
                to be obtained by the Borrower from any source, other than
                normal working capital facilities from its bankers, shall be
                subject to the prior written approval of the Lender and shall
                remain subordinate to the Loan under this Agreement.
              </p>

              <p>
                <strong>11.6</strong> If any provision of this Agreement is held
                to be illegal, invalid, or unenforceable, such provision shall
                be severable, and the remainder of the Agreement shall continue
                in full force and effect. The parties shall endeavor to amend
                such provision to best reflect their original intent in a
                legally enforceable manner.
              </p>

              <div className="mt-4">
                <p>
                  <strong>11.7 Engagement of Specialized Agencies</strong>
                </p>
                <div className="pl-4 space-y-2">
                  <p>
                    a. The Lender may engage third-party agencies to perform
                    tasks under this Agreement.
                  </p>
                  <p>
                    b. The Borrower acknowledges that the terms of this
                    Agreement are subject to prevailing market and economic
                    conditions. The Lender reserves the right to renegotiate or
                    terminate the arrangement if such conditions materially
                    change.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                <strong>11.8</strong> All notices, communications, or documents
                shall be in English and delivered to the addresses specified
                herein or such other address notified in writing. Notices may be
                delivered by hand, registered post, courier, or email (supported
                by a physical copy sent via registered post or courier).
              </p>

              <div className="mt-4">
                <p>
                  <strong>11.9 Confirmations by the Borrower</strong>
                </p>
                <div className="pl-4 space-y-2">
                  <p>
                    a. Documents may be returned by the Lender to any of the
                    Borrowers, notwithstanding contrary instructions.
                  </p>
                  <p>
                    b. The Lender is not obliged to return any documents until
                    the Loan is fully repaid.
                  </p>
                  <p>
                    c. If the Borrower is illiterate or unable to read English,
                    this Agreement has been explained in a vernacular language
                    understood by the Borrower.
                  </p>
                  <p>
                    d. The Sanction Letter is an integral part of this Agreement
                    unless inconsistent with its provisions.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                <strong>11.10</strong> This Agreement and the documents executed
                contemporaneously constitute the entire agreement. In case of
                conflict between this Agreement and the Sanction Letter or Loan
                Application, this Agreement shall prevail.
              </p>

              <p>
                <strong>11.11</strong> If any part of this Agreement is deemed
                invalid or unenforceable, such invalidity shall not affect the
                remaining provisions, which shall continue in full force.
                Invalid provisions shall be replaced with valid ones closely
                reflecting the original intent.
              </p>

              <p>
                <strong>11.12</strong> Each right under this Agreement is
                independent, cumulative, and in addition to other rights.
                Exercising any right shall not constitute a waiver of any other
                rights.
              </p>

              <p>
                <strong>11.13</strong> The Borrower shall execute and deliver
                any documents or actions required by the Lender to secure
                repayment obligations at any time during the term or after
                termination of this Agreement.
              </p>

              <p>
                <strong>11.14</strong> Time is of the essence in respect of all
                payment and performance obligations of the Borrower under this
                Agreement.
              </p>

              <p>
                <strong>11.15</strong> No variation of this Agreement or any
                related Schedules or Annexures shall be valid unless made in
                writing and signed by duly authorized representatives of both
                Parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">
              12. GRIEVANCE REDRESSAL
            </h2>

            <div className="space-y-4">
              <h3 className="font-semibold">12.1 Grievance Redressal Matrix</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Level 1</p>
                  <p className="pl-4">
                    The customer may post his/her complaint to the branch office
                    or write to us under 'Customer Care' section of our website,
                    i.e., www.richcredit.in or supports@richcredit.in
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Level 2</p>
                  <p className="pl-4">
                    If the customer is not satisfied with the resolution
                    provided by the Customer Care, he/she may post their
                    complaint to The Grievance Redressal Officer at
                    grievanceredressal@richcredit.in.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Level 3</p>
                  <p className="pl-4">
                    If the customer is not satisfied with the resolution
                    provided by the Grievance Redressal Officer, he/she may post
                    their complaint to Compliance/nodal officer at
                    info@richcredit.in
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Level 4</p>
                  <p className="pl-4">
                    If the customer is not satisfied with the resolution
                    provided by the Compliance/nodal officer, he/she may post
                    their complaint to Ombudsman at arman@techaviom.in
                  </p>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <p className="font-semibold mb-2">
                    Alternatively, customers may write to The Grievance
                    Redressal Officer at:
                  </p>
                  <div className="pl-4">
                    <p>RICHCREDIT FINANCE PRIVATE LIMITED,</p>
                    <p>
                      1/50, 2nd Floor, Ganga Appartment, Lalita Park, Laxmi
                      Nagar, Delhi-110092
                    </p>
                    <p className="mt-2 text-sm italic">
                      Note: Please mention 'Grievance Redressal' on the top of
                      the envelope.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Level 5</p>
                  <p className="pl-4">
                    In case of non-addressal of the complaint to the customer's
                    satisfaction, within a reasonable period from the above
                    quarters, the customer may approach Reserve Bank of India at
                    the address given below:
                  </p>
                  <div className="pl-8 mt-2">
                    <p>
                      C/o Reserve Bank of India, Sansad Marg, New Delhi STD
                      Code: 011 Tel. No. 23715393
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6">
                <strong>12.2</strong> In case, for the NBFC related complaints
                the Customer is not satisfied with the response or the
                resolution provided to it or the Complaint is still not resolved
                within the period of 21 (Twenty-One) working days from the date
                of the Complaint, the Customer may appeal to NBFC Ombudsman at:
              </p>

              <div className="pl-4 mt-2 p-4 bg-gray-50 rounded">
                <p className="font-semibold">Address of NBFC Ombudsman</p>
                <p>C/o Reserve Bank of India Sansad Marg, New Delhi - 110001</p>
                <p>STD Code: 011, Tel. No.23724856 Fax No. 23725218 - 19</p>
                <p>Email: nbfconewdelhi@rbi.org.in</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">13. ARBITRATION</h2>

            <div className="space-y-3">
              <p>
                <strong>13.1</strong> Any dispute in connection with the
                interpretation, performance, termination of this agreement,
                and/or the documents, or otherwise in connection with this
                agreement, shall be referred for Arbitration under the
                Arbitration and Conciliation Act, 1996 (as amended up to date)
                or in re-enactment thereof, before a sole Arbitrator to be
                appointed by the Lender.
              </p>

              <p>
                <strong>13.2</strong> The Arbitration proceedings shall be
                conducted at Delhi in English language.
              </p>

              <p>
                <strong>13.3</strong> The Arbitral award shall be final and
                binding on the parties and enforceable in accordance with its
                terms. The Arbitrator shall state reasons for their findings in
                writing. The parties agreed to be bound thereby and act
                accordingly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">14. ACCEPTANCE</h2>

            <div className="space-y-3">
              <p>
                <strong>14.1</strong> The Borrower has read the entire Agreement
                including the details given in the Schedules, which have been
                filled in the presence of the Borrower.
              </p>

              <p>
                <strong>14.2</strong> The Borrower hereby expressly and
                irrevocably agrees to be bound by all conditions including the
                details in the Schedule.
              </p>

              <p>
                <strong>14.3</strong> The aforementioned Agreement and other
                documents have been explained in the language known to the
                Borrower by one of the relative/friend of the Borrower and the
                Borrower has understood the entire meaning of the various
                clauses.
              </p>

              <p>
                <strong>14.4</strong> The Borrower is aware that the Lender
                shall agree to become a party to this Agreement only after
                satisfying itself with regard to all condition and details
                filled by the Borrower in the application for the agreement in
                consonance with the Lender's policy.
              </p>

              <p>
                <strong>14.5</strong> The Borrower agrees that this Agreement
                shall be deemed to commence and legally binding on the date when
                the Authorized Office of the Lender signs this Agreement at the
                city where the branch office of the Lender is situated. It shall
                be in force till all the monies due and payable to the Lender
                under this Agreement as well as all other Agreements that may be
                subsisting/executed between the Borrower and Lender are fully
                paid.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">15. PENAL CHARGES</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-400 text-sm">
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      i.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Penal charges, if any, in case of delayed payment:
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Rs.200 Per EMI
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      ii.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Other penal charges, if any
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      iii.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Foreclosure charges, if applicable
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      5% +Applicable Tax
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      iv.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Charges for switching of loans from floating to fixed rate
                      and vice versa
                    </td>
                    <td className="border border-gray-400 px-3 py-2">NA</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      v.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Any other charges (please specify)
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      vi.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Pre-closure Statement/request: Nil for the first time and
                      Rs. 100 per request thereafter
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      vii.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Changes in Terms of Loan: Rs. 200 per request
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      viii.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Document Retrieval: Rs. 200 per request
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      ix.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Schedule and Statement of Accounts: Nil for the first
                      time; Rs. 100 per request thereafter
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      x.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Duplicate NOC/No dues: Rs. 100 per issuance
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      xi.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Charges for List of documents: Rs. 50 per request
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      xii.
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Loan Account Maintenance Charges (AMC): NA
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">16. JURISDICTION</h2>

            <p>
              Subject to the provisions of Article-12 above, if the cause of
              action arises anywhere in the country, it is specifically agreed
              between the parties that in respect of any suit pertaining to any
              matter, claims or disputes arising out of or in any way relating
              to this Agreement, the courts at Delhi alone shall have exclusive
              jurisdiction.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-300">
          <div className="flex justify-between">
            <div className="text-center">
              {/* <div className="border-b border-black w-48 mb-2"></div> */}
              <p className="text-sm">Borrower's Signature</p>
              <div className="border-b border-black w-48 mb-1 mt-2"></div>

              <span>{borrowerSignature || "Signature"}</span>
              {/* <span>{applicantName || "Signature"}</span> */}
              </div>
            <div className="text-center">
              {/* <div className="border-b border-black w-48 mb-2"></div> */}
              <p className="text-sm">Lender's Signature</p>
              <div className="border-b border-black w-48 mb-1 mt-2"></div>

              <span>{lenderSignature || "Signature"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* schedule a */}
      <div className="mt-10 border border-black">
        <h3 className="font-bold underline p-2 border-b border-black">
          Schedule A
        </h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-black p-1 w-1/12">Item No</th>
              <th className="border border-black p-1 w-4/12">Particulars</th>
              <th className="border border-black p-1">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-1 align-top">1.</td>
              <td className="border border-black p-1 align-top">Place of Execution of Agreement</td>
              <td className="border border-black p-1">{placeOfExecution}</td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">2.</td>
              <td className="border border-black p-1 align-top">Date of Execution of Agreement</td>
              <td className="border border-black p-1">{dateOfExecution}</td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">3.</td>
              <td className="border border-black p-1 align-top">Address of the concerned Branch/ support Branch</td>
              <td className="border border-black p-1">{branchAddress}</td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">4.</td>
              <td className="border border-black p-1 align-top">Name and Address of Borrower/s</td>
              <td className="border border-black p-1">
                <div className="mb-2">
                  <strong>1)</strong> Name: {borrower1.name}
                  <br />
                  Address 1: {borrower1.address1}
                  <br />
                  Address 2: {borrower1.address2}
                  <br />
                  Address 3: {borrower1.address3}
                  <br />
                  City: {borrower1.city} &nbsp;&nbsp; PIN: {borrower1.pin}
                </div>
                <div>
                  <strong>2)</strong> Name: {borrower2.name}
                  <br />
                  Address 1: {borrower2.address1}
                  <br />
                  Address 2: {borrower2.address2}
                  <br />
                  Address 3: {borrower2.address3}
                  <br />
                  City: {borrower2.city} &nbsp;&nbsp; PIN: {borrower2.pin}
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">5.</td>
              <td className="border border-black p-1 align-top">Loan amount (Amount in numbers and words)</td>
              <td className="border border-black p-1">
                <div>Number: Rs. {loanAmountNumber}</div>
                <div className="mt-1">Words: {loanAmountWords}</div>
              </td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">6.</td>
              <td className="border border-black p-1 align-top">Purpose of the Loan</td>
              <td className="border border-black p-1">{loanPurpose}</td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">7.</td>
              <td className="border border-black p-1 align-top">Rate of Interest (Please tick whichever is applicable)</td>
              <td className="border border-black p-1">{interestType}</td>
            </tr>
            <tr>
              <td className="border border-black p-1 align-top">8.</td>
              <td className="border border-black p-1 align-top">Charges and other Fees</td>
              <td className="border border-black p-1">{charges}</td>
            </tr>
          </tbody>
        </table>
      </div>











{/* schedule b */}

      <div className="mt-10 border border-black">
        <h3 className="font-bold underline p-2 border-b border-black">
          Schedule B
        </h3>
        <div className="p-4 text-sm leading-relaxed">
          <p className="font-bold uppercase">
            Terms and Conditions Applicable to the Loan with Fixed Interest Rate
          </p>

          <p className="mt-4">
            <span className="font-bold">A) Computation of Interest:</span>
            <br />
            The Fixed Interest Rate shall be{" "}
            <span className="inline-block border-b border-black w-16 mx-1 text-center">{fixedInterestRate}</span>
            % p.a. The same shall be computed on a Weekly Rate basis. The same
            shall be payable on a weekly basis.
          </p>

          <p className="mt-4">
            <span className="font-bold">
              B) Repayment of Loan and Payment of Interest:
            </span>
            <br />
            Loan and Interest shall be payable by the Borrower in the following
            Weekly Installments.
          </p>

          <table className="w-full border border-black border-collapse mt-4 text-sm">
            <thead>
              <tr>
                <th className="border border-black p-1 text-left">
                  Equated Weekly Installment (Rs.)
                </th>
                <th className="border border-black p-1 text-left">
                  No. of EMIs
                </th>
                <th className="border border-black p-1 text-left">
                  Period
                  <br />
                  From
                </th>
                <th className="border border-black p-1 text-left">To</th>
                <th className="border border-black p-1 text-left">
                  Payable weekly on or before
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-1 h-10"></td>
                <td className="border border-black p-1 h-10">{noOfEmis}</td>
                <td className="border border-black p-1 h-10">{periodFrom}</td>
                <td className="border border-black p-1 h-10">{periodTo}</td>
                <td className="border border-black p-1 h-10">{payableOn}</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-6 font-bold">IN WITNESS WHEREOF</p>
          <p>
            The parties hereto have signed this agreement on the day, month and
            year first above written.
          </p>

          <div className="grid grid-cols-2 gap-10 mt-6">
            <div>
              <p className="font-semibold">Name of Borrower</p>
              <div className="h-8 border-b border-black w-64 mt-2">{borrowerName}</div>
              <div className="h-8 border-b border-black w-64 mt-4"></div>
            </div>
            <div>
              <p className="font-semibold">Signature of the Borrowers</p>
              <div className="h-8 border-b border-black w-64 mt-2">{borrowerSignature}</div>
              <div className="h-8 border-b border-black w-64 mt-4"></div>
            </div>
          </div>

          <p className="mt-10">Signed and Delivered by the within named:</p>
          <p className="font-bold mt-2">
            For Richcredit Finance Private Limited
          </p>
          <div className="h-8 border-b border-black w-64 mt-4">{authorisedSignatory}</div>
          <p className="text-sm mt-1">Authorised Signatory</p>
        </div>
      </div>



{/* declaration for signing in vernacular language */}
      <VernacularDeclaration
        name={vernacularName}
        age={vernacularAge}
        parentName={vernacularParentName}
        address={vernacularAddress}
        place={vernacularPlace}
        date={vernacularDate}
        day={vernacularDay}
        month={vernacularMonth}
        year={vernacularYear}
        borrowerSignature={borrowerSignature}
        borrowerName={borrowerName}
        borrowerThumbImpression={borrowerThumbImpression}
        borrowerAadhaar={borrowerAadhaar}
        borrowerPAN={borrowerPAN}
      />





      
      <LoanSanctionLetter />
    </div>
  );
};

const VernacularDeclaration = ({
  name,
  age,
  parentName,
  address,
  place,
  date,
  day,
  month,
  year,
  borrowerSignature,
  borrowerName,
  borrowerThumbImpression,
  borrowerAadhaar,
  borrowerPAN,
}) => (
  <div className="mt-10 border border-black">
    <div className="p-4 text-sm leading-relaxed">
      <p className="text-center font-bold uppercase">
        Declaration for Signing in Vernacular Language / In Case of Blind or
        Illiterate Borrower(s)
      </p>

      <p className="mt-6">
        I <span className="inline-block border-b border-black w-80 px-2">{name}</span>,
        Aged <span className="inline-block border-b border-black w-32 px-2">{age}</span> years, Son/Daughter of <span className="inline-block border-b border-black w-64 px-2">{parentName}</span>,
        an adult and resident of <span className="inline-block border-b border-black w-80 px-2">{address}</span>,
        do hereby solemnly affirm and declare as follows:
      </p>

      <ol className="list-decimal pl-6 mt-4 space-y-2">
        <li>
          I have read out and explained in full the contents of the Loan
          Agreement and all related documents required for availing the loan
          facility from the following entity:
          <ul className="list-disc pl-6 mt-1">
            <li>
              <span className="font-bold">
                Richcredit Finance Private Limited
              </span>
              , having its Registered and Administrative Office at 1/50, 2nd
              Floor, Ganga Apartment, Lalita Park, Laxmi Nagar, Delhi -
              110092.
            </li>
          </ul>
        </li>
        <li>
          I confirm that I have clearly explained all the terms, conditions,
          and clauses of the aforementioned loan documents to the
          Borrower(s), who has/have understood the same.
        </li>
        <li>
          The Borrower(s), having understood the contents, has/have
          willingly affixed his/her/their signature or thumb impression
          below in acceptance and agreement of all the terms and conditions.
        </li>
        <li>
          I declare that the above statements are true and correct to the
          best of my knowledge and belief.
        </li>
      </ol>

      <p className="mt-6 font-bold">
        Solemnly affirmed at <span className="inline-block border-b border-black w-32 px-2">{place}</span>
        on this <span className="inline-block border-b border-black w-32 px-2">{date}</span>
        day of <span className="inline-block border-b border-black w-32 px-2">{month}</span>,
        20<span className="inline-block border-b border-black w-8 px-2">{year}</span>
      </p>

      <div className="grid grid-cols-2 gap-10 mt-6 text-sm">
        <div>
          <p>Signature of Borrower:</p>
          <div className="h-8 border-b border-black w-64 mt-1">{borrowerSignature}</div>

          <p className="mt-4">Name of Borrower:</p>
          <div className="h-8 border-b border-black w-64 mt-1">{borrowerName}</div>

          <p className="mt-4">Thumb Impression (if applicable):</p>
          <div className="h-8 border-b border-black w-64 mt-1">{borrowerThumbImpression}</div>
        </div>
        <div>
          <p>Address:</p>
          <div className="h-8 border-b border-black w-64 mt-1">{address}</div>

          <p className="mt-4">Aadhaar No.:</p>
          <div className="h-8 border-b border-black w-64 mt-1">{borrowerAadhaar}</div>

          <p className="mt-4">PAN No.:</p>
          <div className="h-8 border-b border-black w-64 mt-1">{borrowerPAN}</div>
        </div>
      </div>
    </div>
  </div>
);

const LoanSanctionLetter = () => {
  // Define all variables needed for the sanction letter
  const customerName = "Amit Kumar";
  const sanctionedAmount = "1,00,000";
  const interestRate = "20";
  const sanctionDate = "01/07/2024";
  const totalRepaymentAmount = "1,20,000";
  const emiAmount = "12,000";
  const tenure = "100 days";
  const repaymentFrequency = "Every 7 days till 100 Days";
  const penalInterest = "INR 200";
  const processingFee = "10,000 + GST";
  const apr = "116.07%";
  const netDisbursementAmount = "90,000";
  const firstInstallmentDate = "08/07/2024";
  const lastInstallmentDate = "08/10/2024";
  const customerAddress = "123 Main St, Near Park, Block A, Delhi-110092";
  const customerEmail = "customer@email.com";
  const customerPhone = "9876543210";
  const customerSignature = "Amit Kumar";
  const customerDate = "01/07/2024";
  const customerPlace = "Delhi";
  const authorizedSignatory = "Rohit Sharma";

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl border border-gray-200 my-10 print:border-none text-sm leading-relaxed">
      <h2 className="text-center text-lg md:text-xl mb-4 underline">
        LOAN SANCTION LETTER
      </h2>

      <div className="mb-4">
        <p className="text-right">Date: {sanctionDate}</p>
        <p>
          To,
          <br />
          Mr/Mrs/Ms {customerName}
          <br />
          {customerAddress}
          <br />
          Email: {customerEmail}
          <br />
          Phone: {customerPhone}
        </p>
      </div>

      <p className="mb-4">
        <strong>
          We thank you for your interest in availing 100 days Mini Business loan
          (MBL) and for providing us with the opportunity to serve your
          financial needs.
        </strong>{" "}
        We are pleased to inform you that your loan application has been{" "}
        <strong>approved</strong>, subject to the terms and conditions specified
        in this Sanction Letter and the final Loan Agreement.
      </p>

      <p className="mb-4">
        Please note that the loan is being extended by{" "}
        <strong>Richcredit Finance Pvt. Ltd. (RFPL)</strong>, a Non-Banking
        Financial Company (NBFC), having its registered office at{" "}
        <strong>
          1/50, 2nd Floor, Ganga Apartment, Lalita Park, Laxmi Nagar, Delhi –
          110092
        </strong>{" "}
        and the customer onboarding of MBL are supported by{" "}
        <strong>Techaviom Finance Pvt. Ltd.</strong>
      </p>

      <p className="mb-4">
        We look forward to assisting you further and ensuring a smooth and
        satisfactory loan experience.
      </p>

      <p className="mb-2">
        This sanction will be subject to the following Terms and Conditions:
      </p>

      <table className="w-full border border-gray-400 text-sm mb-6">
        <tbody>
          {[
            ["Customer Name", customerName],
            ["Sanctioned Loan Amount (Rs.)", sanctionedAmount],
            ["Rate of Interest (%) Fixed", interestRate],
            ["Date of Sanction", sanctionDate],
            ["Total Repayment Amount (Rs.)", totalRepaymentAmount],
            ["EMI Amount (Rs.)", emiAmount],
            ["Tenure in Days", tenure],
            ["Repayment Frequency", repaymentFrequency],
            ["Penal Interest per EMI", penalInterest],
            ["Processing Fee 10% plus GST", processingFee],
            ["APR (Annual Percentage Rate)", apr],
            ["Net Disbursement Amount", netDisbursementAmount],
            ["Date of First Installment", firstInstallmentDate],
            ["Date of Last Installment", lastInstallmentDate],
          ].map(([label, value], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border border-gray-400 px-2 py-1 w-1/2">
                {label}
              </td>
              <td className="border border-gray-400 px-2 py-1">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mb-4">
        You are kindly requested to review the above-mentioned terms and
        conditions carefully and confirm your acceptance either via email, by
        visiting our designated office, or by contacting an authorized
        representative of the company. Upon receipt of your confirmation, we
        will proceed with the necessary formalities to initiate the final
        disbursement of your loan.
      </p>

      <p>
        Best Regards,
        <br />
        100 days MBL Team
      </p>

      {/* FINAL ADDITIONAL SECTION */}
      <div className="mt-10">
        <p className="text-green-700 font-semibold underline">Kindly Note:</p>
        <p className="mt-2">
          Non-payment of loan on time will adversely affect your Credit score,
          further reducing your chances of getting a loan again.
        </p>
        <p className="mt-2">
          Upon approval, the processing fee will be deducted from your Sanction
          amount and the balance amount will be disbursed to your account. This
          Sanction letter is valid for <strong>2 working days</strong>.
        </p>
        <p className="mt-2">
          Please feel free to call us at our customer service helpline or write
          to us at{" "}
          <a
            href="mailto:infombl@richcredit.in"
            className="text-blue-600 underline"
          >
            infombl@richcredit.in
          </a>{" "}
          or visit the nearby Techaviom office for any clarification or
          assistance.
        </p>

        <p className="mt-6 font-semibold">For Richcredit Finance Pvt Ltd</p>
        <p className="mt-1">Authorized Signatory: {authorizedSignatory}</p>

        <div className="mt-10 font-semibold">
          <p>
            I/We have read and accept the terms and conditions of this Sanction
            Letter.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4 text-sm">
          <div>
            <p>Name: {customerName}</p>
            <p className="mt-2">Date: {customerDate}</p>
            <p className="mt-2">Place: {customerPlace}</p>
          </div>
          <div>
            <p>Signature: {customerSignature}</p>
            <p className="mt-8">Signature: {authorizedSignatory}</p>
          </div>
        </div>
      </div>

      <EmiSheet />
    </div>
  );
};





const EmiSheet = () => {
  // Dynamic variables
  const loanNo = "MBL2024-001";
  const loanTenure = "100 Days";
  const loanAmount = 100000; // Changed to number for calculations
  const emiStartDate = "6/8/2025";
  
  // Calculate total interest (20% of loan amount)
  const totalInterest = loanAmount * 0.20;
  const totalAmount = loanAmount + totalInterest;
  
  // Calculate weekly EMI (total amount divided by number of weeks)
  const numberOfWeeks = 14; // 100 days = ~14 weeks
  const weeklyEmi = Math.round(totalAmount / numberOfWeeks);
  
  // Generate EMI table
  const emiTable = Array.from({ length: numberOfWeeks }, (_, i) => {
    const weekNumber = i + 1;
    const date = new Date(emiStartDate);
    date.setDate(date.getDate() + (i * 7));
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    
    // Calculate remaining principal
    const remainingPrincipal = Math.round(loanAmount - (loanAmount * (i / numberOfWeeks)));
    // Calculate principal component
    const principalComponent = Math.round(loanAmount / numberOfWeeks);
    // Calculate interest component
    const interestComponent = Math.round(totalInterest / numberOfWeeks);
    
    return [
      weekNumber.toString(),
      formattedDate,
      remainingPrincipal.toLocaleString(),
      principalComponent.toLocaleString(),
      interestComponent.toLocaleString(),
      weeklyEmi.toLocaleString()
    ];
  });

  const signatory = "Authorized Signatory";
  const signatoryDate = "01-05-2025";
  const signatoryPlace = "Delhi";
  const borrowerName = "Amit Kumar";
  const borrowerFirm = "Amit Enterprises";
  const borrowerSign = "Amit Kumar";
  const coBorrowerName = "Sunita Devi";
  const coBorrowerSign = "Sunita Devi";

  return (
    <div className="mt-10 border border-black p-4 text-sm max-w-4xl mx-auto">
      <h2 className="text-center font-bold text-lg mb-4 uppercase">
        New EMI Schedule as per Disbursal Date
      </h2>

      <div className="grid grid-cols-2 text-sm mb-4 gap-4">
        <div className="flex flex-col items-start">
          <p>
            Loan No.: <span className="inline-block border-b border-black w-48 px-2">{loanNo}</span>
          </p>
          <p>Loan Tenure: {loanTenure}</p>
        </div>
        <div className="flex flex-col items-end text-right">
          <p>Loan Amount: <span className="ml-2">₹{loanAmount.toLocaleString()}</span></p>
          <p>EMI Start Date: <span className="ml-2">{emiStartDate}</span></p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border text-xs text-center">
          <thead className="bg-yellow-300 font-semibold">
            <tr>
              <th className="border px-1">Instalment No.</th>
              <th className="border px-1">Instalment Date</th>
              <th className="border px-1">
                Outstanding Principal
                <br /> (in Rupees)
              </th>
              <th className="border px-1">
                Principal
                <br /> (in Rupees)
              </th>
              <th className="border px-1">
                Interest
                <br /> (in Rupees)
              </th>
              <th className="border px-1">
                Instalment
                <br /> (in Rupees)
              </th>
            </tr>
          </thead>
          <tbody>
            {emiTable.map(([no, date, outPrincipal, principal, interest, emi], i) => (
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
      </div>

      <div className="mt-6 text-sm text-center">
        <p>For Richcredit Finance Pvt. Ltd.</p>
        <p className="mt-4">{signatory}</p>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-8 mt-4">
          <p>Date: {signatoryDate}</p>
          <p>Place: {signatoryPlace}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-6 items-center">
        <div className="flex flex-col items-start">
          <p>Borrower Name:</p>
          <div className="h-8 border-b border-black w-64 mt-1 px-2 flex items-center">{borrowerName}</div>
          <p className="mt-4">Prop. of M/s:</p>
          <div className="h-8 border-b border-black w-64 mt-1 px-2 flex items-center">{borrowerFirm}</div>
        </div>
        <div className="flex flex-col items-end text-right">
          <p>Borrower Sign.:</p>
          <div className="h-8 border-b border-black w-64 mt-1 px-2 flex items-center justify-end">{borrowerSign}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-6 items-center">
        <div className="flex flex-col items-start">
          <p>Co-Borrower Name:</p>
          <div className="h-8 border-b border-black w-64 mt-1 px-2 flex items-center">{coBorrowerName}</div>
        </div>
        <div className="flex flex-col items-end text-right">
          <p>Co-Borrower Sign.:</p>
          <div className="h-8 border-b border-black w-64 mt-1 px-2 flex items-center justify-end">{coBorrowerSign}</div>
        </div>
      </div>
      <img
        src="/sanctionfooter.webp"
        alt="Sanction Letter Footer"
        className="w-full h-auto object-cover mt-8"
      />
    </div>
  );
};





const MblSanctionlatterPage = () => {
  const [entityName, setEntityName] = useState("");
  const [sanctionedAmount, setSanctionedAmount] = useState("");
  return (
    <div>
      <KeyFactsStatement />
      {/* <LoanAgreement /> */}
      {/* <LoanSanctionLetter /> */}
      {/* <EmiSheet /> */}
    </div>
  );
};

export default MblSanctionlatterPage;
