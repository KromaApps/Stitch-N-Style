import React from "react";

const BudgetInput = ({ budget, handleBudgetChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Enter Your Budget
      </h2>
      <input
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter Your budget"
        min={50}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default BudgetInput;
