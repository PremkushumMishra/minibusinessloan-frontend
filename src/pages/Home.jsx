import React from "react";
// import Navbar from '../components/Navbar';
import TalkingLoan from "../components/TalkingLoan";
// import Frequently from "../components/Frequently";
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
import SanctionLatter from "./SanctionLatter";
import ChatBot from "../components/ChatBot";
import NameEmailVerify from "../components/NameEmailVerify";
// import Frequently from "../components/Frequently";
import Hindi from "./Hindi";
import Frequently from "../components/Frequently";
import NewWhy from "../components/NewWhy"
import MblSanctionlatter from "./MblSanctionlatter";
import BankVerificationProcess from "./BankVerificationProcess";
import BankVerificationGlobalModal from "./BankVerificationGlobalModal";
const Home = () => {
  return (
    <>
      {/* <div className="pt-20">  */}
      {/* <MblSanctionlatter/> */}
      {/* <BankVerificationProcess/> */}
{/* <BankVerificationGlobalModal visible={true} onClose={() => {}} /> */}
      <TalkingLoan />
      {/* <Hindi/> */}
      <EligibleProfile/>
      {/* <Lorem /> */}
      {/* <NewWhy/> */}
      <WhyChoose />
    
          <LoanCalculator />
      {/* <BsaRejectes/> */}
       <PublicReview /> *

      <AppDownload/>  

      <Frequently/>
      {/* <NameEmailVerify/>   */}
      {/* <SanctionLatter/> */}
      {/* <GetAmount /> */}
      {/* <KycSuccess /> */}
      {/* <CoApplicant/> */}
      {/* <ApplicantPersonalDetails/> */}
      <ApplicantBusinessDetails />
      {/* <LoanEligiblity/> */}
      {/* <AdditionalInfo/> */}
      {/* <BankStatement/> */}
      <ChatBot/>
      </>
  );
};

export default Home;
