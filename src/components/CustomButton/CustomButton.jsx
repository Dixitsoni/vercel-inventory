import { Button } from "@mui/material";
import React from "react";

function CustomButton({ ...rest }) {
  return (
      <Button {...rest}>{rest.value}</Button>
  );
}

export default CustomButton;
