import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/Cloudkeeper_New.svg";
import Logout from "../assets/Logout.svg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {SidebarContext} from "../context/SidebarContext";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import {useSelector} from "react-redux"

const Header = () => {
  const navigate = useNavigate();
  const {user}=useSelector((state)=>state.auth);
  const name=user?.name.toUpperCase();

  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.setItem("hasRole", "");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/",{replace:true});
  };

  return (
    <>
      <header className="p-[18px] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-10 ">
          <img src={logo} alt="Cloudkeeper" className="ml-4 " />
        <MenuOutlinedIcon className={`cursor-pointer ${isOpen ? "text-[#0a3ca2]" : "hidden"}`} onClick={handleClick}/>
        </div>
        
        <div className="flex gap-4">
        <div className="flex gap-2 items-center cursor-pointer group">
          <div className="border rounded-3xl text-[#0a3ca2] p-1 bg-blue-100 group-hover:bg-[#0a3ca2] ">
            <GroupOutlinedIcon className="text-[#0a3ca2] group-hover:text-white"/>
          </div>
          
          <div className="flex-row items-center">
            <div className="text-xs">Welcome,</div>
            <div className="text-[#0a3ca2] font-bold text-xs">{name}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white flex cursor-pointer items-center justify-between text-[#0a3ca2] border border-[#0a3ca2] gap-2 px-3 py-1 rounded-sm"
        >
          <img src={Logout} alt="Logout" />
          <div className="font-semibold text-[16px] leading-6">
            Logout
          </div>
        </button>
        </div>
      </header>
    </>
  );
};

export default Header;
