import React from "react";
// import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Cloudkeeper_New.svg";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // setIsAuthenticated(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div>
      <header className="p-[18px] shadow-md flex justify-between items-center">
        <img src={logo} alt="Cloudkeeper" className="ml-[2%] " />

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
