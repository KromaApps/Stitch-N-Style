import React from "react";

const SizeChartData = ({ sizeCharts }) => (
  <div className="overflow-x-auto">
    <p className="text-gray-600 font-semibold">Size Chart</p>
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800">
            Size
          </th>
          {Object.keys(sizeCharts[0]).map((key, index) => (
            <th
              key={index}
              className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 text-gray-800"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizeCharts.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-6 py-2 border-b border-gray-300">{row.size}</td>
            {Object.values(row).map((value, i) => (
              <td key={i} className="px-6 py-2 border-b border-gray-300">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SizeChartData;
