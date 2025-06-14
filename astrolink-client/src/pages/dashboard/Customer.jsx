import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Customer = () => {
  return (
    <DashboardLayout role="customer">
      <h1 className="text-2xl font-bold">Customer Dashboard</h1>
      <p>Submit your complaint below.</p>
    </DashboardLayout>
  );
};

export default Customer;
