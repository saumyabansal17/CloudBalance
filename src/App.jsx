// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboards/Dashboard";
import UserManagement from "./pages/dashboards/Users/UserManagement";
import CostExplorer from "./pages/dashboards/CostExplorer";
import Onboarding from "./pages/dashboards/Onboarding";
import AwsServices from "./pages/dashboards/AwsServices";
import Home from "./pages/Home";
import React, { useState } from "react";
import AddUser from "./pages/dashboards/Users/AddUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import SidebarContextProvider from "./context/SidebarContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const handleLogin = ()=>{
    localStorage.setItem("isAuthenticated","true");
    console.log("app");
    setIsAuthenticated(true);
  }

  const handleLogout=()=>{
     localStorage.setItem("isAuthenticated", "false");
     setIsAuthenticated(false);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin}/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <SidebarContextProvider><Dashboard onLogout={handleLogout}/></SidebarContextProvider>
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard/user-management" replace/>} />
            <Route path="user-management">
              <Route index element={<UserManagement />} />
              <Route path="add-user" element={<AddUser />} />
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
