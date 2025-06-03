import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_CONFIG from "../config";

const AdditionalInfo = () => {
  const [form, setForm] = useState({
    maritalStatus: "",
    relation: "",
    // emailID: "",
    firstReferenceName: "",
    firstReferenceRelation: "",
    firstReferenceContact: "",
    secondReferenceName: "",
    secondReferenceRelation: "",
    secondReferenceContact: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation: First and Second Reference Name and Contact must not be the same
    if (
      form.firstReferenceName.trim().toLowerCase() === form.secondReferenceName.trim().toLowerCase() ||
      form.firstReferenceContact.trim() === form.secondReferenceContact.trim()
    ) {
      window.alert("First and Second Reference Name and Contact Number must not be the same.");
      return;
    }
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const token = localStorage.getItem("authToken");
      console.log("📦 Token being sent in Authorization header:", token);

      const response = await axios.put(
        `${API_CONFIG.BASE_URL}/sourcing/update-applicant-additional-data`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log("additionl info response", response.data);
      if (
        response.data?.status === true &&
        response.data?.message === "SUCCESS"
      ) {
        setSuccess("Data submitted successfully!");
        fetchUserDetails();

     
        setSuccess("data submitted successfylly");
        console.log("✅ Success! Navigating to co-applicant...");
        setTimeout(() => {
          navigate("/co-applicant");
        }, 1000);
      } else if (
        response.data?.status === false &&
        response.data?.message === "Lead Rejected"
      ) {
        navigate("/co-applicant");
      } else {
        setError(
          response.data?.message || "Submission failed. Please try again."
        );
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
    } catch (err) {
      console.error("User Details API Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D4183] flex items-center justify-center py-8">

    <div className="max-w-xl mx-auto p-8 mb-1 bg-white rounded-t-3xl rounded-bl-3xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-poppins text-center mb-8 text-[#0D4183]">
        Additional Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Marital Status</label>
            <select
              name="maritalStatus"
              value={form.maritalStatus}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            >
              <option value="">Select</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Relation</label>
            <input
              type="text"
              name="relation"
              value={form.relation}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            />
          </div>
          {/* <div>
            <label className="block font-medium mb-1">Email ID</label>
            <input
              type="email"
              name="emailID"
              value={form.emailID}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div> */}
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">First Reference Name</label>
            <input
              type="text"
              name="firstReferenceName"
              value={form.firstReferenceName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">First Reference Relation</label>
            <input
              type="text"
              name="firstReferenceRelation"
              value={form.firstReferenceRelation}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">First Reference Contact</label>
            <input
              type="tel"
              name="firstReferenceContact"
              value={form.firstReferenceContact}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Second Reference Name</label>
            <input
              type="text"
              name="secondReferenceName"
              value={form.secondReferenceName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Second Reference Relation</label>
            <input
              type="text"
              name="secondReferenceRelation"
              value={form.secondReferenceRelation}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Second Reference Contact</label>
            <input
              type="tel"
              name="secondReferenceContact"
              value={form.secondReferenceContact}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>
          <div>
            <label className="block text-sm font-poppins text-[#0D4183] mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#0D4183] focus:ring-2 focus:ring-[#0D4183] transition-all duration-300 outline-none bg-white text-[#0D4183] placeholder-[#0D4183]"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#0D4183] text-white px-8 py-3 rounded-lg font-poppins hover:bg-[#1556ad] transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0D4183] focus:ring-offset-2 shadow-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {success && (
          <div className="text-center text-[#0D4183] mt-4 font-medium">{success}</div>
        )}
        {error && (
          <div className="text-center text-[#0D4183] mt-4 font-medium">{error}</div>
        )}
      </form>
    </div>
    </div>

  );
};

export default AdditionalInfo;
