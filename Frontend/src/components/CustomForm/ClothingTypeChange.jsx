import React from "react";

const ClothingTypeChange = ({ clothingType, handleClothingTypeChange }) => (
  <div>
    <p className="text-gray-600 text-lg font-medium mb-4">
      Select Clothing Type:
    </p>
    <div className="flex flex-col space-y-2">
      {["top", "bottom", "both"].map((type) => (
        <label key={type} className="flex items-center space-x-2">
          <input
            type="radio"
            name="clothingType"
            value={type}
            checked={clothingType === type}
            onChange={handleClothingTypeChange}
            className="form-radio"
          />
          <span className="text-gray-800 capitalize">{type}</span>
        </label>
      ))}
    </div>
  </div>
);

export default ClothingTypeChange;
