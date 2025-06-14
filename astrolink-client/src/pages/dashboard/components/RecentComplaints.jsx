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
        <h2 className="text-xl font-bold mb-4">My Complaints</h2>
        <ul className="space-y-3">
          {complaints.map((c) => (
            <li key={c._id} className="p-3 border rounded bg-gray-600 shadow-sm">
              <p>
                <strong>Issue:</strong> {c.issue}
              </p>
              <p>
                <strong>Status:</strong> {c.status}
              </p>
              {c.assignedTo && (
                <p>
                  <strong>Assigned Technician:</strong> {c.assignedTo}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default RecentComplaints;
