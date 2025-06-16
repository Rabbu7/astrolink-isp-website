import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AuthContext from "../../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Marked as Resolved",
        showConfirmButton: false,
        timer: 1500,
      });
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
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#0e131ecc]">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No complaints assigned.
                  </td>
                </tr>
              ) : (
                complaints.map((c, idx) => (
                  <tr key={c._id}>
                    <th>{idx + 1}</th>
                    <td>{c.email}</td>
                    <td>{c.issue}</td>
                    <td>
                      <span className="badge badge-outline badge-error">
                        {c.status}
                      </span>
                    </td>
                    <td>
                      {c.status === "resolved" ? (
                        <span className="badge badge-outline badge-success">
                          Completed
                        </span>
                      ) : (
                        <button
                          onClick={() => handleResolved(c._id)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg"
                        >
                          Mark Resolved
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TechnicianComplaint;
