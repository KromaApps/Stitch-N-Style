import React from "react";

// fabric options
const fabricOptions = [
  { value: "cotton", label: "Cotton" },
  { value: "polyester", label: "Polyester" },
  { value: "wool", label: "Wool" },
  { value: "silk", label: "Silk" },
];

const FabricTypeChange = ({ fabricType, handleFabricTypeChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Select Fabric Type
      </h2>
      <div className="space-y-2">
        {fabricOptions.map((option) => (
          <div key={option.value}>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fabricType"
                value={option.value}
                checked={fabricType === option.value}
                onChange={handleFabricTypeChange}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FabricTypeChange;
