import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Swal from "sweetalert2";

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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Assigned to the Technician",
        showConfirmButton: false,
        timer: 2000,
      });
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
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#0e131ecc] max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4 ">Manage Complaints</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Customer Email</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Technician</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, idx) => (
              <tr key={c._id + (c.assignedTo || "")}>
                <th>{idx + 1}</th>
                <td>{c.email}</td>
                <td>{c.issue}</td>
                <td>
                  <span className="badge badge-outline badge-error">
                    {c.status || "pending"}
                  </span>
                </td>
                <td>{c.assignedTo ? `${c.assignedTo}` : "Not Assigned"}</td>
                <td>
                  {c.status === "resolved" ? (
                    <span>
                      <span className="badge badge-outline badge-success">
                        Completed
                      </span>
                    </span>
                  ) : (
                    <select
                      value={c.assignedTo ?? ""}
                      onChange={(e) => handleAssign(c._id, e.target.value)}
                      className="border p-1"
                      disabled={c.status === "resolved"}
                    >
                      <option disabled value="">
                        Select Technician
                      </option>
                      {technicians.map((tech) => (
                        <option
                          className="bg-gray-700"
                          key={tech._id}
                          value={tech.email}
                        >
                          {tech.name} ({tech.email})
                        </option>
                      ))}
                    </select>
                  )}
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
