// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboards/DashboardLayout";
import UserManagement from "./pages/dashboards/UserManagement/UserManagementLayout";
import CostExplorer from "./pages/dashboards/CostExplorer";
import Onboarding from "./pages/dashboards/Onboarding";
import AwsServices from "./pages/dashboards/AwsServices";
import Home from "./pages/Home";
import React, { useState } from "react";
import AddUser from "./pages/dashboards/UserManagement/AddUser";
import ProtectedRoute from "./components/ProtectedRoute";
import SidebarContextProvider from "./context/SidebarContext";
import EditUser from "./pages/dashboards/UserManagement/EditUser";
import { ToastContainer } from "react-toastify";

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   return localStorage.getItem("isAuthenticated") === "true";
  // });

  // const handleLogin = ()=>{

  //   console.log("app");
  //   setIsAuthenticated(true);
  // }

  // const handleLogout=()=>{

  //    setIsAuthenticated(false);
  // }

  return (
    <>
      <ToastContainer autoclose={1500}/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <SidebarContextProvider>
                  <Dashboard />
                </SidebarContextProvider>
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Navigate to="/dashboard/user-management" replace />}
            />
            <Route path="user-management">
              <Route index element={<UserManagement />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="edit-user" element={<EditUser />} />
            </Route>
            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="aws-services" element={<AwsServices />} />
          </Route>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
