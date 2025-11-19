import React from "react";
import { NavLink } from "react-router-dom";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

const Sidebar = () => {
  const role = localStorage.getItem("hasRole");

  const baseClasses =
    "text-black text-[18px] font-normal no-underline flex items-center gap-3 pl-4";
  const activeClasses = "text-blue-600 font-bold flex items-center gap-3 pl-4 ";

  return (
    <div className="w-[15%] p-3">
      <aside className="flex flex-col gap-5 mt-3">
        {role === "ADMIN" && (
          <>
            <NavLink
              to="onboarding"
              className={({ isActive }) =>
                isActive ? `${baseClasses} ${activeClasses}` : baseClasses
              }
            >
              <span>
                <GroupAddOutlinedIcon />
              </span>
              <span>Onboarding</span>
            </NavLink>
          </>
        )}

        {(role === "READ ONLY" || role === "ADMIN") && (
          <>
            <NavLink
              to="user-management"
              className={({ isActive }) =>
                isActive ? `${baseClasses} ${activeClasses}` : baseClasses
              }
            >
              <span>
                <ManageAccountsOutlinedIcon />
              </span>
              <span> User Management</span>
            </NavLink>
          </>
        )}

        <NavLink
          to="cost-explorer"
          className={({ isActive }) =>
            isActive ? `${baseClasses} ${activeClasses}` : baseClasses
          }
        >
          <span>
            <MonetizationOnOutlinedIcon />
          </span>
          <span> Cost Explorer</span>
        </NavLink>

        <NavLink
          to="aws-services"
          className={({ isActive }) =>
            isActive ? `${baseClasses} ${activeClasses}` : baseClasses
          }
        >
          <span>
            <CloudQueueOutlinedIcon />
          </span>
          <span> Aws Services</span>
        </NavLink>
      </aside>
    </div>
  );
};

export default Sidebar;
