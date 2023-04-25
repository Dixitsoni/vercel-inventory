import { Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";

const ValidationPop = ({ setOpenPopUp, type }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "20%",
        padding: "20px",
        color: "red",
      }}
    >
      <Typography>Please Fill all Input field</Typography>
      <CustomButton
        value={"Back To ADD/Edit model"}
        variant={"contained"}
        style={{ marginTop: "20px" }}
        onClick={() => {
          setOpenPopUp({ open: false, type: "" });
          setOpenPopUp({ open: true, type: "addproduct" });
        }}
      />
    </div>
  );
};

export default ValidationPop;
