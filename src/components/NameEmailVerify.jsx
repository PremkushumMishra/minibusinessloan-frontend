import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/StepContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import API_CONFIG from "../config";
import { fetchUserDetails } from "../utils/api";
import KycProcess from "./KycProcess";
// import ProtectedRoute from "./ProtectedRoute";
const NameEmailVerify = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mobileNumber = queryParams.get("mobileNumber");

  const navigate = useNavigate();
  const { updateStep } = useStep();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    redirectURL: "https://google.com/",
    // redirectURL: "https://minibusinessloan.com/kyc-process",
    // redirectURL: "https://minibusinessloan.vercel.app/kyc-sucess", 
    // /kyc-sucess",

  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
    
    
  useEffect(() => {
    const getUserDetails = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      const userDetails = await fetchUserDetails(token, { skipNavigate: true });
      if (userDetails && userDetails.phoneNumber) {
        setPhoneNumber(userDetails.phoneNumber);
      }
    };
    getUserDetails();
  }, []);

  useEffect(() => {
    if (mobileNumber) {
      setFormData((prev) => ({
        ...prev,
        phone: mobileNumber,
      }));
    }
  }, [mobileNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("authToken");
        console.log("📦 Token being sent in Authorization header:", token);
        
        const response = await axios.post(
          `${API_CONFIG.BASE_URL}/sourcing/initiate-digilocker`,
          {
            name: formData.name,
            email: formData.email,
            phone: phoneNumber,
            redirectURL: formData.redirectURL,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        
        console.log("Name email verify response:", response.data);  
        
        if (response.data?.status === true && response.data?.message === "SUCCESS") {
          const redirectUrl = response.data?.data?.url;
          console.log("Redirect URL:", redirectUrl);

          if (redirectUrl) {
            window.open(redirectUrl, "_blank");
          } else {
            alert("URL not received from the server.");
          }

          // Update step
          updateStep("additional-info");
          // localStorage.setItem("user_step", "kyc-process");

          // Store client ID if available
          if (response.data?.data?.client_id) {
            const clientId = response.data.data.client_id;
            localStorage.setItem("digilocker_client_id", clientId);
          }

          // Fetch user details with the same token
          try {
            await fetchUserDetails(token, navigate);
            console.log("User details fetched successfully");
          } catch (error) {
            console.error("Error fetching user details:", error);
          }

          // Navigate to KYC process to start polling
          updateStep("kyc-process");
          navigate("/kyc-process");
        }
      } catch (error) {
        console.error("Error initiating digilocker:", error.response);
        alert("Something went wrong while starting KYC.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // const fetchUserDetails = async () => {
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const response = await axios.get(
  //       // "http://10.6.3.90:3000/api/v1/get/user/details/web",
  //       `${API_CONFIG.BASE_URL}/get/user/details/web`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         // withCredentials: true, // If you want to send cookies
  //       }
  //     );
  //     console.log("User Details API Response:", response.data);
  //   } catch (err) {
  //     console.error("User Details API Error:", err);
  //   }
  // };

  return (
    <div className="min-h-screen bg-[#0D4183] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-t-3xl rounded-bl-3xl shadow-xl p-8">
        <div className="text-center mb-15">
          <h2 className="text-3xl font-poppins text-gray-800 mb-2">
            Verify Your Details
          </h2>
          <p className="text-gray-600">
            Please provide your name and email to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-poppins text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-[#E0BCF3] focus:border-transparent transition-all duration-200`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-poppins text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-[#E0BCF3] focus:border-transparent transition-all duration-200`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full relative group"
            disabled={isLoading}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] rounded-t-3xl rounded-bl-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white px-6 py-3 rounded-t-2xl rounded-bl-2xl font-poppins text-gray-800 hover:text-[#E0BCF3] transition-all duration-300 group-hover:scale-105 shadow-lg">
              {isLoading ? "Processing..." : "Start KYC Verification"}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameEmailVerify;
// export default ProtectedRoute(NameEmailVerify);
