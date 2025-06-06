import React, { useState, useContext } from "react";
import { StepContext } from "../context/StepContext";
import { fetchUserDetails } from "../utils/api";
import { useNavigate } from "react-router-dom";
const EsignPage = ({approvedLoanAmount, Tenure, ROI, accountNumber, customerID, borrower}) => {

  const { updateStep } = useContext(StepContext);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [kycURL, setKycURL] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  // Calculate loan details
  React.useEffect(() => {
    if (approvedLoanAmount) {
      const repaymentAmount =
        (parseInt(approvedLoanAmount) * 20) / 100 +
        parseInt(approvedLoanAmount);
      const processingFee =
        (((parseInt(approvedLoanAmount) * 10) / 100) * 18) / 100 +
        (parseInt(approvedLoanAmount) * 10) / 100;
      const EMI = (repaymentAmount / parseInt(Tenure))?.toFixed(0);
      const netDisbursement = parseInt(approvedLoanAmount) - processingFee;
      setData({
        repaymentAmount,
        processingFee,
        EMI,
        netDisbursement,
      });
    }
  }, [approvedLoanAmount, Tenure]);

  // Dummy function for e-sign
  const handleContinue = async () => {

    const token = localStorage.getItem("authToken");

    const userDetails = await fetchUserDetails(token, { navigate });
    const response = await axios.post(`${API_CONFIG.BASE_URL}/sourcing/preview-sanction`, {     
      customerID: userDetails.customerID, 
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    // open a blank page with google.com
    window.open("https://www.google.com", "_blank");
    // window.location.navigate("/esign-page;")

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setKycURL("https://www.example.com/esign"); // Replace with real URL
      setLoading(false);
    }, 1000);
  };

  // Dummy function for processing sanction
  const processSanction = () => {
    setModalVisible(true);
    setKycURL(null);
    updateStep("abhinandan"); // Update step after e-sign
  };

  // Handle iframe navigation (simulate e-sign success)
  const handleIframeLoad = (e) => {
    if (e.target.src.includes("google.com")) {
      processSanction();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Loan Sanction Details</h2>
        {kycURL ? (
          <div className="w-full h-96 mb-4">
            <iframe
              src={kycURL}
              title="E-Sign"
              className="w-full h-full rounded-lg border"
              onLoad={handleIframeLoad}
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Complete your e-sign process in the window above.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-700 mb-4">
              Please review and sign the loan agreement below
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <DetailRow label="Loan Amount" value={`₹${approvedLoanAmount}`} />
              <DetailRow
                label="Tenure"
                value={Tenure === 14 ? `${Tenure} Weeks` : `${Tenure} Days`}
              />
              <DetailRow label="Repayment Amount" value={`₹${data?.repaymentAmount || ""}`} />
              <DetailRow
                label={`Installment (${Tenure === 14 ? "Weekly" : "Daily"})`}
                value={`₹${data?.EMI || ""}`}
              />
              <DetailRow label="Interest Rate" value={ROI} />
              <DetailRow label="Processing Fee" value={`₹${data?.processingFee || ""}`} />
              <DetailRow
                label="Net Disbursement Amount"
                value={`₹${data?.netDisbursement || ""}`}
              />
              <DetailRow label="Account Number" value={accountNumber} />
              <DetailRow label="Customer ID" value={customerID} />
              <DetailRow label="Borrower" value={borrower} />
            </div>
            <div className="bg-yellow-100 rounded p-3 mb-4 text-sm font-semibold text-gray-700">
              <ul className="list-disc pl-5">
                <li>
                  The loan amount will be disbursed to customer's bank account ending with {accountNumber?.slice(-5) || "N/A"}
                </li>
                <li>Late payment charges will be applicable for delayed payments</li>
              </ul>
            </div>
            <button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-bold transition"
              onClick={handleContinue}
              disabled={loading}
            >
              {loading ? "Processing..." : "E-Sign Using Aadhar OTP"}
            </button>
          </div>
        )}
      </div>
      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-xl text-center">
            <h3 className="text-xl font-bold mb-2">E-Sign Completed</h3>
            <p className="mb-4">You have successfully completed the E-Sign process.</p>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-bold"
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between py-1">
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default EsignPage;
