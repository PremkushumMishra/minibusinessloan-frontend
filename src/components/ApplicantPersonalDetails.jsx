import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStep } from "../context/useStep";

const ApplicantPersonalDetails = () => {
  const navigate = useNavigate();
  const { updateStep } = useStep();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z\s]{2,}$/.test(value)) {
          error = "Only letters and spaces are allowed";
        }
        break;

      case "phone":
        if (!/^[0-9]{10}$/.test(value)) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "pincode":
        if (!/^[0-9]{6}$/.test(value)) {
          error = "Please enter a valid 6-digit pincode";
        }
        break;

      case "city":
      case "state":
        if (!/^[A-Za-z\s]{2,}$/.test(value)) {
          error = "Only letters and spaces are allowed";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // If no errors, proceed with form submission and navigation
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Here you can add your API call to save the data
      updateStep("applicant-business-details");
      navigate("/applicant-business-details");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-30 mb-10 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
        Personal Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Fields */}
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Date of Birth and Gender */}
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              required
            />
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact Information */}
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Address Information */}
          <div className="md:col-span-2 transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              required
            />
          </div>

          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.state ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">{errors.state}</p>
            )}
          </div>
          <div className="transform transition-all duration-300 hover:scale-[1.02]">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none`}
              required
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicantPersonalDetails;
