import React from "react";
import SizeChartData from "./SizeChartData";

const SizeSelect = ({
  clothingType,
  gender,
  top,
  bottom,
  handleSizeSelect,
  selectedSize,
}) => {
  console.log("Selected Size in SizeSelect:", selectedSize); // Debug log
  console.log("Clothing Type:", clothingType); // Debug log

  const sizeData = clothingType === "top" ? top : bottom;

  return (
    <div>
      {clothingType && (
        <>
          <SizeChartData sizeCharts={sizeData} />
          {sizeData.map((size) => (
            <div key={size.size} className="flex items-center mb-2">
              <input
                type="radio"
                id={`size-${size.size}`}
                name="size"
                value={size.size}
                onChange={() => handleSizeSelect(clothingType, size.size)}
                checked={
                  (clothingType === "top" && size.size === selectedSize.top) ||
                  (clothingType === "bottom" &&
                    size.size === selectedSize.bottom)
                }
                className="mr-2"
              />
              <label htmlFor={`size-${size.size}`} className="text-gray-700">
                {size.size}
              </label>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SizeSelect;
