import React, { useEffect, useState } from "react";
import DualListBox from "./DualListBox";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { fetchAccount, fetchAssociatedAccs } from "../../../api/api";


const AccountTransfer = ({ id, mode, associatedIds, setAssociatedIds }) => {
  const [oldAvailableAcc, setoldAvailableAcc] = useState([]);
  const [oldAssociatedAcc, setoldAssociatedAcc] = useState([]);
  const [available, setAvailable] = useState(oldAvailableAcc);
  const [associated, setAssociated] = useState(oldAssociatedAcc);

  const [selectedAvailable, setSelectedAvailable] = useState([]);
  const [selectedAssociated, setSelectedAssociated] = useState([]);

  const [loading, setLoading] = useState(true);

  const excludeAssociated = (all, associated) => {
    const associatedIds = new Set(associated.map((acc) => acc.id));
    return all.filter((acc) => !associatedIds.has(acc.id));
  };

  const moveRight = () => {
    const moving = available.filter((acc) =>
      selectedAvailable.includes(acc.id)
    );

    setAvailable(
      available.filter((acc) => !selectedAvailable.includes(acc.id))
    );
    setAssociated([...associated, ...moving]);
    setSelectedAvailable([]);
  };

  const moveLeft = () => {
    const moving = associated.filter((acc) =>
      selectedAssociated.includes(acc.id)
    );

    setAssociated(
      associated.filter((acc) => !selectedAssociated.includes(acc.id))
    );
    setAvailable([...available, ...moving]);
    setSelectedAssociated([]);
  };

  const resetAll = () => {
    setAvailable(oldAvailableAcc);
    setAssociated(oldAssociatedAcc);
    setSelectedAvailable([]);
    setSelectedAssociated([]);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const allRes = await fetchAccount();
        const allAccounts = allRes.data.map((acc) => ({
          id: String(acc.awsId),
          name: acc.accountName,
        }));

        if (mode === "EDIT" && id) {
          const assocRes = await fetchAssociatedAccs(id);
          const associatedAccounts = assocRes.data.map((acc) => ({
            id: String(acc.awsId),
            name: acc.accountName,
          }));

          const filteredAvailable = excludeAssociated(
            allAccounts,
            associatedAccounts
          );
          setoldAvailableAcc(filteredAvailable);
          setoldAssociatedAcc(associatedAccounts);
          setAssociated(associatedAccounts);
          setAvailable(filteredAvailable);
        } else {
          setoldAvailableAcc(allAccounts);
          setoldAssociatedAcc([]);
          setAvailable(allAccounts);
          setAssociated([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [mode, id]);

  useEffect(() => {
    setAssociatedIds(associated.map((acc) => acc.id));
  }, [associated]);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-3 items-center">
        <h2 className="font-semibold">Manage Account Id(s)</h2>
        <div className="text-[#c3c2c2]">|</div>
        <button
          onClick={resetAll}
          type="button"
          className="text-blue-600 text-md font-medium cursor-pointer"
        >
          Reset
        </button>
      </div>
      <div className="bg-gray-100 p-4 border border-[#E6E6E6] rounded-sm">
        <div className="flex justify-between">
          <DualListBox
            title="Choose Account IDs to Associate"
            items={available}
            selected={selectedAvailable}
            setSelected={setSelectedAvailable}
          />

          <div className="flex flex-col justify-center gap-14">
            <button
              onClick={moveRight}
              disabled={selectedAvailable.length === 0}
              className="rounded-full bg-gray-600 h-10 w-10"
            >
              <ArrowForwardOutlinedIcon className="text-white" />
            </button>
            <button
              onClick={moveLeft}
              disabled={selectedAssociated.length === 0}
              className="rounded-full bg-gray-600 h-10 w-10"
            >
              <ArrowBackOutlinedIcon className="text-white" />
            </button>
          </div>

          <DualListBox
            title="Associated Account IDs"
            items={associated}
            selected={selectedAssociated}
            setSelected={setSelectedAssociated}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountTransfer;
