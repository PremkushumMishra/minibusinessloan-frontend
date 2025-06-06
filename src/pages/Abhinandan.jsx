import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moneyBag from "../assets/MoneyBag.jpg";
import API_CONFIG from "../config.js"; // Make sure this path is correct
import { StepContext } from "../context/StepContext";
import { fetchUserDetails } from "../utils/api";
import EsignPage from "./EsignPage";

const Abhinandan = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateStep } = useContext(StepContext);
  const [isEsignPage, setIsEsignPage] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      setStatus("");
      setMessage("");
      try {
        const token = localStorage.getItem("authToken");
        
        // First get user details to get customerID
        const userDetails = await fetchUserDetails(token, { navigate });
        console.log("User Details:", userDetails); // Debug log
        
        if (!userDetails || !userDetails.customerID) {
          setStatus("error");
          setMessage("Customer ID not found");
          return;
        }

        // 1. Get sanction amount using customerID
        const sanctionRes = await axios.post(
          `${API_CONFIG.BASE_URL}/sourcing/get-user-sanction-amount`,
          { 
            customerID: userDetails.customerID,
            // phoneNumber: userDetails.phoneNumber 
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const sanctionResult = sanctionRes.data;
        console.log("Sanction Result:", sanctionResult); // Debug log
        
        updateStep("esign-page");
        // Call fetchUserDetails after sanction API
        await fetchUserDetails(token, { navigate });

        if (sanctionResult && sanctionResult.status === true) {
          setData(sanctionResult.data);
          setStatus("success");
          setMessage(sanctionResult.message || "Sanction data fetched successfully!");
        } else {
          setStatus("error");
          setMessage(sanctionResult.message || "Failed to fetch sanction data.");
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
        setMessage("Network error. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleApplyNow = () => {
    // navigate("/esign-page", {
    //   state: {
    //     approvedLoanAmount: data?.sanctionAmount,
    //     Tenure: data?.tenure,
    //     ROI: data?.roi,
    //     accountNumber: data?.accountNumber,
    //     customerID: data?.customerID,
    //     borrower: data?.borrowerName,
    //   },
    // });
    updateStep("esign-page");
    setIsEsignPage(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh]">
      {/* Message */}
      {message && (
        <div
          className={`mb-4 px-6 py-3 rounded shadow text-white font-semibold transition-all duration-300 ${
            status === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message}
        </div>
      )}

     { !isEsignPage && (
      <div
        
        className={`flex items-center justify-between w-full max-w-2xl bg-white rounded-3xl shadow-md px-6 py-4 mt-4 transition hover:shadow-lg focus:outline-none ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Apply for business loan"
        disabled={isLoading || !data}
      >
        {/* Image */}
        <div className="flex-shrink-0 h-16 w-16 bg-blue-700 rounded-full flex items-center justify-center p-2">
          <img src={moneyBag} alt="Money Bag" className="h-full w-full object-contain" />
        </div>
        {/* Text */}
        <div className="flex-1 ml-4 text-left">
          <div className="text-lg font-bold text-blue-700 mb-1">
            अभिनंदन ! Loan application has been approved.
          </div>
          <div className="text-base text-blue-500">
            Proceed With E-Sign For Loan Disbursement
          </div>
          {data && data.sanctionAmount && (
            <div className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Sanctioned Amount: </span>
              ₹{data.sanctionAmount}
            </div>
          )}
          {data && data.customerID && (
            <div className="text-xs text-gray-500 mt-1">
              Customer ID: {data.customerID}
            </div>
          )}
        </div>
        {/* Icon */}
        <button
          onClick={handleApplyNow}
          className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center ml-4 transition hover:bg-blue-200 focus:outline-none"
          aria-label="Proceed to E-Sign"
          disabled={isLoading || !data}
        >
          <svg
            className="w-7 h-7 text-blue-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      )}
      {isLoading && (
        <div className="mt-4 text-blue-700 font-semibold">Loading...</div>
      )}

{
  isEsignPage && (
    <EsignPage 
    approvedLoanAmount={data?.sanctionAmount}
    Tenure={data?.tenure}
    ROI={data?.roi}
    accountNumber={data?.accountNumber}
    customerID={data?.customerID}
    borrower={data?.borrowerName}
  />
  )
}

    </div>
  );
};

export default Abhinandan;
