import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import UserManagement from "./pages/dashboards/UserManagement";
import CostExplorer from "./pages/dashboards/CostExplorer";
import Onboarding from "./pages/dashboards/Onboarding";
import AwsServices from "./pages/dashboards/AwsServices";
import Home from "./pages/Home";
import React from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<Home />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="cost-explorer" element={<CostExplorer />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="aws-services" element={<AwsServices />} />
          </Route>
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
