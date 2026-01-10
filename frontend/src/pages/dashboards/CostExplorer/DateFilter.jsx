import React, { useState } from "react";

const DateFilter = ({ onApply }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApply = () => {
    if (!startDate || !endDate) return;
    onApply({ startDate, endDate });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center border border-[#E6E6E6] rounded-md px-2 py-1 cursor-pointer">
        <label className="text-sm text-gray-600 mr-2">Start</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="outline-none text-sm"
        />
      </div>

      <div className="flex items-center border border-[#E6E6E6] rounded-md px-2 py-1 cursor-pointer">
        <label className="text-sm text-gray-600 mr-2">End</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="outline-none text-sm"
        />
      </div>

      <button
        onClick={handleApply}
        className="bg-[#0a3ca2] text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
      >
        Apply
      </button>
      {/* <Button variant="primary"/> */}
    </div>
  );
};

export default DateFilter;
