import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "../../../api/api";
import AccountTransfer from "./AccountTransfer";

const AddUser = () => {
  const navigate = useNavigate();
  const [associatedIds,setAssociatedIds]=useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleId: "",
    password: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roleId" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      accountIds: associatedIds,
    };
    try {
      const users = await addUser(payload);
      toast.success("User created successfully!");
      navigate("/dashboard/user-management", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/user-management", { replace: true });
  };

  return (
    <>
      <div className="px-6 pt-6 mb-6">
        <h2 className="text-xl text-left font-semibold mb-6">Add New User</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-sm p-6 max-w-8xl"
        >
          <div className="w-3xl grid grid-rows-2 grid-cols-2 gap-y-8 gap-x-20 mb-4">
            <div className="text-left">
              <label htmlFor="firstName" className="text-left font-medium">
                First Name <span className="text-red-600">*</span>
              </label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="Enter First Name"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="lastName" className="font-medium ">
                Last Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Enter Last Name"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="email" className="font-medium">
                Email ID <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter Email ID"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="role" className="text-left font-medium">
                Select Role <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                name="roleId"
                id="role"
                onChange={handleChange}
                value={formData.roleId}
                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1 bg-gray-100"
                required
              >
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">Read-Only</option>
                <option value="3">Customer</option>
              </select>
            </div>

            <div className="text-left">
              <label htmlFor="password" className="font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

          </div>
          {formData.roleId === 3 && (
            <div className="mb-8">
              <AccountTransfer mode="ADD"associatedIds={associatedIds} setAssociatedIds={setAssociatedIds}/>
            </div>
          )}

          <div className="mt-8 text-right">
            <button
              type="button"
              onClick={handleCancel}
              className="border text-black px-6 py-2 mr-2 rounded-sm hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0a3ca2] text-white px-6 py-2 rounded-sm hover:bg-blue-800 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
