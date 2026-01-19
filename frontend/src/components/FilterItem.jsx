import React, { useState, useEffect } from "react";

const FilterItem = ({ label, values = [], draftFilters, setDraftFilters, onApplyFilter, onCancelFilter }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [localDraft, setLocalDraft] = useState(draftFilters[label] || []);

  useEffect(() => {
    setLocalDraft(draftFilters[label] || []);
  }, [draftFilters, label]);

  const toggleValue = (value) => {
    setLocalDraft((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    setDraftFilters((prev) => ({ ...prev, [label]: localDraft }));
    onApplyFilter && onApplyFilter(label, localDraft);
    setOpen(false);
  };

  const handleCancel = () => {
    const appliedValues = draftFilters[label] || [];
    setLocalDraft(appliedValues);
    onCancelFilter && onCancelFilter(label);
    setOpen(false);
  };

  const filteredValues = values.filter((v) =>
    v.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border-b border-[#E6E6E6]">
      <div onClick={() => setOpen(!open)} className="flex items-center justify-between py-3 cursor-pointer">
        <div className="flex items-center gap-3">
          <input type="checkbox" readOnly checked={open} className="w-4 h-4 accent-[#0a3ca2]" />
          <span className="font-medium">{label}</span>
        </div>
        <span className="text-xs text-gray-400">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="pb-4 px-1">
          <p className="text-xs text-[#0a3ca2] mb-2">{localDraft.length} items selected</p>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border border-[#cfdde5] rounded mb-3"
          />

          <div className="max-h-40 overflow-y-auto space-y-2 mb-3">
            {filteredValues.map((value) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localDraft.includes(value)}
                  onChange={() => toggleValue(value)}
                  className="accent-[#0a3ca2]"
                />
                <span className="text-sm">{value}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleApply}
              className="flex-1 py-1 bg-[#0a3ca2] text-white rounded hover:opacity-90"
            >
              Apply
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterItem;



