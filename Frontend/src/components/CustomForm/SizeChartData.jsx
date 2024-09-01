import React from "react";

const SizeChartData = ({ sizeCharts }) => {
  if (!sizeCharts || sizeCharts.length === 0) return null;

  // Generate table headers dynamically based on the keys of the first item
  const headers = Object.keys(sizeCharts[0]);

  return (
    <div className="overflow-x-auto">
      <p className="text-gray-600 font-semibold">Size Chart</p>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {headers.map((key, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-300 text-left text-gray-600 font-medium"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizeCharts.map((item, index) => (
            <tr key={index}>
              {headers.map((header, i) => (
                <td
                  key={i}
                  className="px-6 py-3 border-b border-gray-300 text-gray-800"
                >
                  {item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChartData;
