import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useStep } from "../context/useStep";
import axios from "axios";
import API_CONFIG from "../config";

const ApplicantBusinessDetails = () => {
  const navigate = useNavigate();
  // const { updateStep } = useStep();

  console.log("applicant business details");

  const [formData, setFormData] = useState({
    udyamNumber: "",
    udyamRegistrationDate: "",
    gstNumber: "",
    businessName: "",
    businessNature: "",
    loanPurpose: "",
    businessVintage: "",
    businessAddress: "",
    noOfStaff: "",
    averageTurnoverLakhs: "",
    electricityBill: null,
    billScanned: false,
    businessPhoto: null,
    itrNumber: "",
    udyamPhone: "",
    udyamOtp: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [businessNatureOptions, setBusinessNatureOptions] = useState([]);
  const [loanPurposeOptions, setLoanPurposeOptions] = useState([]);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  // Add verification states
  const [verificationStatus, setVerificationStatus] = useState({
    udyamNumber: {
      loading: false,
      verified: false,
      error: null,
      showOtpInput: false,
    },
    gstNumber: { loading: false, verified: false, error: null },
    electricityBill: { loading: false, verified: false, error: null },
  });

  // Add state for electricity bill input type and bill number

  const [electricityBillInputType, setElectricityBillInputType] =
    useState("upload");

  const [userEnteredBillNumber, setUserEnteredBillNumber] = useState("");
  const [selectedOperatorCode, setSelectedOperatorCode] = useState("");

  const [customerID, setCustomerID] = useState(null);

  // const getAuthToken = () => {
  //   // Get token from localStorage (should already have 'Bearer ...')
  //   return localStorage.getItem("authToken") || "";
  // };
  // verify udyam number

  const verifyUdyamNumber = async (number) => {
    if (!number) return;

    setVerificationStatus((prev) => ({
      ...prev,
      udyamNumber: {
        loading: true,
        verified: false,
        error: null,
        showOtpInput: false,
      },
    }));

    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/send-otp-udyam`,
        {
          registration_number: number,
          phone: formData.udyamPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      // If OTP is sent successfully, show OTP input
      if (response.data) {
        setVerificationStatus((prev) => ({
          ...prev,
          udyamNumber: {
            loading: false,
            verified: false,
            error: null,
            showOtpInput: true,
          },
        }));
      }
    } catch (error) {
      setVerificationStatus((prev) => ({
        ...prev,
        udyamNumber: {
          loading: false,
          verified: false,
          error: error.response?.data?.message || "Verification failed",
          showOtpInput: false,
        },
      }));
    }
  };

  // Verify UDYAM OTP
  const verifyUdyamOtp = async () => {
    if (!formData.udyamOtp) return;

    setVerificationStatus((prev) => ({
      ...prev,
      udyamNumber: { ...prev.udyamNumber, loading: true },
    }));

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/verify-otp-udyam`,
        {
          client_id: "udyam_otp_pDompboGAwibgt",
          otp: formData.udyamOtp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data?.verified) {
        setVerificationStatus((prev) => ({
          ...prev,
          udyamNumber: {
            loading: false,
            verified: true,
            error: null,
            showOtpInput: false,
          },
        }));
      }
    } catch (error) {
      setVerificationStatus((prev) => ({
        ...prev,
        udyamNumber: {
          loading: false,
          verified: false,
          error: error.response?.data?.message || "OTP verification failed",
          showOtpInput: true,
        },
      }));
    }
  };

  // verify gst number
  const verifyGSTNumber = async (number) => {
    if (!number) return;

    setVerificationStatus((prev) => ({
      ...prev,
      gstNumber: { loading: true, verified: false, error: null },
    }));

    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/validate-gstin`,
        {
          gstin: number,
          customerID: customerID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Authorization: getAuthToken(),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.data?.success) {
        setVerificationStatus((prev) => ({
          ...prev,
          gstNumber: { loading: false, verified: true, error: null },
        }));
      } else {
        throw new Error(response.data?.message || "GST verification failed");
      }
    } catch (error) {
      setVerificationStatus((prev) => ({
        ...prev,
        gstNumber: {
          loading: false,
          verified: false,
          error: error.response?.data?.message || "GST verification failed",
        },
      }));
    }
  };

  const fetchBusinessNatureAndPurpose = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}/sourcing/business-nature-purpose`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log("Dropdown response:", response.data); // Debug line

      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS" &&
        response.data?.data
      ) {
        setBusinessNatureOptions(response.data.data.nature || []);
        setLoanPurposeOptions(response.data.data.purpose || []);
      } else {
        alert("Failed to fetch dropdown options.");
        setBusinessNatureOptions([]);
        setLoanPurposeOptions([]);
      }
    } catch (error) {
      console.error("Error fetching options:", error);
      setBusinessNatureOptions([]);
      setLoanPurposeOptions([]);
    }
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "udyamNumber":
        if (value) {
          // UDYAM format: UDYAM-XX-00-0000000
          const udyamRegex = /^UDYAM-[A-Z]{2}-\d{2}-\d{7}$/;
          if (!udyamRegex.test(value.trim().toUpperCase())) {
            error = "Invalid UDYAM number format (e.g. UDYAM-XX-00-0000000)";
          }
        }
        break;
      case "udyamRegistrationDate":
        // Optional field - no validation
        break;
      case "gstNumber":
        if (value) {
          // GST format: 22AAAAA0000A1Z5
          const gstRegex =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
          if (!gstRegex.test(value.trim().toUpperCase())) {
            error = "Invalid GST number format (e.g. 22AAAAA0000A1Z5)";
          }
        }
        break;
      case "businessName":
        if (!value.trim()) error = "Business Name is required";
        break;
      case "businessNature":
        // Optional field - no validation
        break;
      case "loanPurpose":
        // Optional field - no validation
        break;
      case "businessVintage":
        if (!value.trim()) error = "Business Vintage is required";
        break;
      case "businessAddress":
        if (!value.trim()) error = "Business Address is required";
        break;
      case "noOfStaff":
        if (!/^[0-9]+$/.test(value)) error = "Please enter a valid number";
        break;
      case "averageTurnoverLakhs":
        if (!/^[0-9]+$/.test(value)) error = "Please enter a valid amount";
        break;

      case "businessPhoto":
        if (!value) error = "Business Photo is required";
        break;
      case "itrNumber":
        // Optional field - no validation
        break;
      default:
        break;
    }
    return error;
  };

  // Modified handleChange to trigger verifications
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let val = files ? files[0] : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: val,
    }));

    // Only trigger verifications for GST and electricity bill on change
    if (name === "gstNumber" && value) {
      verifyGSTNumber(value);
    } else if (name === "electricityBill" && files?.[0]) {
      verifyElectricFile(files[0]);
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: validateField(name, val),
    }));
  };

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}/get/user/details/web`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Details API Response:", response.data);
      if (response.data?.data?.customerID) {
        setCustomerID(response.data.data.customerID);
      }
    } catch (err) {
      console.error("User Details API Error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.electricityBill || !formData.electricityBill.startsWith('http')) {
      alert("Please upload and verify the electricity bill before submitting.");
      return;
    }
    console.log("Testing");
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}/sourcing/save-business-details`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(response);

      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        await fetchUserDetails();
        navigate("/bank-statement");
      }
    } catch (error) {
      console.log(error);
    }
  };

const verifyElectricFile = async (file) => {
  if (!file) return;
  setVerificationStatus((prev) => ({
    ...prev,
    electricityBill: { loading: true, verified: false, error: null },
  }));

  try {
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(
      `${API_CONFIG.BASE_URL}/sourcing/upload-file`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    console.log("Electricity Bill response", response);

    if (response.data?.status === true && response.data?.message === "SUCCESS") {
      setVerificationStatus((prev) => ({
        ...prev,
        electricityBill: { loading: false, verified: true, error: null },
      }));
      setFormData(prev => ({
        ...prev,
        // electricityBill: response.data

        electricityBill: response.data.data.Location
      }));
    }
  } catch (error) {
    setVerificationStatus((prev) => ({
      ...prev,
      electricityBill: {
        loading: false,
        verified: false,
        error: error.response?.data?.message || "File upload failed",
      },
    }));
  }
};


  // const verifyElectricityBill = async (input, selectedOperatorCode) => {
  //   // Bill number is now optional, so only operator code is required
  //   if (!selectedOperatorCode) return;
  //   setVerificationStatus((prev) => ({
  //     ...prev,
  //     electricityBill: { loading: true, verified: false, error: null },
  //   }));
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const payload = {
  //       customerID: customerID,
  //       id_number: input || "", // input (bill number) is optional
  //       operator_code: selectedOperatorCode,
  //     };
  //     const response = await axios.post(
  //       `${API_CONFIG.BASE_URL}/sourcing/validate-electricity-bill`,
  //       payload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //     if (
  //       response.data?.status === true &&
  //       response.data?.message === "SUCCESS"
  //     ) {
  //       setVerificationStatus((prev) => ({
  //         ...prev,
  //         electricityBill: { loading: false, verified: true, error: null },
  //       }));
  //     } else {
  //       throw new Error(response.data?.message || "Verification failed");
  //     }
  //   } catch (error) {
  //     setVerificationStatus((prev) => ({
  //       ...prev,
  //       electricityBill: {
  //         loading: false,
  //         verified: false,
  //         error: error.response?.data?.message || "Verification failed",
  //       },
  //     }));
  //   }
  // };

  // 1. Add file upload function

  // const uploadElectricityBillFile = async (file) => {
  //   if (!file) return;
  //   setVerificationStatus((prev) => ({
  //     ...prev,
  //     electricityBill: { loading: true, verified: false, error: null },
  //   }));
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("customerID", customerID);
  //     // Add more fields if required by backend
  //     const response = await axios.post(
  //       `${API_CONFIG.BASE_URL}/sourcing/upload-file`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //     if (
  //       response.data?.status === true &&
  //       response.data?.message === "SUCCESS"
  //     ) {
  //       setVerificationStatus((prev) => ({
  //         ...prev,
  //         electricityBill: { loading: false, verified: true, error: null },
  //       }));
  //     } else {
  //       throw new Error(response.data?.message || "File upload failed");
  //     }
  //   } catch (error) {
  //     setVerificationStatus((prev) => ({
  //       ...prev,
  //       electricityBill: {
  //         loading: false,
  //         verified: false,
  //         error: error.response?.data?.message || "File upload failed",
  //       },
  //     }));
  //   }
  // };

 
  // const uploadBankStatementFile = async (file) => {
  //   if (!file) return;
  //   setVerificationStatus((prev) => ({
  //     ...prev,
  //     bankStatement: { loading: true, verified: false, error: null },
  //   }));
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("customerID", customerID);
  //     // Add more fields if required by backend
  //     console.log(`${API_CONFIG.BASE_URL}/sourcing/initiate-bank-statement`);
  //     const response = await axios.post(
  //       `${API_CONFIG.BASE_URL}/sourcing/initiate-bank-statement`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "multipart/form-data",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //     if (response.data?.status === true && response.data?.message === "SUCCESS") {
  //       setVerificationStatus((prev) => ({
  //         ...prev,
  //         bankStatement: { loading: false, verified: true, error: null },
  //       }));
  //     } else {
  //       throw new Error(response.data?.message || "File upload failed");
  //     }
  //   } catch (error) {
  //     setVerificationStatus((prev) => ({
  //       ...prev,
  //       bankStatement: {
  //         loading: false,
  //         verified: false,
  //         error: error.response?.data?.message || "File upload failed",
  //       },
  //     }));
  //   }
  // };

  // Remove broken fetchUserDetails and add correct version
  // const fetchUserDetails = async () => {
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const response = await axios.get(
  //       `${API_CONFIG.BASE_URL}/get/user/details/web`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log("User Details API Response:", response.data);
  //   } catch (err) {
  //     console.error("User Details API Error:", err);
  //   }
  // };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 mt-30 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
        Business Details
      </h2>
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-center">{submitError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UDYAM Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              UDYAM Number{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className="relative flex gap-2 items-center">
              <input
                type="text"
                name="udyamNumber"
                value={formData.udyamNumber}
                onChange={handleChange}
                placeholder="UDYAM-XX-00-0000000"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.udyamNumber ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
                style={{ textTransform: "uppercase" }}
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                onClick={() => verifyUdyamNumber(formData.udyamNumber)}
                disabled={
                  !formData.udyamNumber ||
                  !!errors.udyamNumber ||
                  verificationStatus.udyamNumber.loading ||
                  verificationStatus.udyamNumber.verified
                }
              >
                {verificationStatus.udyamNumber.loading
                  ? "Verifying..."
                  : verificationStatus.udyamNumber.verified
                  ? "Verified"
                  : "Verify"}
              </button>
              {verificationStatus.udyamNumber.verified && (
                <span className="text-green-500 ml-2">✓</span>
              )}
            </div>
            {errors.udyamNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.udyamNumber}</p>
            )}
            {verificationStatus.udyamNumber.error && (
              <p className="text-red-500 text-sm mt-1">
                {verificationStatus.udyamNumber.error}
              </p>
            )}

            {/* Phone Number Input */}
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number for OTP
              </label>
              <input
                type="tel"
                name="udyamPhone"
                value={formData.udyamPhone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
            </div>

            {/* OTP Input Section */}
            {verificationStatus.udyamNumber.showOtpInput && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter OTP sent to your phone
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="udyamOtp"
                      value={formData.udyamOtp}
                      onChange={handleChange}
                      placeholder="Enter OTP"
                      className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                    />
                    <button
                      type="button"
                      onClick={verifyUdyamOtp}
                      className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Verify OTP
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Udyam Date of Registration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Udyam Date Of Registration
            </label>
            <input
              type="date"
              name="udyamRegistrationDate"
              value={formData.udyamRegistrationDate}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.udyamRegistrationDate
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
            />
            {errors.udyamRegistrationDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.udyamRegistrationDate}
              </p>
            )}
          </div>
          {/* GST Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              GST Number
            </label>
            <div className="relative flex gap-2 items-center">
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                placeholder="22AAAAA0000A1Z5"
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.gstNumber ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
                style={{ textTransform: "uppercase" }}
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                onClick={() => verifyGSTNumber(formData.gstNumber)}
                disabled={
                  !formData.gstNumber ||
                  !!errors.gstNumber ||
                  verificationStatus.gstNumber.loading ||
                  verificationStatus.gstNumber.verified
                }
              >
                {verificationStatus.gstNumber.loading
                  ? "Verifying..."
                  : verificationStatus.gstNumber.verified
                  ? "Verified"
                  : "Verify"}
              </button>
              {verificationStatus.gstNumber.verified && (
                <span className="text-green-500 ml-2">✓</span>
              )}
            </div>
            {errors.gstNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.gstNumber}</p>
            )}
            {verificationStatus.gstNumber.error && (
              <p className="text-red-500 text-sm mt-1">
                {verificationStatus.gstNumber.error}
              </p>
            )}
          </div>
          {/* Business Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.businessName ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
            )}
          </div>
          {/* Business Nature */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Business Nature
            </label>
            <select
              name="businessNature"
              value={formData.businessNature}
              onChange={handleChange}
              onClick={() => {
                if (!isDropdownClicked) {
                  fetchBusinessNatureAndPurpose();
                  setIsDropdownClicked(true);
                }
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
            >
              <option value="">Select Nature</option>
              {businessNatureOptions.map((option) => (
                <option key={option.id} value={option.nature}>
                  {option.nature}
                </option>
              ))}
            </select>
          </div>
          {/* Loan Purpose */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Loan Purpose
            </label>
            <select
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleChange}
              onClick={() => {
                if (!isDropdownClicked) {
                  fetchBusinessNatureAndPurpose();
                  setIsDropdownClicked(true);
                }
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
            >
              <option value="">Select Purpose</option>
              {loanPurposeOptions.map((option) => (
                <option key={option.id} value={option.purpose}>
                  {option.purpose}
                </option>
              ))}
            </select>
          </div>
          {/* Business Vintage */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Business Vintage
            </label>
            <input
              type="text"
              name="businessVintage"
              value={formData.businessVintage}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.businessVintage ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.businessVintage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessVintage}
              </p>
            )}
          </div>
          {/* Business Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Business Address
            </label>
            <textarea
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              rows="2"
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.businessAddress ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.businessAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessAddress}
              </p>
            )}
          </div>
          {/* No. of Staff */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              No. of Staff
            </label>
            <input
              type="number"
              name="noOfStaff"
              value={formData.noOfStaff}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.noOfStaff ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.noOfStaff && (
              <p className="text-red-500 text-sm mt-1">{errors.noOfStaff}</p>
            )}
          </div>
          {/* Average TurnOver In Lakhs */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Average TurnOver In Lakhs
            </label>
            <input
              type="number"
              name="averageTurnoverLakhs"
              value={formData.averageTurnoverLakhs}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.averageTurnoverLakhs
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.averageTurnoverLakhs && (
              <p className="text-red-500 text-sm mt-1">
                {errors.averageTurnoverLakhs}
              </p>
            )}
          </div>

          {/* after bill number verification */}

          {/* <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Electricity Bill (Home/Business)
            </label>

            <div className="flex gap-4 mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="electricityBillInputType"
                  value="upload"
                  checked={electricityBillInputType === "upload"}
                  onChange={() => setElectricityBillInputType("upload")}
                  className="mr-2"
                />
                Upload Document
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="electricityBillInputType"
                  value="number"
                  checked={electricityBillInputType === "number"}
                  onChange={() => setElectricityBillInputType("number")}
                  className="mr-2"
                />
                Enter Bill Number
              </label>
            </div>

            {electricityBillInputType === "upload" ? (
              <div className="relative">
                <input
                  type="file"
                  name="electricityBill"
                  accept="application/pdf,image/*"
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      electricityBill: e.target.files[0],
                    }));
                    uploadElectricityBillFile(e.target.files[0]);
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
                />
                {verificationStatus.electricityBill.loading && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                  </div>
                )}
                {verificationStatus.electricityBill.verified && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    ✓
                  </div>
                )}
                {verificationStatus.electricityBill.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {verificationStatus.electricityBill.error}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-end">
                  <div className="flex-1 min-w-[120px]">
                    <label className="block font-semibold mb-1">
                      Bill Number (Optional)
                    </label>
                    <input
                      type="text"
                      value={userEnteredBillNumber}
                      onChange={(e) => setUserEnteredBillNumber(e.target.value)}
                      className="w-full px-4 py-2 border rounded"
                      placeholder="Enter bill number (optional)"
                    />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="block font-semibold mb-1">Operator</label>
                    <select
                      value={selectedOperatorCode}
                      onChange={(e) => setSelectedOperatorCode(e.target.value)}
                      className="w-full px-4 py-2 border rounded"
                    >
                      <option value="">Select Operator</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="MH">Maharashtra</option>
                    </select>
                  </div>
                  <button
                    onClick={() =>
                      verifyElectricityBill(
                        userEnteredBillNumber,
                        selectedOperatorCode
                      )
                    }
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all mt-6"
                    disabled={!selectedOperatorCode}
                  >
                    Verify Bill
                  </button>
                  {verificationStatus.electricityBill.loading && (
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 inline-block mt-6"></span>
                  )}
                  {verificationStatus.electricityBill.verified && (
                    <span className="text-green-500 mt-6">✓</span>
                  )}
                  {verificationStatus.electricityBill.error && (
                    <p className="text-red-500 text-sm mt-6">
                      {verificationStatus.electricityBill.error}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div> */}

          {/* Business Photo Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Business Photo
            </label>
            <input
              type="file"
              name="businessPhoto"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
              required
            />
            {errors.businessPhoto && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessPhoto}
              </p>
            )}
          </div>

          {/* Electricity Bill (Home/Business) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Electricity Bill
            </label>
            <div className="relative">
              <input
                type="file"
                name="electricityBill"
                accept="application/pdf,image/*"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none bg-white"
              />
              {verificationStatus.electricityBill.loading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                </div>
              )}
              {verificationStatus.electricityBill.verified && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                  ✓
                </div>
              )}
              {verificationStatus.electricityBill.error && (
                <p className="text-red-500 text-sm mt-1">
                  {verificationStatus.electricityBill.error}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg"
            disabled={verificationStatus.electricityBill.loading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicantBusinessDetails;
