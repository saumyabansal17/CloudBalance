import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/Cloudkeeper_New.svg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {SidebarContext} from "../context/SidebarContext";

const Header = ({onLogout}) => {
  const navigate = useNavigate();

  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  const handleLogout = () => {
    // localStorage.setItem("isAuthenticated", "false");
    onLogout();
    localStorage.setItem("hasRole", "");
    navigate("/",{replace:true});
    // <Navigate to="/" replace/>
  };
  return (
    <>
      <div>
      <header className="p-[18px] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-12 ">
          <img src={logo} alt="Cloudkeeper" className="ml-4 " />
        <MenuOutlinedIcon className="text-[#1E63E9] cursor-pointer" onClick={handleClick}/>
        </div>
        
        <button
          onClick={handleLogout}
          className="bg-white flex items-center justify-between text-[#1E63E9] font-medium border-2 border-[#1E63E9] gap-2 px-3 py-1 rounded-md"
        >
          <LogoutRoundedIcon titleAccess="Logout" />
          <div className="font-semibold text-[16px] leading-6">
            Logout
          </div>
        </button>
      </header>
    </div>
    </>
  );
};

export default Header;
