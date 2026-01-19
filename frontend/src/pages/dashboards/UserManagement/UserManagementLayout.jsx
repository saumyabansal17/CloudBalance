import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { fetchAll } from "../../../api/api";
import { useSelector } from "react-redux";

const UserManagement = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "ADMIN";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => navigate("add-user");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetchAll();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Users
      </h2>

      <div className="bg-white px-6 py-4 rounded w-[80%]">
        <div className="text-left">
          <button
            onClick={handleClick}
            disabled={!isAdmin}
            className={`flex items-center gap-1 mb-4 px-3 py-2 rounded
              ${
                isAdmin
                  ? "bg-[#0a3ca2] text-white hover:bg-blue-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            <AddIcon />
            Add New User
          </button>
        </div>

        <div className="overflow-y-auto max-h-[65vh]">
          <table className="min-w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">First Name</th>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">Last Name</th>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">Email</th>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">Role</th>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">Last Login</th>
                <th className="px-4 py-3 text-left text-[#0a3ca2]">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="odd:bg-gray-100">
                    <td className="px-4 py-2">{u.firstName}</td>
                    <td className="px-4 py-2">{u.lastName}</td>
                    <td className="px-4 py-2">{u.email}</td>
                    <td className="px-4 py-2">
                      <span className="bg-blue-100 px-2 py-1 rounded text-xs">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {u.lastLoginTime
                        ? new Date(u.lastLoginTime).toLocaleString()
                        : "--"}
                    </td>
                    <td className="px-4 py-2">
                      <EditIcon
                        className={
                          isAdmin
                            ? "text-[#0a3ca2] cursor-pointer"
                            : "text-gray-400 cursor-not-allowed"
                        }
                        onClick={() =>
                          isAdmin &&
                          navigate(
                            "/dashboard/user-management/edit-user",
                            { state: u }
                          )
                        }
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
  );
};

export default UserManagement;
