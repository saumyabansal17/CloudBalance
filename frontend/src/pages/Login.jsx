import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Cloudkeeper_New.svg";
import { login } from "../api/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import  {fetchUserProfile} from "../redux/auth/authActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(userData);
      console.log(res);
      toast.success("Loggin succesful");
      
      // localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token",res.data.token);
      // localStorage.setItem("hasRole", res.data.role);
      // localStorage.setItem("name",res.data.name);
      dispatch(fetchUserProfile());
      navigate("/dashboard",{replace:true});

    } catch (err) {
      console.log(err);
      if (err.status === 404) {
        toast.error("User not found");
      } else if (err.status === 401) {
        toast.error("Password incorrect");
      } else {
        toast.error("Something went wrong");
      }
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   if (localStorage.getItem("isAuthenticated") === "true") {
  //     navigate("/dashboard/user-management");
  //   }
  // }, []);

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center ">
          <img src={logo} alt="CloudKeeper" className="mb-10" />

          <form className="bg-white text-center rounded-l w-[500px]">
            <div className="mb-10 text-left">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                value={userData.email}
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 px-3 py-2 w-full rounded-sm border border-gray-300"
              />
            </div>

            <div className="mb-10 text-left">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-2 px-3 py-2 w-full rounded-sm border border-gray-300"
              />
            </div>

            <button
              // type="button"
              onClick={handleLogin}
              className="bg-[#4398d7] mt-3 text-white w-full h-13 py-2 rounded-sm cursor-pointer hover:shadow-[6px_13px_15px_#0a3ca24a] transition"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="h-full bg-gray-50">Footer</div>
      </div>
    </>
  );
};

export default Login;
