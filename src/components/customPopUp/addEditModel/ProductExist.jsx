import { Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";

const ProductExist = ({ setOpenPopUp }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "20%",
        padding: "20px",
        color: "red",
      }}
    >
      <Typography>Product is Already Exist</Typography>
      <CustomButton
        value={"Back to Add Model"}
        variant={"contained"}
        style={{ marginTop: "20px" }}
        onClick={() => {
          setOpenPopUp({ open: false, type: "product_exist" });
          setOpenPopUp({ open: true, type: "addproduct" });
        }}
      />
    </div>
  );
};

export default ProductExist;
