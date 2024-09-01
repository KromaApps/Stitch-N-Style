import React from "react";
import Button from "./Button";

const Next = ({ handleNext }) => (
  <button
    type="button"
    onClick={handleNext}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Next
  </button>
);

export default Next;
