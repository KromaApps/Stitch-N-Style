import React from "react";

const Button = ({ onClick, label, color = "blue" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-white bg-${color}-500 hover:bg-${color}-600 transition`}
  >
    {label}
  </button>
);

export default Button;
