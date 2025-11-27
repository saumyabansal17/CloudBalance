import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
// import  {SidebarContextProvider}  from "../../context/SidebarContext";

const Dashboard = ({onLogout}) => {
  return (
    <>
    {/* <SidebarContextProvider> */}
      <Header onLogout={onLogout}/>
      <div className="flex h-[93vh]">
        <Sidebar/>
        <div className="text-center w-[100%] p-6 bg-gray-100">
          <Outlet/>
        </div>
      </div>
    {/* </SidebarContextProvider> */}
    </>
  );
};

export default Dashboard;
