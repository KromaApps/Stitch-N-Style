import React from "react";
import Button from "./Button";

const Reset = ({ handleReset }) => (
  <Button onClick={handleReset} label="Reset" color="red" />
);

export default Reset;
