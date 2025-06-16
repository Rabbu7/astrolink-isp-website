import React, { useContext, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { Pin } from "lucide-react";
import Swal from "sweetalert2";

const SubmitComplaint = () => {
  const { user } = useContext(AuthContext);
  const [issue, setIssue] = useState("");

  const [description, setDescription] = useState("");

  const email = localStorage.getItem("customer-email") || user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!issue || !description) {
      alert("Please fill all fields");
      return;
    }

    const complaint = {
      email,
      issue: `${issue} - ${description}`,
      status: "pending",
      createdAt: new Date(),
    };

    const res = await fetch("http://localhost:5000/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complaint),
    });

    const data = await res.json();
    if (data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your complaint has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      setIssue("");
      setDescription("");
    }
  };

  return (
    <DashboardLayout role="customer">
      <div className="flex justify-center">
        <h2 className="text-xl font-semibold mb-4">Submit your Complaint!!</h2>
        <img className="w-6 h-6" src="/src/assets/icons/service.png"></img>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Dropdown for problem type */}
        <label className="block mb-2 font-semibold text-gray-200">
          Problem Type:
        </label>
        <select
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded-xl bg-gray-800"
        >
          <option value="" disabled>
            Select your problem
          </option>
          <option>Cannot Connect to Internet</option>
          <option>Intermittent Connection</option>
          <option>Limited or No Internet Access</option>
          <option>Slow Internet Speeds</option>
          <option>Authentication Errors</option>
          <option>Network Not Showing Up</option>
          <option>Hidden Network Problems</option>
          <option>One Device Can’t Connect</option>
          <option>Multiple Devices Failing</option>
          <option>Router Not Broadcasting Signal</option>
        </select>

        {/* Textarea for detailed description */}
        <label className="block mb-2 font-semibold text-gray-100">
          Describe Your Problem:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write more details about your issue..."
          required
          className="w-full p-2 mb-4 border rounded-lg h-32 resize-none input input-error"
        />

        <button
          type="submit"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl items-center bg-blue-700 rounded-lg"
        >
          <div className="flex justify-center space-x-1">
            <div>Submit Complaint</div>
            <div>
              <img className="w-5" src="/src/assets/icons/send (1).png"></img>
            </div>
          </div>
        </button>
      </form>
    </DashboardLayout>
  );
};

export default SubmitComplaint;
