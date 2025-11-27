import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Cloudkeeper_New.svg";

const Login = ({ onLogin }) => {
  
  const navigate = useNavigate();
  const [hasRole, setHasRole] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dummyData = [
    { id: 1, email: "sam@gmail.com", password: "sam1234", role: "ADMIN" },
    { id: 2, email: "sam2@gmail.com", password: "sam1234", role: "USER" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const data = dummyData.find(
      (u) => u.email === userData.email && u.password === userData.password
    );

    if (data) {
      onLogin();
      console.log("login page");
      setHasRole(data.role);
      localStorage.setItem("hasRole", data.role);
      navigate("/dashboard/user-management");
    } else {
      console.log("No user found");
      alert("Wrong credentials!!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/dashboard/user-management");
    }
  }, [navigate]);

  return (
    <>
      <div className="pt-[20%] flex flex-col items-center justify-center">
        <img src={logo} alt="CloudKeeper" className="mb-3" />

        <form className="w-[350px] bg-white text-center rounded-xl p-0">
          <div className="mb-5 text-left">
            <label
              htmlFor="email"
              // className="font-semibold text-sm"
            >
              Email
            </label>
            <input
              type="email"
              value={userData.email}
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 px-3 py-2 w-full rounded-lg border border-gray-300"
            />
          </div>

          <div className="mb-5 text-left">
            <label
              htmlFor="password"
              // className="font-semibold text-sm"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 px-3 py-2 w-full rounded-lg border border-gray-300"
            />
          </div>

          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white w-full py-2 rounded-md font-semibold cursor-pointer hover:bg-blue-600 transition"
          >
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
