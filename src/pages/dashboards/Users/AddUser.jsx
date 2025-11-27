import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddUser = () => {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("User created successfully!");
    console.log("User created:", formData);
  };

  const handleCancel=()=>{
    navigate("/dashboard/user-management");
  }

  return (
    <>
      
      <h2 className="text-xl text-left font-semibold mb-6">Add New User</h2>
      {/* <></> */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-8xl"
      >

        <div className="grid grid-rows-2 grid-cols-2 gap-8 mb-4">
          <div className="text-left">
            <label htmlFor="firstName" className="text-left font-medium text-gray-700">
              First Name *
            </label><br/>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="Enter First Name"
              className="w-md border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="lastName" className="font-medium text-gray-700">
              Last Name *
            </label><br/>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Enter Last Name"
              className="w-md border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>
        {/* </div> */}

        {/* <div className="flex gap-8 mb-4"> */}

          <div className="text-left">
            <label htmlFor="email" className="font-medium text-gray-700">
              Email ID *
            </label><br/>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter Email ID"
              className="w-md border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="roles" className="text-left font-medium text-gray-700">
              Select Roles *
            </label><br/>
            <select
              name="roles"
              id="roles"
              onChange={handleChange}
              value={formData.roles}
              className="w-md border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Read-only">Read-Only</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
        {/* </div> */}
        </div>

        <div className="mt-8 text-right">
          <button
            type="submit"
            onClick={handleCancel}
            className="border-1 text-black px-6 py-2 mr-2 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer/>
    </>
  );
};

export default AddUser;
