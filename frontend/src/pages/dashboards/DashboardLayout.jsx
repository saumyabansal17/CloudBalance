import React, { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("hasRole");
  const hasRedirected = useRef(false);

  useEffect(() => {
    console.log("dashboard mounted");
    if (location.pathname === "/dashboard" &&
      !hasRedirected.current) {
      hasRedirected.current = true;
      if (role === "ADMIN" || role === "READ-ONLY") {
        navigate("/dashboard/user-management", { replace: true });
      } else if (role === "CUSTOMER") {
        navigate("/dashboard/cost-explorer", { replace: true });
      }
    }
   
  }, [location.pathname, role, navigate]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>

        <div className="flex flex-1">
          <Sidebar className="h-screen overflow-hidden" />

          <div className="flex flex-col flex-1 bg-gray-100 min-w-0">
            <div className="flex-1 overflow-y-auto">
              <Outlet />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
