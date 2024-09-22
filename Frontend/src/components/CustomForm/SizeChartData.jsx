import React from "react";

const SizeChartData = ({
  sizeCharts,
  handleSizeSelect,
  selectedSize,
  clothingType,
}) => {
  if (!sizeCharts || sizeCharts.length === 0) return null;
  const headers = Object.keys(sizeCharts[0]);

  return (
    <div className="overflow-x-auto max-w-full">
      <p className="text-gray-600 font-semibold">Size Chart</p>
      <table className="min-w-full bg-white border border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="px-2 py-2 border-b-2 border-gray-300 text-left text-gray-600 font-medium">
              Select
            </th>
            {headers.map((key, index) => (
              <th
                key={index}
                className="px-2 py-2 border-b-2 border-gray-300 text-left text-gray-600 font-medium"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizeCharts.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border-b border-gray-300">
                <input
                  type="radio"
                  id={`size-${item.size}-${clothingType}`}
                  name={`size-${clothingType}`}
                  value={item.size}
                  onChange={() => handleSizeSelect(clothingType, item.size)}
                  checked={
                    (clothingType === "top" &&
                      item.size === selectedSize.top) ||
                    (clothingType === "bottom" &&
                      item.size === selectedSize.bottom) ||
                    (clothingType === "both" &&
                      (item.size === selectedSize.top ||
                        item.size === selectedSize.bottom))
                  }
                />
              </td>
              {headers.map((header, i) => (
                <td
                  key={i}
                  className="px-2 py-2 border-b border-gray-300 text-gray-800"
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
