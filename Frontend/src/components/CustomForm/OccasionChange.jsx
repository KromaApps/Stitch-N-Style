import React from "react";

const OccasionChange = ({ occasion, handleOccasionChange }) => (
  <div>
    <p className="text-gray-600 text-lg font-medium mb-4">Select Occasion:</p>
    <div className="flex flex-col space-y-2">
      {["casual", "formal", "party", "sports"].map((occasionType) => (
        <label key={occasionType} className="flex items-center space-x-2">
          <input
            type="radio"
            name="occasion"
            value={occasionType}
            checked={occasion === occasionType}
            onChange={handleOccasionChange}
            className="form-radio"
          />
          <span className="text-gray-800 capitalize">{occasionType}</span>
        </label>
      ))}
    </div>
  </div>
);

export default OccasionChange;
