import label from "daisyui/components/label";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import {
  Archive,
  CheckCircle,
  ClipboardList,
  Home,
  LogOut,
  Menu,
  Send,
  User,
  Wrench,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

const DashboardLayout = ({ children, role }) => {
  const location = useLocation();
  const { signOutUser, user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("customer-email");
        localStorage.removeItem("technician-email");
        localStorage.removeItem("manager-email");
        console.log("successfully signed out");
        Swal.fire({
          title: "Signed Out!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("failed to sign out", error);
      });
  };

  // Sidebar links based on role
  const sidebarLinks = {
    customer: [
      { to: "/customer", label: "Dashboard", icon: <Home size={18} /> },
      {
        to: "/submitComplaint",
        label: "Submit Complaint",
        icon: <Send size={18} />,
      },
      {
        to: "/showComplaint",
        label: "Recent Complaints",
        icon: <Archive size={18} />,
      },
    ],
    manager: [
      {
        to: "/manager",
        label: "Dashboard",
        icon: <ClipboardList size={18} />,
      },
      { to: "/assign", label: "Assign Technician", icon: <Wrench size={18} /> },
    ],
    technician: [
      {
        to: "/technician",
        label: "Dashboard",
        icon: <Home size={18} />,
      },
      {
        to: "/technicianSolve",
        label: "Assign Complaints",
        icon: <CheckCircle size={18} />,
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 space-y-6 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        {/* Profile Section */}
        <div className="flex items-center gap-3 border-b border-gray-700 pb-4 mb-4">
          <User size={28} />
          <div>
            <p className="font-semibold text-lg capitalize">{role}</p>
            <p className="text-sm text-gray-400">
              {role === "customer"
                ? localStorage.getItem("customer-email") || user?.email
                : role === "manager"
                ? localStorage.getItem("manager-email") || user?.email
                : role === "technician"
                ? localStorage.getItem("technician-email") || user?.email
                : user?.email}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          {sidebarLinks[role]?.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 ${
                location.pathname === link.to ? "bg-gray-800" : ""
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* logout */}
        <button
          onClick={handleSignOut}
          className="mt-10 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 p-6 overflow-y-auto"
        style={{
          backgroundImage: "url('src/assets/bgdash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Topbar */}
        <div className=" shadow flex items-center justify-between p-4 sticky top-0 z-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-700"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-amber-50  font-bold text-3xl capitalize">
            Welcome, {role}
          </div>
        </div>
        <div className="border bg-[#76d1f535] p-4 shadow rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
