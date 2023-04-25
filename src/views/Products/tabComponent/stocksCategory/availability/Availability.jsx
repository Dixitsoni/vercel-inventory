import { Typography } from "@mui/material";
import React from "react";

const Availability = ({ productData }) => {
  return (
    <>
      <div className="top_span_add_edit_invoice">
        <Typography
          sx={
            productData.qty <= 5
              ? { padding: "20px", textAlign: "center", color: "red" }
              : {
                  padding: "20px",
                  textAlign: "center",
                  color: "green",
                } 
          }
        >
          {productData.qty <= 5
            ? `Availability of ${productData.name} is out of Stock : Availability : ${productData.qty}`
            : `Availbility of ${productData.name} is in Stock : Availability : ${productData.qty}`}
        </Typography>
        <img width={400} height={240} src={productData.productImage} alt="" />
      </div>
    </>
  );
};

export default Availability;
