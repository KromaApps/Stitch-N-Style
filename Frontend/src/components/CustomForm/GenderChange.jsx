import React from "react";

const GenderChange = ({ gender, handleGenderChange }) => (
  <div className="space-y-2">
    <p className="text-gray-600">Hi there! Who is this for?</p>
    <select
      value={gender}
      onChange={handleGenderChange}
      className="w-full px-3 py-2 border rounded-md"
    >
      <option value="">Select Gender</option>
      <option value="men">Men</option>
      <option value="women">Women</option>
      <option value="girls">Girls</option>
      <option value="boys">Boys</option>
    </select>
  </div>
);

export default GenderChange;
