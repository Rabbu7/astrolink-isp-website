import React, { useContext, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AuthContext from "../../../context/AuthContext/AuthContext";

const SubmitComplaint = () => {
  const { user } = useContext(AuthContext);
  const [issue, setIssue] = useState("");

  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!issue || !address) {
      alert("Please fill all fields");
      return;
    }

    const complaint = {
      email: user.email,
      issue,
      address,
    };

    const res = await fetch("http://localhost:5000/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complaint),
    });

    const data = await res.json();
    if (data.insertedId) {
      alert("Complaint submitted!");
      setIssue("");
      setAddress("");
    }
  };

  return (
    <DashboardLayout role="customer">
      <h2 className="text-xl font-semibold mb-4">Submit a Service Complaint</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Describe your service problem"
          rows="4"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Complaint
        </button>
      </form>
    </DashboardLayout>
  );
};

export default SubmitComplaint;
