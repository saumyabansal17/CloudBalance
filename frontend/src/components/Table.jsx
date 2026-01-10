import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns }) => {
  return (
    <div className="border border-gray-200 rounded-md max-h-[80vh] overflow-y-auto">
      <table className="min-w-full ">
        <thead className="bg-[#0A3BA2] text-white">
          <tr>
            {columns.map(({ label }) => (
              <th
                key={label}
                // scope="col"
                className="p-2 text-left text-sm font-medium border-r border-gray-200 last:border-r-0"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 even:bg-gray-100 odd:bg-white hover:bg-gray-50"
            >
              {columns.map(({ key }) => (
                <td
                  key={key}
                  className={`px-4 py-3 text-sm border-r border-gray-200`}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
