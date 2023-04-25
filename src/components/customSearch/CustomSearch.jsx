import { Input } from "@mui/material";
import React from "react";

function CustomSearch({ ...rest }) {
  return (
    <div>
      <Input {...rest} />
    </div>             
  );
}

export default CustomSearch;
