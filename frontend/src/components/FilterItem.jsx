import React from 'react'

const FilterItem = ({ label}) => {
  return (
    <label className="flex items-center justify-between py-3 border-b border-[#E6E6E6]">
      <div className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 border-[#E6E6E6] rounded accent-[#0a3ca2]"
        />

        <span className="text-md flex items-center gap-1">
          {label}
        </span>
      </div>

      <span className="text-xs text-gray-400">
        Include Only
      </span>
    </label>
  );
};

export default FilterItem