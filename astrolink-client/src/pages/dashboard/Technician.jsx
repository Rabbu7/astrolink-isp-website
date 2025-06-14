import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Technician = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      customerName: "Abir",
      problem: "Internet is not working",
      address: "Dhaka",
      assignedTo: "Technician_1",
      status: "assigned",
    },
    {
      id: 2,
      customerName: "Joya",
      problem: "Slow speed",
      address: "Chittagong",
      assignedTo: "Technician_1",
      status: "assigned",
    },
  ]);

  const markAsResolved = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "resolved" } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <DashboardLayout role="technician">
      <h1 className="text-2xl font-bold mb-4">Assigned Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 rounded shadow mb-4 text-black">
          <p>
            <strong>Customer:</strong> {task.customerName}
          </p>
          <p>
            <strong>Address:</strong> {task.address}
          </p>
          <p>
            <strong>Problem:</strong> {task.problem}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>

          {task.status === "assigned" && (
            <button
              onClick={() => markAsResolved(task.id)}
              className="mt-2 bg-green-600 text-white px-4 py-1 rounded"
            >
              Mark as Resolved
            </button>
          )}

          {task.status === "resolved" && (
            <p className="mt-2 text-green-700 font-semibold">Resolved ✅</p>
          )}
        </div>
      ))}
    </DashboardLayout>
  );
};

export default Technician;
