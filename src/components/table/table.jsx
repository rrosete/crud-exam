import React from "react";

export const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="bg-white border border-gray-200 w-full">
        <thead>
          <tr className="bg-gray-200 uppercase text-sm leading-normal">
            {columns.map((column, index) => (
              <th key={index} className="py-3 px-6 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm font-light">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-3 px-6 capitalize">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
