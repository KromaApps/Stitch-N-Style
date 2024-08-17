import React from "react";

const ClothingTypeChange = ({ clothingType, handleClothingTypeChange }) => (
  <div className="space-y-2">
    <p className="text-gray-600">What type of clothing are you looking for?</p>
    <select
      value={clothingType}
      onChange={handleClothingTypeChange}
      className="w-full px-3 py-2 border rounded-md"
    >
      <option value="">Select Clothing Type</option>
      <option value="both">Both</option>
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
    </select>
  </div>
);

export default ClothingTypeChange;
