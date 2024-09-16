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
  console.log("Selected Size in SizeSelect:", selectedSize);
  console.log("Clothing Type:", clothingType);

  const topSizeData =
    clothingType === "both" || clothingType === "top" ? top : [];
  const bottomSizeData =
    clothingType === "both" || clothingType === "bottom" ? bottom : [];

  return (
    <div>
      {topSizeData.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Select Top Size:</h2>
          <SizeChartData
            sizeCharts={topSizeData}
            handleSizeSelect={(size) => handleSizeSelect("top", size)}
            selectedSize={selectedSize}
            clothingType="top"
          />
        </>
      )}
      {bottomSizeData.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-4">Select Bottom Size:</h2>
          <SizeChartData
            sizeCharts={bottomSizeData}
            handleSizeSelect={(size) => handleSizeSelect("bottom", size)}
            selectedSize={selectedSize}
            clothingType="bottom"
          />
        </>
      )}
    </div>
  );
};

export default SizeSelect;
