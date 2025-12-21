import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>

        <div className="flex flex-1">
          <Sidebar className="h-screen overflow-hidden" />

          <div className="flex flex-col flex-1 bg-gray-100">
            <div className="flex-1 overflow-y-auto px-6 pt-6">
              <Outlet />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
