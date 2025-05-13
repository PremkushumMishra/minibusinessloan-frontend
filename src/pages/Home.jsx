import React from "react";
// import Navbar from '../components/Navbar';
import TalkingLoan from "../components/TalkingLoan";
import Frequently from "../components/Frequently";
import LoanCalculator from "../components/LoanCalculator";
import GetAmount from "../components/GetAmount";
import WhyChoose from "../components/WhyChoose";
import Lorem from "../components/Lorem";
import PublicReview from "../components/PublicReview";
import KycSuccess from "../components/KycSuccess";
import ApplicantBusinessDetails from "../components/ApplicantBusinessDetails";
import LoanEligiblity from "../components/LoanEligiblity";
// import ApplicantPersonalDetails from "../components/ApplicantPersonalDetails";
import CoApplicant from '../components/CoApplicant';
import AdditionalInfo from '../components/AdditionalInfo';
import EligibleProfile from '../components/EligibleProfile';
import AppDownload from '../components/AppDownload';
import BankStatement from "../components/BankStatement";
import BsaRejectes from "../components/BsaRejectes";
const Home = () => {
  return (
    <>
      {/* <div className="pt-20">  */}
      <TalkingLoan />
      <EligibleProfile/>
      <Lorem />
      <LoanCalculator />
      <WhyChoose />
      <AppDownload/>
      {/* <BsaRejectes/> */}
      <PublicReview />
      <GetAmount />
      {/* <KycSuccess /> */}
      {/* <CoApplicant/> */}
      {/* <ApplicantPersonalDetails/> */}
      {/* <ApplicantBusinessDetails /> */}
      {/* <LoanEligiblity/> */}
      {/* <AdditionalInfo/> */}
      <BankStatement/>
      </>
  );
};

export default Home;
