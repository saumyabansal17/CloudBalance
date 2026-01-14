import React, { useContext } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import {useSelector} from "react-redux"

const sidebarItems = [
  {
    key: "user-management",
    label: "User Management",
    icon: <ManageAccountsOutlinedIcon />,
    roles: ["ADMIN", "READ-ONLY"],
    path: "user-management",
  },
  {
    key: "onboarding",
    label: "Onboarding",
    icon: <GroupAddOutlinedIcon />,
    roles: ["ADMIN"],
    path: "onboarding",
  },
  {
    key: "cost-explorer",
    label: "Cost Explorer",
    icon: <MonetizationOnOutlinedIcon />,
    roles: ["ADMIN", "READ-ONLY", "CUSTOMER"],
    path: "cost-explorer",
  },
  {
    key: "aws-services",
    label: "AWS Services",
    icon: <CloudQueueOutlinedIcon />,
    roles: ["ADMIN", "READ-ONLY", "CUSTOMER"],
    path: "aws-services",
  },
];

const Sidebar = () => {
  // const role = localStorage.getItem("hasRole");
  const {user}=useSelector((state)=>state.auth);
  const role=user?.role;
  const { isOpen } = useContext(SidebarContext);

  const baseClasses =
    "font-normal flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#ecf5fb] transition-all ease-in-out duration-200";

  return (
    <div className={`${isOpen ? "w-65 p-3" : "w-20 p-3"}`}>
      <aside className="flex flex-col gap-2 mt-3">
        {sidebarItems
          .filter((item) => item.roles.includes(role))
          .map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              title={!isOpen ? item.label : ""} 
              className={({ isActive }) =>
                `${baseClasses} ${
                  isActive ? "bg-[#ecf5fb] active" : "hovers"
                } ${isOpen ? "" : "w-14"}`
              }
            >
              <span className="icon transition-all ease-in-out duration-200">
                {item.icon}
              </span>
              <span className={`${isOpen ? "" : "hidden"}`}>{item.label}</span>
            </NavLink>
          ))}
      </aside>
    </div>
  );
};

export default Sidebar;
