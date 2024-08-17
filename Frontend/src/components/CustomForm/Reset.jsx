import React from "react";

const Reset = ({ handleReset }) => (
  <button
    className="px-4 py-2 bg-red-500 text-white rounded-md"
    onClick={handleReset}
  >
    Reset
  </button>
);

export default Reset;
