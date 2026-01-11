import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { editUser } from "../../../api/api";
import AccountTransfer from "./AccountTransfer";

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const id = state?.id || "";
  // const role = state?.role || "";
  const [associatedIds, setAssociatedIds] = useState([]);

  const [formData, setFormData] = useState({
    firstName: state?.firstName || "",
    lastName: state?.lastName || "",
    email: state?.email || "",
    roleId: state?.roleId || null,
  });

  // console.log(state);
  console.log(id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roleId" ? Number(value) : value,
    }));
  };
  // console.log("formdata: ",formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      accountIds: associatedIds,
    };
    try {
      const users = await editUser(id, payload);
      console.log("User edited:", users.data);
      toast.success("User edited successfully!");
      navigate("/dashboard/user-management", { replace: true });
    } catch (error) {
      console.log(error);
    }

    // console.log("User created:", state);
  };

  const handleCancel = () => {
    navigate("/dashboard/user-management", { replace: true });
  };

  return (
    <>
      <div className="px-6 pt-6 mb-6">
        <h2 className="text-xl text-left font-semibold mb-6">Edit User</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-sm p-6 max-w-8xl"
        >
          <div className="w-2xl grid grid-rows-2 grid-cols-2 gap-y-8 gap-x-4 mb-4">
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
                className="w-full border-1 border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="lastName" className="font-medium text-gray-700">
                Last Name <span className="text-red-600">*</span>
              </label>
              <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Enter Last Name"
                className="w-full border-1 border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email ID <span className="text-red-600">*</span>
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter Email ID"
                className="w-full border-1 border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="roles"
                className="text-left font-medium text-gray-700"
              >
                Select Role <span className="text-red-600">*</span>
              </label>
              <br />
              <select
                name="roleId"
                id="role"
                onChange={handleChange}
                value={formData.roleId}
                className="w-full border-1 border-gray-300 rounded-sm px-3 py-2 mt-1"
                required
              >
                {/* <option value="">{role}</option> */}
                <option value="1">Admin</option>
                <option value="2">Read-Only</option>
                <option value="3">Customer</option>
              </select>
            </div>
          </div>

          {formData.roleId === 3 && (
            <div className="mb-8">
              <AccountTransfer
                id={id}
                mode="EDIT"
                associatedIds={associatedIds}
                setAssociatedIds={setAssociatedIds}
              />
            </div>
          )}

          <div className="mt-8 text-right">
            <button
              type="button"
              onClick={handleCancel}
              className="border-1 text-black px-6 py-2 mr-2 rounded-sm hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#0a3ca2] text-white px-6 py-2 rounded-sm hover:bg-blue-800 cursor-pointer"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
