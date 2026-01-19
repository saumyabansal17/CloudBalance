import React, { useEffect, useState } from "react";
import { fetchAccount, fetchMyAccount } from "../api/api";
import { useSelector } from "react-redux";

const AccountDropdown = ({ onAccountChange }) => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const { user } = useSelector((state) => state.auth);
  const role = user?.role;

  useEffect(() => {
    const loadAccounts = async () => {
      let data = [];

      if (role === "ADMIN" || role === "READ-ONLY") {
        const res = await fetchAccount();
        data = res.data || []; 
        setSelectedAccount(""); 
        onAccountChange(""); 
      } else {
        const res = await fetchMyAccount();
        data = res.data || []; 
        if (data.length > 0) {
          setSelectedAccount(data[2].awsId);
          onAccountChange(data[2].awsId); 
        }
      }

      setAccounts(data);
    };

    loadAccounts();
  }, [role]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedAccount(value);
    onAccountChange(value);
  };

  return (
    <select
      value={selectedAccount}
      onChange={handleChange}
      className="border border-[#cfdde5] rounded-sm px-3 py-2 bg-white text-[#0a3ca2] mt-2 ml-320"
    >
      {(role === "ADMIN" || role === "READ-ONLY") && (
        <option value="">All Accounts</option>
      )}

      {accounts.map((acc) => (
        <option key={acc.awsId} value={acc.awsId}>
          {acc.accountName} ({acc.awsId})
        </option>
      ))}
    </select>
  );
};

export default AccountDropdown;

