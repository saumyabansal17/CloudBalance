// import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import UserManagement from "./pages/dashboards/UserManagement/UserManagementLayout";
import CostExplorer from "./pages/dashboards/CostExplorer/CostExplorer";
import Onboarding from "./pages/dashboards/Onboarding/Onboarding";
import AddUser from "./pages/dashboards/UserManagement/AddUser";
import ProtectedRoute from "./routes/ProtectedRoute";
import SidebarContextProvider from "./context/SidebarContext";
import EditUser from "./pages/dashboards/UserManagement/EditUser";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "./pages/dashboards/DashboardLayout";
import AwsServices from "./pages/dashboards/AwsServices/AwsServices";

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
      <ToastContainer autoclose={1500} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["ADMIN", "CUSTOMER", "READ-ONLY"]}>
                <SidebarContextProvider>
                  <DashboardLayout />
                </SidebarContextProvider>
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute
                  allowedRoles={["ADMIN", "CUSTOMER", "READ-ONLY"]}
                >
                  <DashboardLayout />
                </ProtectedRoute>
              }
            />
            <Route path="user-management">
              <Route
                index
                element={
                  <ProtectedRoute allowedRoles={["ADMIN", "READ-ONLY"]}>
                    <UserManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="add-user"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN"]}>
                    <AddUser />
                  </ProtectedRoute>
                }
              />
              <Route
                path="edit-user"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN"]}>
                    <EditUser />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="cost-explorer"
              element={
                <ProtectedRoute
                  allowedRoles={["ADMIN", "CUSTOMER", "READ-ONLY"]}
                >
                  <CostExplorer />
                </ProtectedRoute>
              }
            />
            <Route
              path="onboarding"
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <Onboarding />
                </ProtectedRoute>
              }
            />
            <Route
              path="aws-services"
              element={
                <ProtectedRoute
                  allowedRoles={["ADMIN", "CUSTOMER", "READ-ONLY"]}
                >
                  <AwsServices />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
