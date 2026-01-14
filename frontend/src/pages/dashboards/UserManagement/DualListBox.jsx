import React, { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

const DualListBox = ({ title, items, selected, setSelected }) => {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.includes(search)
  );

  const toggleItem = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selected.length === filteredItems.length) {
      setSelected([]);
    } else {
      setSelected(filteredItems.map((i) => i.id));
    }
  };

  return (
    <div className="border border-[#E6E6E6] rounded-sm w-[400px] bg-white">
      <div className="flex justify-between text-sm bg-[#eef6fe] p-2 z-10">
        <span className="font-bold">{title}</span>
        <span className="text-[#0a3ca2] font-semibold">
          {items.length} {title.includes("Choose") ? "Available" : "Added"}
        </span>
      </div>

      {items.length > 0 && (
         <div className="flex items-center gap-2 px-4 py-2 border-b border-[#E6E6E6]">
    <SearchOutlinedIcon className="text-gray-400 text-lg" />
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full text-sm text-gray-700 outline-none"
    />
  </div>
      )}

      {items.length > 0 && (
        <label className="flex items-center gap-2 text-sm border-b border-[#E6E6E6] px-2 py-3 font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={
              filteredItems.length > 0 &&
              selected.length === filteredItems.length
            }
            onChange={selectAll}
            className="cursor-pointer"
          />
          Select All
        </label>
      )}

      <div className="h-60 overflow-auto">
        {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center mt-30">
                <FolderCopyOutlinedIcon className="text-blue-800"/>
          <p className="text-center font-medium">
            No Account IDs
          </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-2 text-sm px-2 py-3 font-medium cursor-pointer border-b border-[#E6E6E6]"
            >
              <input
                type="checkbox"
                checked={selected.includes(item.id)}
                onChange={() => toggleItem(item.id)}
                className="cursor-pointer"
              />
              {item.name} ({item.id})
            </label>
          ))
        )}
      </div>
    </div>
  );
};

export default DualListBox;
