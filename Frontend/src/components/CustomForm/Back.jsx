import React from "react";
import Button from "./Button.jsx";

const Back = ({ handleBack }) => (
  <Button onClick={handleBack} label="Back" color="gray" />
);

export default Back;
