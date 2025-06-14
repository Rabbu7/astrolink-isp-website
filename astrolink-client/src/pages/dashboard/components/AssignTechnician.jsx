import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";

const AssignTechnician = () => {
  const [complaints, setComplaints] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  // Fetch all complaints
  useEffect(() => {
    fetch("http://localhost:5000/complaints")
      .then((res) => res.json())
      .then((data) => setComplaints(data));
  }, []);

  // Fetch all technicians
  useEffect(() => {
    fetch("http://localhost:5000/users?role=technician")
      .then((res) => res.json())
      .then((data) => {
        // Fallback filter in case backend does not filter correctly
        const filtered = data.filter((user) => user.role === "technician");
        setTechnicians(filtered);
      });
  }, []);

  // Assign technician to a complaint
  const handleAssign = async (complaintId, technicianEmail) => {
    const res = await fetch(`http://localhost:5000/complaints/${complaintId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "assigned",
        assignedTo: technicianEmail,
      }),
    });

    const data = await res.json();
    if (data.modifiedCount > 0) {
      alert("Technician Assigned!");
      // Refresh complaints
      fetch("http://localhost:5000/complaints")
        .then((res) => res.json())
        .then((data) => {
        console.log("Updated complaints:", data);
        setComplaints([]);
        setTimeout(() => setComplaints(data), 0);
      });
    }
  };
  return (
    <DashboardLayout role="manager">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Manage Complaints</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-600 text-left">
              <th className="p-2">Customer Email</th>
              <th className="p-2">Issue</th>
              <th className="p-2">Status</th>
              <th className="p-2">Technician</th>
              <th className="p-2">Assign</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c._id + (c.assignedTo || "")} className="border-t bg-gray-600">
                <td className="p-2">{c.email}</td>
                <td className="p-2">{c.issue}</td>
                <td className="p-2">{c.status || "pending"}</td>
                <td className="p-2">{c.assignedTo || "Not Assigned"}</td>
                <td className="p-2">
                  <select
                    value={c.assignedTo ?? ""}
                    onChange={(e) => handleAssign(c._id, e.target.value)}
                    className="border p-1"
                  >
                    <option disabled value="">
                      Select Technician
                    </option>
                    {technicians.map((tech) => (
                      <option className="bg-gray-700" key={tech._id} value={tech.email}>
                        {tech.name} ({tech.email})
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default AssignTechnician;
