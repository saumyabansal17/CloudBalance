import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import {SidebarContext} from "../../context/SidebarContext";

const Sidebar = () => {
  const role = localStorage.getItem("hasRole");

  const {isOpen} = useContext(SidebarContext);

  const baseClasses =
    "font-normal flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#ecf5fb] transition-all ease-in-out duration-200";

  return (
    <div className={`${isOpen ? "w-65 p-3" : "w-20 p-3"}`}>
      <aside className="flex flex-col gap-2 mt-3">
        {(role === "READ ONLY" || role === "ADMIN") && (
          <NavLink
            to="user-management"
            className={({ isActive }) =>
              isActive
                ? `${baseClasses} bg-[#ecf5fb] active ${isOpen ? "" : "w-14"}`
                : `${baseClasses} hovers ${isOpen ? "" : "w-14"}`
            }
          >
            <span className="icon transition-all ease-in-out duration-200">
              <ManageAccountsOutlinedIcon />
            </span>
            <span className={`${isOpen ? "" : "hidden"}`}>
              {" "}
              User Management
            </span>
          </NavLink>
        )}
        {role === "ADMIN" && (
          <>
            <NavLink
              to="onboarding"
              className={({ isActive }) =>
                isActive
                  ? `${baseClasses} bg-[#ecf5fb] active ${isOpen ? "" : "w-14"}`
                  : `${baseClasses} hovers ${isOpen ? "" : "w-14"}`
              }
            >
              {/* {isActive} */}
              {/* <div className="bg-blue-200 p-2 rounded-md flex gap-4 w-[100%]"> */}
              <span className="icon transition-all ease-in-out duration-200">
                <GroupAddOutlinedIcon />
              </span>
              <span className={`${isOpen ? "" : "hidden"}`}> Onboarding</span>
              {/* </div> */}
            </NavLink>
          </>
        )}

        <NavLink
          to="cost-explorer"
          className={({ isActive }) =>
            isActive
              ? `${baseClasses} bg-[#ecf5fb] active ${isOpen ? "" : "w-14"}`
              : `${baseClasses} hovers ${isOpen ? "" : "w-14"}`
          }
        >
          <span className="icon transition-all ease-in-out duration-200">
            <MonetizationOnOutlinedIcon />
          </span>
          <span className={`${isOpen ? "" : "hidden"}`}> Cost Explorer</span>
        </NavLink>

        <NavLink
          to="aws-services"
          className={({ isActive }) =>
            isActive
              ? `${baseClasses} bg-[#ecf5fb] active ${isOpen ? "" : "w-14"}`
              : `${baseClasses} hovers ${isOpen ? "" : "w-14"}`
          }
        >
          <span className="icon transition-all ease-in-out duration-200">
            <CloudQueueOutlinedIcon />
          </span>
          <span className={`${isOpen ? "" : "hidden"}`}> Aws Services</span>
        </NavLink>
      </aside>
    </div>
  );
};

export default Sidebar;
