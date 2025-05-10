import React from 'react'

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-center mb-8 mt-10 text-gray-800">Terms and Conditions</h1>
          
          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 font-medium">
                  PLEASE READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY. THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND MINIBUSINESS LOAN, A BRAND LEGALLY REGISTERED UNDER U.Y. FINCORP LIMITED ("THE COMPANY") IN JOINT VENTURE WITH FINTECH CLOUD PRIVATE LIMITED.
                </p>
                <p className="mt-2 text-sm text-yellow-700">
                  BY CLICKING "I ACCEPT" OR "I AGREE," OR BY DOWNLOADING, INSTALLING, OR USING THE SERVICES IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE, INSTALL, OR ACCESS THE SERVICES.
                </p>
              </div>
            </div>
          </div>
          
          {/* Loan Terms Consent Section */}
          <section className="mb-8 bg-[#003366] border-l-8 border-[#E53935] rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#E53935] mb-4">Loan Terms and Conditions</h2>
            <p className="text-[#E53935] font-bold mb-3">PLEASE READ THESE TERMS CAREFULLY.</p>
            <p className="mb-3 text-white">By applying for a TechAvom Business Loan, you agree to the following terms:</p>
            <p className="mb-3 text-white font-semibold">
              Loan amount ranges from <span className="text-[#E53935] font-bold">₹5,000</span> to <span className="text-[#E53935] font-bold">₹10,00,000</span>.
            </p>
            <ul className="list-disc pl-6 mb-3 text-white space-y-2 marker:text-[#003366]">
              <li>
                <span className="font-semibold text-[#E53935]">Loan Tenure:</span> The business loan is
                provided for a flexible tenure from <span className="text-[#E53935] font-bold">7 days</span> to <span className="text-[#E53935] font-bold">120 days</span>. Early repayment is allowed
                without penalty.
              </li>
              <li>
                <span className="font-semibold text-[#E53935]">Processing Time:</span> Loan approval
                and disbursal are typically completed within 30 minutes, subject to
                successful KYC and credit checks.
              </li>
              <li>
                <span className="font-semibold text-[#E53935]">Eligibility:</span> You must provide
                accurate business and personal information. False or misleading
                information may result in rejection or legal action.
              </li>
              <li>
                <span className="font-semibold text-[#E53935]">Repayment:</span> Timely repayment is
                required. Late payments may incur additional charges and affect your
                credit profile.
              </li>
              <li>
                <span className="font-semibold text-[#E53935]">Privacy:</span> Your data will be used
                solely for loan processing and will be kept confidential as per our
                Privacy Policy.
              </li>
              <li>
                <span className="font-semibold text-[#E53935]">Agreement:</span> By clicking <span className="text-[#E53935] font-bold">"Agree"</span>
                you confirm you have read, understood, and accept these terms.
              </li>
            </ul>
            <div className="border-t-2 border-[#E53935] my-4"></div>
            <p className="text-white">
              If you do not agree with any part of these terms, please do not proceed
              with the loan application.
            </p>
          </section>
          
          <div className="space-y-8">
            {/* Definitions Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">DEFINITIONS</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>"Web Platform","Application" or "App" refers to "MiniBusiness Loan," the web platform/ mobile software application developed and maintained by the Company to facilitate access to its Services.</li>
                <li>"LENDER" denotes the financial institutions, including banks and non-banking financial companies, that partner with the Company to sanction, process, and disburse loans via the Platform.</li>
                <li>"Company" or "we" means MiniBusiness Loan, a platform managed by U.Y. Fincorp Private Limited, incorporated under the Companies Act, 2013, and administered by its appointed representatives.</li>
                <li>"Customer(s)," "you," or "End-Users" refers to any person who visits, downloads, accesses, or uses the Platform or Services.</li>
                <li>"Loan" means the credit facility that a Customer may apply for through the Platform, which is subsequently sanctioned by the LENDER under mutually agreed terms.</li>
                <li>"Loan Agreement" refers to the agreement executed between the Customer and the LENDER for the provision of the Loan, in physical or electronic form.</li>
                <li>"Outstanding Amount(s)" includes the total of the principal loan, interest, fees, penalties, and other charges due to the LENDER.</li>
                <li>"Platform" collectively refers to both the mobile Application and the official Website.</li>
                <li>"Services" means the facilitation of short-term lending solutions offered by the LENDER through the Platform.</li>
                <li>"Third Party Platforms" refers to external websites or applications such as Facebook, LinkedIn, or other social media or data services.</li>
                <li>"User Data" includes all personal or financial information, documents, or materials submitted or uploaded by the Customer during or prior to availing the Services.</li>
                <li>"Website" refers to www.minibusinessloan.com, the official web portal managed by the Company for rendering its Services.</li>
              </ul>
            </section>

            {/* Description of Services Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">DESCRIPTION OF SERVICES</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The Platform enables eligible Customers to apply for credit facilities subject to verification and validation of requisite criteria. The Company, acting on behalf of the LENDER, may collect, verify, and assess User Data and related documents to process such applications.
                </p>
                <p>
                  By using the Services, you consent to the Company accessing, importing, and processing your data, including information sourced from Third Party Platforms, for the purpose of validating your credentials. You also acknowledge and agree that updates to your information may be periodically fetched from such sources to ensure continued compliance with applicable laws and regulations.
                </p>
                <p>
                  Data obtained from Central KYC Registry, UIDAI, or similar KYC verification systems is used strictly in accordance with the Prevention of Money Laundering Act, 2002 and RBI's KYC Master Directions, 2016. You hereby provide your informed and voluntary consent authorizing the Company and the LENDER to access, store, use, and process such information as required for regulatory or operational purposes.
                </p>
                <p>
                  Loan disbursement shall be made through the method opted by the Customer on the Platform. Customers are obliged to repay all Outstanding Amounts to the LENDER on or before the stipulated due dates as reflected within the Application.
                </p>
                <p>
                  The Company reserves the right to track the Customer's location during and after the use of the Services, including in cases where the Application is uninstalled or discontinued, until all financial obligations to the LENDER are fully discharged. Discontinuation of the Platform shall not absolve the Customer from repayment responsibilities.
                </p>
                <p>
                  Customers are solely responsible for maintaining the confidentiality and security of their user credentials and for any activity conducted under their account. The Company disclaims all liability for loss, damages, or claims arising from unauthorized access or misuse of the Services. We reserve the right to accept or deny service requests at our sole discretion without obligation to provide reasoning.
                </p>
                <p>
                  The performance of the Platform is contingent on the technical capabilities of the Customer's device and network connectivity. It is the Customer's responsibility to ensure that such devices and networks meet the minimum requirements for Service usage.
                </p>
                <p>
                  The Company and its Lenders adhere to the RBI's Fair Practices Code and Digital Lending Guidelines, including disclosure of the Key Fact Statement (KFS), loan terms, interest rates, and recovery practices.
                </p>
                <p>
                  By accepting these Terms, you authorize the Company to access, track, and process your Personal Information and User Data for identity authentication, creditworthiness evaluation, and operational continuity.
                </p>
                <p>
                  These Terms govern platform usage and do not replace the Loan Agreement executed between the Customer and the Lender, which shall prevail in the event of any conflict between the two documents.
                </p>
              </div>
            </section>

            {/* Consent for Communication Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">CONSENT FOR COMMUNICATION</h2>
              <p className="text-gray-600">
                You hereby expressly consent to and authorize the Company, its representatives, affiliates, or LENDING/NBFC partners, including employees or agents, to contact you via phone calls, SMS, or other communication modes to share transaction-related updates, promotional offers, and product information.
              </p>
            </section>

            {/* Privacy Policy Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy governs the use of the website accessible at www.techaviom.com 
                ("Website" or "Site") legally registered under U.Y. Fincorp Limited. We are committed to 
                upholding the privacy and confidentiality of our users ("User" or "you") and ensure that 
your personal data is handled in accordance with applicable legal standards. 
              </p>
            </section>

            {/* Terms Sections */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
By accessing or using this Website and any of its sub-links, you acknowledge and agree 
to the terms of this Privacy Policy. Continued use of the Website constitutes your 
express consent to the collection, use, disclosure, and processing of personal 
information by us in accordance with this Policy. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Collection of Personal Information</h2>
              <p className="text-gray-600 leading-relaxed">
We do not collect personal data unless voluntarily submitted by you. Any such data 
voluntarily provided shall not be sold, rented, or otherwise transferred to unrelated third 
parties, except where expressly stated or with your prior consent. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Use and Disclosure of Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
Personal information collected shall be treated as private and confidential. We shall not 
disclose such information to third parties except under the following circumstances: 
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Compliance with applicable laws, regulations, legal proceedings, or government requests</li>
                <li>Protection and defense of our rights or property or those of other users</li>
                <li>Enforcement of the Website's terms of use</li>
                <li>In connection with any merger, acquisition, restructuring, or sale of business or assets</li>
              </ul>
            </section>

            {/* Termination Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">TERMINATION</h2>
              <div className="space-y-4 text-gray-600">
                <p>The Company reserves its rights to terminate these Terms in the event:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>you breach any provision of these Terms;</li>
                  <li>the Company is required to do so under law;</li>
                  <li>the Company chooses to discontinue the Services being offered or discontinue to operate the Platform;</li>
                  <li>the license granted to use the App expires;</li>
                  <li>of non-payment of Outstanding Amount(s).</li>
                </ul>
                <p>
                  The Company reserves its right to Track you, even when you have uninstalled the App or even after termination of these Terms, until all your obligations, including but not limited to payment of the Outstanding Amount(s) is in subsistence.
                </p>
                <p>
                  Upon termination of these Terms, the rights and licenses granted to you under these Terms shall cease to exist, and you must forthwith stop using the Platform and the Services and repay the Outstanding Amount(s). Notwithstanding anything contained in these Terms or otherwise, the termination of these Terms for any reason whatsoever, shall not affect your obligations, including but not limited to repayment of the Outstanding Amount(s).
                </p>
              </div>
            </section>

            {/* Indemnity Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">INDEMNITY</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold the Company, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including attorneys' fees, made by any third party due to or arising out of (i) your violation of these Terms; (ii) your violation of any rights of other users of the Platform; (iii) your use or misuse of the Platform or the Services; (iv) your violation of applicable laws.
              </p>
            </section>

            {/* Limitations of Liability Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">LIMITATIONS OF LIABILITY</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You expressly understand and agree that the Company, including its directors, officers, employees, representatives or the service provider, shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>use or the inability to avail the Services</li>
                  <li>inability to use the Platform</li>
                  <li>failure or delay in providing the Services or access to the Platform</li>
                  <li>any performance or non-performance by the Company</li>
                  <li>any damages to or viruses that may infect your electronic devices or other property as the result of your access to the Platform or your downloading of any content from the Platform</li>
                  <li>server failure or otherwise or in any way relating to the Services</li>
                </ul>
              </div>
            </section>

            {/* Force Majeure Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">FORCE MAJEURE</h2>
              <p className="text-gray-600">
                Notwithstanding anything to the contrary herein, the Company shall not be held liable for any loss, damage, or unavailability of the Platform or Services arising from any failure or deficiency in performance, whether in whole or in part, caused directly or indirectly by events, circumstances, or conditions beyond the reasonable control of the Company. Such events include, but are not limited to, acts of God, natural disasters, internet outages, failures of computer or telecommunication systems, changes in applicable laws or regulations (including those issued by the Reserve Bank of India), power outages, government actions, civil unrest, riots, or other force majeure events.
              </p>
            </section>

            {/* Your Rights Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">YOUR RIGHTS</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Access and Update Your Personal Information</h3>
                  <p className="text-gray-600">You have the right to request access to the personal information we hold about you. This includes the right to view, verify, and request corrections or updates to ensure your information remains accurate and up to date.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Withdraw Consent for Data Collection and Usage</h3>
                  <p className="text-gray-600">You may withdraw your consent for us to collect, use, or process your personal data at any time. Upon receiving such a request, we will cease processing your data unless we are legally required or permitted to retain it for specific purposes.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Opt Out of Marketing Communications</h3>
                  <p className="text-gray-600">You have the right to opt out of receiving promotional or marketing communications from us at any time. This can typically be done by following the unsubscribe link provided in our emails or by contacting our support team directly. Please note that you may still receive important service-related communications even after opting out of marketing messages.</p>
                </div>
              </div>
            </section>

            {/* Changes to Terms Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">CHANGES TO TERMS</h2>
              <p className="text-gray-600">
                The Company reserves the right to modify, change, substitute, remove, suspend or update these Terms or any information thereof at any time by posting the updated Terms on the Platform. Such changes shall be effective immediately upon such posting. Continued use of the Services or the Platform, subsequent to making the changes, shall be deemed to be your acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact Information Section */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Grievance Redressal Officer</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Name: Swati Aggarwal</p>
                    <p>Contact: +91-7814447895</p>
                    <p>Email: grievance@minibusinessloan.com</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">General Contact</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>General Queries: info@minibusinessloan.com</p>
                    <p>Existing Customers: support@minibusinessloan.com</p>
                    <p>Phone: 7814447895</p>
                    <p>Customer Support Hours: 09:00 AM to 05:30 PM (Monday to Saturday)</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Company Address</h3>
                  <p className="text-gray-600">
                    Lalita Park, Gurudwara,<br />
                    Lalita Park, New Delhi,<br />
                    East Delhi, Delhi, 110092
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsCondition
