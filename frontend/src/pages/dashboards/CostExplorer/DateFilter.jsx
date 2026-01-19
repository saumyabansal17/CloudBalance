import React, { useState } from "react";

const DateFilter = ({ onApply }) => {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-05-31");
  const [error, setError] = useState("");

  const handleApply = () => {
    if (!startDate || !endDate) return;

    if (new Date(endDate) < new Date(startDate)) {
      setError("End date cannot be earlier than start date");
      return;
    }

    setError("");
    onApply({ startDate, endDate });
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-[#E6E6E6] rounded-md px-2 py-1">
          <label className="text-sm text-gray-600 mr-2">Start</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="outline-none text-sm"
          />
        </div>

        <div className="flex items-center border border-[#E6E6E6] rounded-md px-2 py-1">
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
          className="bg-[#0a3ca2] text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Apply
        </button>
      </div>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default DateFilter;
