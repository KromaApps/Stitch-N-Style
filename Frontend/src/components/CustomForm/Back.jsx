import React from "react";

const Back = ({ step, handleBack }) => (
  <button
    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
    onClick={handleBack}
    disabled={step === 0}
  >
    Back
  </button>
);

export default Back;
