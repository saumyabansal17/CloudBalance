import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { fetchAll } from "../../../api/api";

const UserManagement = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("add-user");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const users = await fetchAll();
        setUsers(users.data);
        console.log("Users:", users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="px-6 py-6">
        <h2 className="text-2xl text-left font-semibold text-gray-800 mb-6 ">
          Users
        </h2>

        <div className="bg-white px-6 py-4 rounded w-[80%]">
          <div className="text-left ">
            <button
              onClick={handleClick}
              className="flex items-center gap-1 cursor-pointer bg-[#0a3ca2] mb-4 text-white px-3 py-2 rounded hover:bg-blue-800 text-md"
            >
              <AddIcon />
              <span>Add New User</span>
            </button>
          </div>
          <div className=" overflow-y-auto max-h-[65vh]">
            <table className="min-w-full rounded-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    First Name
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    Last Name
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    Email ID
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    Roles
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    Last Login
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-[#0a3ca2]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {loading ? (
                  <div className="text-center bg-white w-full">Loading...</div>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="text-left odd:bg-gray-100 even:bg-white"
                    >
                      <td className="px-4 py-2 text-gray-700">
                        {user.firstName}
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {user.lastName}
                      </td>
                      <td className="px-4 py-2 text-gray-700">{user.email}</td>
                      <td className="px-4 py-2">
                        <div className="w-fit bg-blue-100 text-gray-800 px-2 py-1 rounded-sm border-1 border-blue-800 text-xs">
                          {user.role}
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-700">
                        {user.lastLoginTime
                          ? new Date(user.lastLoginTime).toLocaleDateString() +
                            " " +
                            new Date(user.lastLoginTime).toLocaleTimeString()
                          : "--"}
                      </td>
                      <td>
                        <EditIcon
                          className="text-[#0a3ca2] cursor-pointer"
                          onClick={() => {
                            navigate("/dashboard/user-management/edit-user", {
                              state: user,
                            });
                          }}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
