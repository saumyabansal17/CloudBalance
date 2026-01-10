import React from 'react'
import { tableData } from './utils';

const CostTable = ({ groupByLabel }) => {

  return (
    <div className="mt-6 border border-[#E6E6E6] rounded-md overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[#f8f8f8] border-b border-[#E6E6E6]">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">
              {groupByLabel}
            </th>

            {tableData.columns.map((month) => (
              <th key={month} className="text-center px-4 py-3 font-semibold">
                {month}
              </th>
            ))}

            <th className="text-center px-4 py-3 font-semibold text-[#0a3ca2]">
              Total
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData.rows.map((row) => (
            <tr key={row.key} className="border-b border-[#E6E6E6]">
              <td className="px-4 py-3 font-semibold">
                ({row.key})
              </td>

              {row.values.map((val, index) => (
                <td key={index} className="px-4 py-3 text-center border-r border-[#E6E6E6]">
                  ${val.toLocaleString()}
                </td>
              ))}

              <td className="px-4 py-3 text-center font-semibold text-[#0a3ca2]">
                ${row.total.toLocaleString()}
              </td>
            </tr>
          ))}

          <tr className="bg-[#eef6fe] font-semibold">
            <td className="px-4 py-3">Total</td>

            {tableData.grandTotal.map((val, index) => (
              <td key={index} className="px-4 py-3 text-center">
                ${val.toLocaleString()}
              </td>
            ))}

            <td className="px-4 py-3 text-center text-[#0a3ca2]">
              ${tableData.grandSum.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;