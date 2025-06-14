import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Manager = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      customerName: "Abir",
      address: "Dhaka, Bangladesh",
      problem: "Internet is not working",
      status: "pending",
      assignedTo: null,
    },
    {
      id: 2,
      customerName: "Joya",
      address: "Chittagong",
      problem: "Slow speed during peak time",
      status: "pending",
      assignedTo: null,
    },
  ]);

  const handleAssign = (id, technicianName) => {
    const updated = complaints.map((c) =>
      c.id === id ? { ...c, assignedTo: technicianName, status: "assigned" } : c
    );
    setComplaints(updated);
  };
  return (
    <DashboardLayout role="manager">
      <h1 className="text-2xl font-bold mb-4">All Complaints</h1>
      {complaints.map((comp) => (
        <div key={comp.id} className="bg-gray-300 p-4 rounded shadow mb-4 text-black">
          <p>
            <strong>Customer:</strong> {comp.customerName}
          </p>
          <p>
            <strong>Address:</strong> {comp.address}
          </p>
          <p>
            <strong>Problem:</strong> {comp.problem}
          </p>
          <p>
            <strong>Status:</strong> {comp.status}
          </p>
          <p>
            <strong>Assigned To:</strong> {comp.assignedTo || "Not Assigned"}
          </p>

          {comp.status === "pending" && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Enter technician name"
                className="p-2 border rounded mr-2"
                onChange={(e) => (comp._tempTech = e.target.value)}
              />
              <button
                onClick={() => handleAssign(comp.id, comp._tempTech)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Assign
              </button>
            </div>
          )}
        </div>
      ))}
    </DashboardLayout>
  );
};

export default Manager;
