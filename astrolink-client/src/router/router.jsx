import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Customer from "../pages/dashboard/Customer";
import Manager from "../pages/dashboard/Manager";
import Technician from "../pages/dashboard/Technician";
import ManagerLogin from "../pages/loginAdmin/ManagerLogin";
import TechnicianLogin from "../pages/loginAdmin/TechnicianLogin";
import DashboardLayout from "../components/DashboardLayout";
import SubmitComplaint from "../pages/dashboard/components/SubmitComplaint";
import AssignTechnician from "../pages/dashboard/components/AssignTechnician";
import RecentComplaints from "../pages/dashboard/components/RecentComplaints";
import TechnicianComplaint from "../pages/dashboard/components/TechnicianComplaint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error: Page not found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:"customer",
        element: <Customer></Customer>
      },
      {
        path:"manager",
        element: <Manager></Manager>
      },
      {
        path:"technician",
        element: <Technician></Technician>
      },
      {
        path: "managerlogin",
        element: <ManagerLogin></ManagerLogin>
      },
      {
        path: "technicianlogin",
        element: <TechnicianLogin></TechnicianLogin>
      },
      {
        path: "dashboardLayout",
        element: <DashboardLayout></DashboardLayout>
      },
      {
        path: "submitComplaint",
        element: <SubmitComplaint></SubmitComplaint>
      },
      {
        path: "showComplaint",
        element: <RecentComplaints></RecentComplaints>
      },
      {
        path: "assign",
        element: <AssignTechnician></AssignTechnician>
      },
      {
        path: "technicianSolve",
        element: <TechnicianComplaint></TechnicianComplaint>
      }
    ],
  },
]);

export default router;
