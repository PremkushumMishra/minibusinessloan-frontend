import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Repay from "./pages/Repay";
import ContactUs from "./pages/ContactUs";
import Apply from "./pages/Apply";
import Navbar from "./components/Navbar";
import MobileVerification from "./components/MobileVerification";
import ApplicantPersonalDetails from "./components/ApplicantPersonalDetails";
// import AadhaarVerification from "./components/AadhaarVerification";
import ApplicantBusinessDetails from "./components/ApplicantBusinessDetails";
import ApplicationProcessing from "./components/ApplicationProcessing";
import ProtectedRoute from "./components/ProtectedRoute";
import NameEmailVerify from "./components/NameEmailVerify";
import KycProcess from "./components/KycProcess";
import KycSuccess from "./components/KycSuccess";
import AdditionalInfo from "./components/AdditionalInfo";
import CoApplicant from "./components/CoApplicant";
import TermsCondition from "./components/TermsCondition";  
import PrivacyPolicy from "./components/PrivacyPolicy";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/repay" element={<Repay />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/apply" element={<Apply />} />
        {/* Step-by-step journey starts here */}
        <Route path="/mobile-verification" element={<MobileVerification />} />
        {/* <Route path="/name-email-verify" element={<NameEmailVerify />} /> */}
        <Route
          path="/name-email-verify"
          element={
            <ProtectedRoute allowedStep="name-email-verify">
              <NameEmailVerify />
            </ProtectedRoute>
          }
        />

        <Route
          path="/kyc-process"
          element={
            <ProtectedRoute allowedStep="kyc-process">
              <KycProcess />
            </ProtectedRoute>
          }
        />

        <Route
          path="/kyc-sucess"
          element={
            <ProtectedRoute allowedStep="kyc-sucess">
              <KycSuccess />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/applicant-personal-details"
          element={
            <ProtectedRoute allowedStep="applicant-personal-details">
              <ApplicantPersonalDetails />
            </ProtectedRoute>
          }
        />
 */}

        {/* <Route path="/applicant-personal-details" element={<ApplicantPersonalDetails />} /> */}

        <Route
          path="/additional-info"
          element={
            <ProtectedRoute allowedStep="additional-info">
              <AdditionalInfo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/co-applicant"
          element={
            <ProtectedRoute allowedStep="co-applicant">
              <CoApplicant />
            </ProtectedRoute>
          }
        />

        <Route
          path="/applicant-business-details"
          element={
            <ProtectedRoute allowedStep="applicant-business-details">
              <ApplicantBusinessDetails />
            </ProtectedRoute>
          }
        />


        {/* optional */}
        {/* <Route path="/applicant-business-details-optional" element={<ApplicantBusinessDetails/>} /> */}

        <Route
          path="/application-processing"
          element={
            <ProtectedRoute allowedStep="application-processing">
              <ApplicationProcessing />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
