import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

const UserManagement = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("add-user");
  const [users, setUsers] = useState([]);

  // const users = [
  //   {
  //     id: "1",
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "john.doe@example.com",
  //     roles: ["Admin", "Read-Only"],
  //     lastLogin: "2025-01-12T10:22:09Z",
  //   },
  //   {
  //     id: "2",
  //     firstName: "Sarah",
  //     lastName: "Connor",
  //     email: "s.connor@example.com",
  //     roles: ["Customer"],
  //     lastLogin: "2025-02-03T08:15:44Z",
  //   },
  //   {
  //     id: "3",
  //     firstName: "Michael",
  //     lastName: "Scott",
  //     email: "m.scott@dundermifflin.com",
  //     roles: ["Admin", "Read-Only"],
  //     lastLogin: "2025-02-10T14:43:11Z",
  //   },
  //   {
  //     id: "4",
  //     firstName: "Angela",
  //     lastName: "Lopez",
  //     email: "angela.lopez@example.com",
  //     roles: ["Admin"],
  //     lastLogin: "2025-02-12T12:09:23Z",
  //   },
  // ];

  useEffect(() => {
    fetch("https://69267cbd26e7e41498fa76d3.mockapi.io/api/userData/Cloud")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // console.log(users);

  return (
    <>
      {/* <div className="flex-row text-left gap-8 mb-4"> */}
      <h2 className="text-2xl text-left font-semibold text-gray-800 mb-6">
        Users
      </h2>
      <div className="text-left ">
        <button
          onClick={handleClick}
          className="flex items-center gap-1 bg-blue-800 mb-4 text-white px-3 py-2 rounded hover:bg-blue-700 text-md"
        >
           <AddIcon />
          <span>Add New User</span>
        </button>
      </div>

      {/* </div> */}

      <div className="rounded shadow">
        <table className="min-w-full ">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                First Name
              </th>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                Last Name
              </th>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                Email ID
              </th>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                Roles
              </th>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                Last Login
              </th>
              <th className="px-4 py-3 text-left font-bold text-blue-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-100">
            {users.map((user) => (
              <tr
                key={user.id}
                className="text-left odd:bg-gray-100 even:bg-white"
              >
                <td className="px-4 py-2 text-gray-700">{user.firstName}</td>
                <td className="px-4 py-2 text-gray-700">{user.lastName}</td>
                <td className="px-4 py-2 text-gray-700">{user.email}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2">
                    {user.roles && user.roles.length > 0 ? (
                      user.roles.map((role, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-gray-800 px-2 py-1 rounded-sm border-1 border-blue-800 text-xs"
                        >
                          {role}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-s">
                        No roles assigned
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {user.lastLogin
                    ? new Date(user.lastLogin).toLocaleDateString() +
                      " " +
                      new Date(user.lastLogin).toLocaleTimeString()
                    : "--"}
                </td>
                <td>
                  <EditIcon className="text-blue-800 " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserManagement;
