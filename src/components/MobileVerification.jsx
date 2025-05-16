import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/StepContext";
import axios from "axios";
import API_CONFIG from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// protect routing
// import { useStep } from "../context/useStep";
const TERMS_CONTENT = (
  <div className="max-h-[60vh] overflow-y-auto px-2 py-4 bg-white border-l-8 border-black rounded-xl shadow-lg text-black">
    {/* <h2 className="text-2xl font-bold text-black mb-4">Terms and Conditions</h2> */}
    {/* <p className="text-black  mb-3">PLEASE READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY. THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN (COUSTOMER RICHCRDIT NBFC), ALONG WITH BUSINESS SOURCING PARTNER TECH AVIOM FINANCE.</p>
    <p className="mb-3">BY CLICKING "I ACCEPT" OR "I AGREE," OR BY DOWNLOADING, INSTALLING, OR USING THE SERVICES IN ANY MANNER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE, INSTALL, OR ACCESS THE SERVICES.</p> */}

    <p className="text-black mb-3">
      PLEASE READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY. THESE TERMS
      CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU ("BORROWER") &
      RICHCREDIT ("NBFC"), AND TECH AVIOM FINANCE ("BUSINESS SOURCING PARTNER").
    </p>
    <p className="mb-3">
      BY CLICKING "I ACCEPT" OR "I AGREE," OR BY DOWNLOADING, INSTALLING, OR
      USING OUR SERVICES IN ANY FORM, YOU CONFIRM THAT YOU HAVE READ,
      UNDERSTOOD, AND AGREED TO BE LEGALLY BOUND BY THESE TERMS. IF YOU DO NOT
      AGREE WITH ANY OF THESE TERMS, YOU MUST NOT USE, INSTALL, OR ACCESS THE
      SERVICES.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">DEFINITIONS</h3>
    <ul className="list-disc pl-6 mb-3 space-y-1">
      <li>
        "Web Platform","Application" or "App" refers to "Mini Business Loan" the web
        platform/ mobile software application developed and maintained by the
        Company to facilitate access to its Services.
      </li>
      <li>
        "LENDER" denotes the financial institutions, including banks and
        non-banking financial companies, that partner with the Company to
        sanction, process, and disburse loans via the Platform.
      </li>
      <li>
        "Company" or "we" means RICHCREDIT, a platform managed by Techaviom Finance
        Private Limited, incorporated under the Companies Act, 2013, and
        administered by its appointed representatives.
      </li>
      <li>
        "Customer(s)," "you," or "End-Users" refers to any person who visits,
        downloads, accesses, or uses the Platform or Services.
      </li>
      <li>
        "Loan" means the credit facility that a Customer may apply for through
        the Platform, which is subsequently sanctioned by the LENDER under
        mutually agreed terms.
      </li>
      <li>
        "Loan Agreement" refers to the agreement executed between the Customer
        and the LENDER for the provision of the Loan, in physical or electronic
        form.
      </li>
      <li>
        "Outstanding Amount(s)" includes the total of the principal loan,
        interest, fees, penalties, and other charges due to the LENDER.
      </li>
      <li>
        "Platform" collectively refers to both the mobile Application and the
        official Website.
      </li>
      <li>
        "Services" means the facilitation of short-term lending solutions
        offered by the LENDER through the Platform.
      </li>
      <li>
        "Third Party Platforms" refers to external websites or applications such
        as Facebook, LinkedIn, or other social media or data services.
      </li>
      <li>
        "User Data" includes all personal or financial information, documents,
        or materials submitted or uploaded by the Customer during or prior to
        availing the Services.
      </li>
      <li>
        "Website" refers to www.minibusinessloan.com, the official web portal managed
        by the Company for rendering its Services.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      DESCRIPTION OF SERVICES
    </h3>
    <p className="mb-2">
      The Platform enables eligible Customers to apply for credit facilities
      subject to verification and validation of requisite criteria. The Company,
      acting on behalf of the LENDER, may collect, verify, and assess User Data
      and related documents to process such applications.
    </p>
    <p className="mb-2">
      By using the Services, you consent to the Company accessing, importing,
      and processing your data, including information sourced from Third Party
      Platforms, for the purpose of validating your credentials. You also
      acknowledge and agree that updates to your information may be periodically
      fetched from such sources to ensure continued compliance with applicable
      laws and regulations.
    </p>
    <p className="mb-2">
      Data obtained from Central KYC Registry, UIDAI, or similar KYC
      verification systems is used strictly in accordance with the Prevention of
      Money Laundering Act, 2002 and RBI's KYC Master Directions, 2016. You
      hereby provide your informed and voluntary consent authorizing the Company
      and the LENDER to access, store, use, and process such information as
      required for regulatory or operational purposes.
    </p>
    <p className="mb-2">
      Loan disbursement shall be made through the method opted by the Customer
      on the Platform. Customers are obliged to repay all Outstanding Amounts to
      the LENDER on or before the stipulated due dates as reflected within the
      Application.
    </p>
    <p className="mb-2">
      The Company reserves the right to track the Customer's location during and
      after the use of the Services, including in cases where the Application is
      uninstalled or discontinued, until all financial obligations to the LENDER
      are fully discharged. Discontinuation of the Platform shall not absolve
      the Customer from repayment responsibilities.
    </p>
    <p className="mb-2">
      Customers are solely responsible for maintaining the confidentiality and
      security of their user credentials and for any activity conducted under
      their account. The Company disclaims all liability for loss, damages, or
      claims arising from unauthorized access or misuse of the Services. We
      reserve the right to accept or deny service requests at our sole
      discretion without obligation to provide reasoning.
    </p>
    <p className="mb-2">
      The performance of the Platform is contingent on the technical
      capabilities of the Customer's device and network connectivity. It is the
      Customer's responsibility to ensure that such devices and networks meet
      the minimum requirements for Service usage.
    </p>
    <p className="mb-2">
      The Company and its Lenders adhere to the RBI's Fair Practices Code and
      Digital Lending Guidelines, including disclosure of the Key Fact Statement
      (KFS), loan terms, interest rates, and recovery practices.
    </p>
    <p className="mb-2">
      By accepting these Terms, you authorize the Company to access, track, and
      process your Personal Information and User Data for identity
      authentication, creditworthiness evaluation, and operational continuity.
    </p>
    <p className="mb-2">
      These Terms govern platform usage and do not replace the Loan Agreement
      executed between the Customer and the Lender, which shall prevail in the
      event of any conflict between the two documents.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      CONSENT FOR COMMUNICATION
    </h3>
    <p className="mb-2">
      You hereby expressly consent to and authorize the Company, its
      representatives, affiliates, or LENDING/NBFC partners, including employees
      or agents, to contact you via phone calls, SMS, or other communication
      modes to share transaction-related updates, promotional offers, and
      product information.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">REGULATIONS</h3>
    <ul className="list-decimal pl-6 mb-3 space-y-1">
      <li>
        Engage in any fraudulent activities, embezzlement, money laundering, or
        unlawful conduct of any nature.
      </li>
      <li>
        Reproduce, duplicate, copy, sell, resell, or otherwise exploit any
        portion of the Platform without proper authorization.
      </li>
      <li>
        Upload, post, email, transmit, or make available any content that is
        unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar,
        obscene, libelous, invasive of another's privacy, hateful, or otherwise
        objectionable based on race, ethnicity, or other discriminatory grounds.
      </li>
      <li>Use the Platform to cause harm or injury to any third party.</li>
      <li>Impersonate any individual or entity while using the Platform.</li>
      <li>
        Forge headers or manipulate identifiers to obscure the origin of any
        content transmitted through the Platform.
      </li>
      <li>
        Upload, post, email, transmit, or otherwise make available any content
        that you do not have the legal right to disseminate under applicable
        laws or contractual or fiduciary obligations.
      </li>
      <li>
        Upload, post, email, transmit, or otherwise make available any content
        that infringes upon the intellectual property rights of any party.
      </li>
      <li>
        Upload, post, email, transmit, or otherwise make available any
        unsolicited or unauthorized advertising, promotional materials, "junk
        mail," "spam," "chain letters," "pyramid schemes," or any other form of
        solicitation.
      </li>
      <li>
        Upload, post, email, transmit, or otherwise make available any material
        containing software viruses or any other computer code, files, or
        programs designed to disrupt, damage, or limit the functionality of any
        computer software, hardware, or telecommunications equipment.
      </li>
      <li>
        Disrupt the normal flow of communication or otherwise act in a manner
        that negatively affects other users' ability to engage in real-time
        interactions.
      </li>
      <li>
        Interfere with or disrupt the operation of the Platform or servers or
        networks connected to the Platform.
      </li>
      <li>
        Intentionally or unintentionally violate any applicable local, state,
        national, or international laws, regulations, or ordinances with the
        force of law.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      CONTENT AVAILABLE
    </h3>
    <p className="mb-2">
      You acknowledge that the Company makes no representations or warranties
      about the material, data, and information, such as data files, text, facts
      and figures, computer software, code, audio files or other sounds,
      photographs, videos, or other images (collectively, the "Content") which
      you may have access to as part of the Services, or through your use of the
      Platform. Under no circumstances, shall the Company be liable in any way
      for any Content, including, but not limited to any infringing Content, any
      errors or omissions in Content, or for any loss or damage of any kind
      incurred as a result of the use of any Content posted, transmitted, linked
      from, or otherwise accessible through or made available via the Platform.
      The Content on the Platform should not be regarded as an offer,
      solicitation, invitation, advice or recommendation to buy or sell
      investments, securities or any other instrument or financial products.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      PROPRIETARY RIGHTS OF THE COMPANY
    </h3>
    <p className="mb-2">
      You understand, acknowledge and agree that the Company is the sole owner
      of all rights, title and interest, including any and all intellectual
      property rights in the Content, Platform, Services, logos, trade names,
      brand names, designs and any necessary software used in connection with
      the Platform.
    </p>
    <p className="mb-2">
      There may be proprietary logos, service marks and trademarks found on the
      Platform whether owned/used by the Company or otherwise. By displaying
      them on the Platform, the Company is not granting you any license to
      utilize the proprietary logos, service marks, or trademarks. Any
      unauthorized use of the same may violate applicable intellectual property
      laws.
    </p>
    <p className="mb-2">
      You understand and acknowledge that the Platform is owned by the Company.
      Nothing under these Terms shall be deemed to be a transfer in ownership,
      rights, title, from the Company to you or any third party, in the
      Platform. You are entitled to avail the Services offered by the Company
      during the validity of your registration with the Company.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      USE OF THIRD-PARTY APIS/PLATFORMS
    </h3>
    <p className="mb-2">
      Our services may incorporate or rely on data obtained through third-party
      Application Programming Interfaces ("APIs"). These third-party APIs are
      used to enhance functionality and provide up-to-date information. By using
      our services, you acknowledge and agree that such data is subject to the
      availability, accuracy, and terms of service of the respective third-
      party providers. We do not guarantee the uninterrupted availability or
      accuracy of data sourced from these external APIs and shall not be held
      liable for any errors, omissions, or delays in the content provided by
      such third parties. The list of APIs/Platforms are as follows:
    </p>
    <ul className="list-disc pl-6 mb-3 space-y-1">
      {/* <li>Surepass</li> */}
      <li>Novel Pattern</li>
      {/* <li>Credgenics</li> */}
    </ul>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">TERMINATION</h3>
    <ul className="list-disc pl-6 mb-2">
      <li>you breach any provision of these Terms;</li>
      <li>the Company is required to do so under law;</li>
      <li>
        the Company chooses to discontinue the Services being offered or
        discontinue to operate the Platform;
      </li>
      <li>the license granted to use the App expires;</li>
      <li>of non-payment of Outstanding Amount(s).</li>
    </ul>
    <p className="mb-2">
      The Company reserves its right to Track you, even when you have
      uninstalled the App or even after termination of these Terms, until all
      your obligations, including but not limited to payment of the Outstanding
      Amount(s) is in subsistence.
    </p>
    <p className="mb-2">
      Upon termination of these Terms, the rights and licenses granted to you
      under these Terms shall cease to exist, and you must forthwith stop using
      the Platform and the Services and repay the Outstanding Amount(s).
      Notwithstanding anything contained in these Terms or otherwise, the
      termination of these Terms for any reason whatsoever, shall not affect
      your obligations, including but not limited to repayment of the
      Outstanding Amount(s).
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">INDEMNITY</h3>
    <p className="mb-2">
      You agree to indemnify and hold the Company, and its subsidiaries,
      affiliates, officers, agents, co-branders or other partners, and
      employees, harmless from any claim or demand, including attorneys' fees,
      made by any third party due to or arising out of (i) your violation of
      these Terms; (ii) your violation of any rights of other users of the
      Platform; (iii) your use or misuse of the Platform or the Services; (iv)
      your violation of applicable laws.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      LIMITATIONS OF LIABILITY
    </h3>
    <ul className="list-disc pl-6 mb-2">
      <li>use or the inability to avail the Services</li>
      <li>inability to use the Platform</li>
      <li>
        failure or delay in providing the Services or access to the Platform
      </li>
      <li>any performance or non-performance by the Company</li>
      <li>
        any damages to or viruses that may infect your electronic devices or
        other property as the result of your access to the Platform or your
        downloading of any content from the Platform
      </li>
      <li>
        server failure or otherwise or in any way relating to the Services
      </li>
    </ul>
    <p className="mb-2">
      You expressly understand and agree that the Company, including its
      directors, officers, employees, representatives or the service provider,
      shall not be liable for any direct, indirect, incidental, special,
      consequential or exemplary damages, including but not limited to, damages
      for loss of profits, goodwill, use, data or other intangible losses (even
      if the Company has been advised of the possibility of such damages),
      resulting from the above.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">FORCE MAJEURE</h3>
    <p className="mb-2">
      Notwithstanding anything to the contrary herein, the Company shall not be
      held liable for any loss, damage, or unavailability of the Platform or
      Services arising from any failure or deficiency in performance, whether in
      whole or in part, caused directly or indirectly by events, circumstances,
      or conditions beyond the reasonable control of the Company. Such events
      include, but are not limited to, acts of God, natural disasters, internet
      outages, failures of computer or telecommunication systems, changes in
      applicable laws or regulations (including those issued by the Reserve Bank
      of India), power outages, government actions, civil unrest, riots, or
      other force majeure events.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">YOUR RIGHTS</h3>
    <ul className="list-disc pl-6 mb-2">
      <li>
        <b>Access and Update Your Personal Information:</b> You have the right
        to request access to the personal information we hold about you. This
        includes the right to view, verify, and request corrections or updates
        to ensure your information remains accurate and up to date.
      </li>
      <li>
        <b>Withdraw Consent for Data Collection and Usage:</b> You may withdraw
        your consent for us to collect, use, or process your personal data at
        any time. Upon receiving such a request, we will cease processing your
        data unless we are legally required or permitted to retain it for
        specific purposes.
      </li>
      <li>
        <b>Opt Out of Marketing Communications:</b> You have the right to opt
        out of receiving promotional or marketing communications from us at any
        time. This can typically be done by following the unsubscribe link
        provided in our emails or by contacting our support team directly.
        Please note that you may still receive important service-related
        communications even after opting out of marketing messages.
      </li>
    </ul>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">CHANGES TO TERMS</h3>
    <p className="mb-2">
      The Company reserves the right to modify, change, substitute, remove,
      suspend or update these Terms or any information thereof at any time by
      posting the updated Terms on the Platform. Such changes shall be effective
      immediately upon such posting. Continued use of the Services or the
      Platform, subsequent to making the changes, shall be deemed to be your
      acceptance of the revised Terms.
    </p>

    <h3 className="text-xl font-bold text-black mt-6 mb-2">
      DISCLOSURE & CONTACT INFORMATION
    </h3>
    {/* <p className="mb-2">Grievance Redressal Officer: Swati Aggarwal</p> */}
    <p className="mb-2">Support Number: +91-7814447895</p>
    <p className="mb-2">Email ID: info@minibusinessloan.com</p>
    <p className="mb-2"> Lalita Park, New Delhi, East Delhi, Delhi, 110092</p>
    <p className="mb-2">
      Customer Support Hours: 10:00 AM to 06:30 PM (Monday to Saturday)
    </p>
  </div>
);

const Modal = ({ open, onClose, onAgree, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-[#E53935] font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="px-8 pt-8 pb-4 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Terms and Conditions
          </h2>
          <div
            className="overflow-y-auto max-h-[45vh] pr-2 text-gray-800"
            style={{ scrollbarWidth: "thin" }}
          >
            {children}
          </div>
        </div>
        <div className="flex gap-4 px-8 pb-8">
          <button
            onClick={onClose}
            className="w-1/2 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
          >
            Decline
          </button>
          <button
            onClick={onAgree}
            className="w-1/2 py-3 rounded-lg bg-[#991B1B] text-white font-semibold hover:bg-[#B91C1C] transition"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileVerification = () => {
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigate = useNavigate();
  const { updateStep } = useStep();
  const [clientId, setClientId] = useState("");

  // API Configuration - Just change these URLs when switching APIs
  const API_CONFIG = {
    // local host url
    // BASE_URL: "http://10.6.3.90:3000/api/v1",
    // live url
    BASE_URL: "http://103.104.73.107:3004/api/v1",
    ENDPOINTS: {
      SEND_OTP: "/send-otp",
      VERIFY_OTP: "/verify-otp",
      RESEND_OTP: "/resend-otp",
    },
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    
    // Only allow digits
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Limit to 10 digits
    if (value.length <= 10) {
      setMobileNumber("+91" + value);
    }
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 13) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try {
      // Send OTP using axios to the new API endpoint
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      const response = await axios.post(
        // 'http://103.104.73.107:3004/api/v1/auth/generate-otp-customer',
        `${API_CONFIG.BASE_URL}/auth/generate-otp-customer`,
        {
          phone: mobileNumberWithoutPrefix,
          appliedMode: "web",
          sourceBy: "null",
        },
        { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "" } }
      );

      console.log("API Response:", response.data);

      // You can check response.data for success or error
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        // receive client_id
        const receivedClientId = response.data?.data?.client_id;
        setClientId(receivedClientId);
        setShowOtpInput(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

// use protect routing
  // const { setCurrentStep } = useStep(); 
  
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    console.log("OTP Length:", otp.length);

    if (otp.length !== 6 && otp.length !== 4) {
      toast.error("Please enter a valid 4 or 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      // const client_id = "your_client_id_here";
      const response = await axios.post(
        // "http://10.6.3.57:3000/api/v1/auth/verify-otp-customer",
        // live url
        // "http://103.104.73.107:3004/api/v1/auth/verify-otp-customer",
        `${API_CONFIG.BASE_URL}/auth/verify-otp-customer`,
        { phone: mobileNumberWithoutPrefix, otp: otp, client_id: clientId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("OTP verify response:", response.data);

      // if (response.data && response.data.status) {
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        // ✅ Save the JWT token in localStorage
        const token = response.data.data;
        console.log("✅ Received token from OTP verify:", response); // 👈 Debug line

        localStorage.setItem("authToken", `${token}`);
        // localStorage.setItem("authToken", `Bearer ${token}`);

        setVerificationStatus("success");
        toast.success("OTP Verified Successfully!");

        setTimeout(() => {
          // protect krte time upadtestep ko remove krke isko uncomment krna h 
          // setCurrentStep("name-email-verify"); // ✅ Step set

          updateStep("aadhaar-verification");
          navigate(
            `/name-email-verify?mobileNumber=${mobileNumberWithoutPrefix}`
          );
        }, 1000);
      } else {
        setVerificationStatus("error");
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const mobileNumberWithoutPrefix = mobileNumber.slice(3);
      const response = await axios.post(
        "http://10.6.3.57:3000/api/v1/auth/generate-otp-customer",
        // `${API_CONFIG.BASE_URL}/auth/generate-otp-customer`,
        { phone: mobileNumberWithoutPrefix, appliedMode: "web" },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("OTP resend response:", response.data);
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error(response.data.message || "Failed to resend OTP");
      }
    } catch (err) {
      console.error("Error resending OTP:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#003366] flex items-center justify-center py-8 px-2  sm:px-4">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-sm space-y-5 bg-white p-3 sm:p-5 sm:mt-14 rounded-3xl shadow-2xl border-2 border-[#003366]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366]">
            Enter Your Mobile Number
          </h2>
          <p className="mt-3 text-[#003366] text-lg font-medium">
            Please provide your Aadhaar-linked mobile number.
          </p>
        </div>

        {!showOtpInput ? (
          // Mobile Number Input Form
          <form className="mt-8 space-y-6" onSubmit={handleMobileSubmit}>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mobile Number
              </label>
              <div className="relative group">
                <div className="flex">
                  <div className="flex items-center justify-center px-4 py-4 bg-[#003366] text-white font-medium rounded-l-2xl border-2 border-[#003366]">
                    +91
                  </div>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                    value={mobileNumber.slice(3)}
                  onChange={handleMobileChange}
                    className="appearance-none block w-full px-4 py-4 border-2 border-[#003366] rounded-r-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all duration-200 text-lg font-medium tracking-wider group-hover:border-[#E53935]"
                    placeholder="Enter mobile number"
                />
                </div>
              </div>
            </div>

            {/* Consent Section with Modal Link */}
            <div className="mt-6 flex items-center">
              <input
                id="consent"
                type="checkbox"
                checked={hasConsented}
                readOnly
                onClick={() => setShowTermsModal(true)}
                className="h-5 w-5 text-[#E53935] focus:ring-[#E53935] border-[#003366] rounded cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="ml-2 block text-base select-none cursor-pointer"
                style={{ color: "#b48b8b", fontWeight: 500 }}
                onClick={() => setShowTermsModal(true)}
              >
                I agree to the{' '}
                <span
                  className="font-bold text-[#8B1A1A] hover:underline focus:outline-none cursor-pointer"
                  style={{ fontWeight: 700 }}
                >
                  terms and conditions
                </span>
              </label>
            </div>

            <Modal
              open={showTermsModal}
              onClose={() => setShowTermsModal(false)}
              onAgree={() => {
                setHasConsented(true);
                setShowTermsModal(false);
              }}
            >
              {TERMS_CONTENT}
            </Modal>

            <div>
              <button
                type="submit"
                disabled={
                  isLoading || mobileNumber.length !== 13 || !hasConsented
                }
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-[#003366] to-[#E53935] hover:from-[#002244] hover:to-[#b71c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935] transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                  isLoading || mobileNumber.length !== 13 || !hasConsented
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending OTP...
                  </span>
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </form>
        ) : (
          // OTP Input Form
          <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Enter OTP
              </label>
              <div className="relative group">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength="6"
                  className="appearance-none block w-full px-4 py-4 border-2 border-[#003366] rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:border-transparent transition-all duration-200 text-center tracking-[0.5em] text-2xl font-semibold group-hover:border-[#E53935]"
                  placeholder="Enter OTP"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isLoading}
                className="text-sm font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200"
              >
                Resend OTP
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-base font-medium text-white bg-gradient-to-r from-[#003366] to-[#E53935] hover:from-[#002244] hover:to-[#b71c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E53935] transform hover:scale-[1.02] transition-all duration-200 shadow-lg ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Verification Status Messages */}
        {verificationStatus === "success" && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 transform transition-all duration-300 animate-fade-in shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-4xl">✅</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Verification Successful!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  Your mobile number has been verified successfully.
                </p>
              </div>
            </div>
          </div>
        )}

        {verificationStatus === "error" && (
          <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-100 transform transition-all duration-300 animate-fade-in shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-4xl">❌</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-red-800">
                  Verification Failed
                </h3>
                <p className="text-sm text-red-700 mt-1">
                  The OTP you entered is incorrect. Please try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        {showOtpInput && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setShowOtpInput(false);
                setOtp("");
                setVerificationStatus(null);
              }}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-1"
              style={{ color: "#003366" }}
            >
              <span>←</span>
              <span>Back to Mobile Number</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileVerification;
