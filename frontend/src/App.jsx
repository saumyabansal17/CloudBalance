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
      <ToastContainer autoclose={1500}/>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"           
            element={
              <ProtectedRoute>
                <SidebarContextProvider>
                  <DashboardLayout />
                </SidebarContextProvider>
              </ProtectedRoute>
            }
          >
            <Route
              index
              // element={<Navigate to="/dashboard/user-management" replace />}
              element={<DashboardLayout/>}
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
