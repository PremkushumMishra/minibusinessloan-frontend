import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_CONFIG from "../config";
import { useStep } from "../context/StepContext";
const AdditionalInfo = () => {
  const { currentStep, setCurrentStep } = useStep();
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

        setCurrentStep("co-applicant");
        localStorage.setItem("user_step", "co-applicant");
        console.log("✅ Success! Navigating to co-applicant...");
        navigate("/co-applicant");
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
  }
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

  useEffect(() => {
    if (currentStep !== "additional-info") {
      // Redirect to the correct step/page
      navigate(`/${currentStep}`);
    }
  }, [currentStep, navigate]);


  return (
    <div className="max-w-lg mx-auto mt-32 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Additional Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Marital Status</label>
          <select
            name="maritalStatus"
            value={form.maritalStatus}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Relation</label>
          <input
            type="text"
            name="relation"
            value={form.relation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
     
        <div>
          <label className="block font-medium mb-1">First Reference Name</label>
          <input
            type="text"
            name="firstReferenceName"
            value={form.firstReferenceName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            First Reference Relation
          </label>
          <input
            type="text"
            name="firstReferenceRelation"
            value={form.firstReferenceRelation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            First Reference Contact
          </label>
          <input
            type="tel"
            name="firstReferenceContact"
            value={form.firstReferenceContact}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Second Reference Name
          </label>
          <input
            type="text"
            name="secondReferenceName"
            value={form.secondReferenceName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Second Reference Relation
          </label>
          <input
            type="text"
            name="secondReferenceRelation"
            value={form.secondReferenceRelation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Second Reference Contact
          </label>
          <input
            type="tel"
            name="secondReferenceContact"
            value={form.secondReferenceContact}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0099FF] text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success ? (
          <div className="text-green-600 mt-2">{success}</div>
        ) : error ? (
          <div className="text-red-600 mt-2">{error}</div>
        ) : null}
      </form>
    </div>
  );
};

export default AdditionalInfo;
