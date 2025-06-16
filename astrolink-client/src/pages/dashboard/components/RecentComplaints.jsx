import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import AuthContext from "../../../context/AuthContext/AuthContext";

const RecentComplaints = () => {
  const { user } = useContext(AuthContext); // Get the current user from AuthContext
  const [complaints, setComplaints] = useState([]); // State to store complaints array

  useEffect(() => {
    /**
     * Fetches complaints for the current user from the backend API
     * using the user's email as a query parameter, then updates
     * the local state with the retrieved complaints.
     */
    const fetchComplaints = async () => {
      const res = await fetch(
        `http://localhost:5000/complaints?email=${user.email}`
      );
      const data = await res.json();
      setComplaints(data);
    };

    if (user?.email)
      // Check if the user object and email exist;
      fetchComplaints(); // Call the fetchComplaints function to get complaints;
  }, [user]);
  return (
    <DashboardLayout role="customer">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="overflow-x-auto rounded-box border border-amber-600 bg-[#0e131e73]">
          <div>
            <h2 className="text-xl font-bold m-4">My Complaints</h2>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Complain Time</th>
                <th>Assigned Technician</th>
              </tr>
            </thead>
            <tbody>
              {complaints.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No complaints found.
                  </td>
                </tr>
              ) : (
                complaints.map((c, idx) => (
                  <tr key={c._id}>
                    <th>{idx + 1}</th>
                    <td>{c.issue}</td>
                    <td>
                      <span className="badge badge-outline badge-success">
                        {c.status}
                      </span>
                    </td>
                    <td>{c.createdAt}</td>
                    <td>{c.assignedTo || "N/A"}</td>
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

export default RecentComplaints;
