import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AuthContext from "../../../context/AuthContext/AuthContext";

const TechnicianComplaint = () => {
  const { user } = useContext(AuthContext);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/complaints?assignedTo=${user.email}`)
        .then((res) => res.json())
        .then((data) => setComplaints(data));
    }
  }, [user]);

  const handleResolved = async (id) => {
     console.log("Complaint ID:", id);
    const res = await fetch(`http://localhost:5000/complaints/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "resolved" }),
    });

    const result = await res.json();
    if (result.modifiedCount > 0) {
      alert("Marked as resolved!");
      // refresh
      fetch(`http://localhost:5000/complaints?assignedTo=${user.email}`)
        .then((res) => res.json())
        .then((data) => setComplaints(data));
    }
  };
  return (
    <DashboardLayout role="technician">
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Assigned Complaints</h2>
        {complaints.length === 0 ? (
          <p>No complaints assigned.</p>
        ) : (
          <ul className="space-y-4">
            {complaints.map((c) => (
              <li
                key={c._id}
                className="border p-4 rounded-md bg-gray-600 flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Customer:</strong> {c.email}
                  </p>
                  <p>
                    <strong>Issue:</strong> {c.issue}
                  </p>
                  <p>
                    <strong>Status:</strong> {c.status}
                  </p>
                </div>
                {c.status !== "resolved" && (
                  <button
                    onClick={() => handleResolved(c._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Mark Resolved
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TechnicianComplaint;
