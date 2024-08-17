import React from "react";

const OccasionChange = ({ occasion, handleOccasionChange }) => (
  <div className="space-y-2">
    <p className="text-gray-600">Great! What's the occasion?</p>
    <select
      value={occasion}
      onChange={handleOccasionChange}
      className="w-full px-3 py-2 border rounded-md"
    >
      <option value="">Select Occasion</option>
      <option value="wedding-wear">Wedding Wear</option>
      <option value="casual-wear">Casual Wear</option>
      <option value="office-wear">Office Wear</option>
      <option value="party-wear">Party Wear</option>
    </select>
  </div>
);

export default OccasionChange;
