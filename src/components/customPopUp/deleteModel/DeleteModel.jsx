import { Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";

const DeleteModel = ({ setOpenPopUp, deleteDataHandler, openPopUp }) => {
  return (
    <div
      style={{ backgroundColor: "white", width: 300, height: 200, padding: 20, marginTop: '180px' }}
    >
      <div style={{ textAlign: "center" }}>
        <Typography sx={{ color: "red" }}>
          Are you sure want to delete Product !
        </Typography>
      </div>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <Typography>You can click on yes Button Otherwise No</Typography>
      </div>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <CustomButton
          value={"Yes"}
          variant={"contained"}
          onClick={() => {
            deleteDataHandler(openPopUp?.id);
            setOpenPopUp({ open: false, type: "" });
          }}
        />
        <CustomButton
          value={"No"}
          style={{ marginLeft: 20 }}
          variant={"outlined"}
          onClick={() => setOpenPopUp({ open: false, type: "" })}
        />
      </div>
    </div>
  );
};

export default DeleteModel;
