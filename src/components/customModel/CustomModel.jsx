import { Modal } from "@mui/material";
import React from "react";

function CustomModel({ children, ...rest }) {
  return (
    <div>
      <Modal sx={{ display: "flex", justifyContent: "center",height:'400px',marginTop:'40px' }} {...rest}>
        {children}
      </Modal>
    </div>
  );
}

export default CustomModel;
