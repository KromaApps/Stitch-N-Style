import React from "react";

const GenderChange = ({ gender, handleGenderChange }) => (
  <div>
    <p className="text-gray-600 text-lg font-medium mb-4">Select Gender:</p>
    <div className="flex flex-col space-y-2">
      {["men", "women", "boys", "girls"].map((g) => (
        <label key={g} className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value={g}
            checked={gender === g}
            onChange={handleGenderChange}
            className="form-radio"
          />
          <span className="text-gray-800 capitalize">{g}</span>
        </label>
      ))}
    </div>
  </div>
);

export default GenderChange;
