import React from "react";
import Header from "../../layout/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="flex h-[93vh]">
        <Sidebar />
        <div className="text-center w-[85%] p-6 bg-gray-100">
          {/* <div>Welcome Home!!</div> */}
          {/* <div style={{paddingTop:"24px"}}> */}
            <Outlet/>
          {/* </div> */}
          
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;


