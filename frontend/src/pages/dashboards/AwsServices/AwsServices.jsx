import React, { useState } from "react";
import Table from "../../../components/Table";
import { serviceTableConfig } from "./utils";
import CostExplorer from "../CostExplorer/CostExplorer";

const AwsServices = () => {
  const [selectedType, setSelectedType] = useState("EC2");
  const chartOptions = [
    { type: "EC2", icon: <CostExplorer /> },
    { type: "RDS", icon: <CostExplorer />, name: "msline" },
    { type: "ASZ", icon: <CostExplorer /> },
  ];
  const { columns, rows } = serviceTableConfig[selectedType];

  return (
    <>
      <div className="p-6">
        <h3 className="text-2xl text-left font-bold text-gray-800 mb-4">
          Scheduler
        </h3>

        <div className="flex rounded-sm ml-4 mb-4">
          {chartOptions.map(({ type }) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`p-2 border border-[#E6E6E6] cursor-pointer ${
                selectedType === type
                  ? "bg-[#eef6fe] text-[#0a3ca2]"
                  : "bg-white text-gray-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="border-[#E6E6E6] rounded-md bg-white p-4">
          <Table rows={rows} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default AwsServices;
