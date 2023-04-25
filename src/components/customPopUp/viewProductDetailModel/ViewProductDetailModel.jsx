import { Avatar, Typography } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";
import CustomTable from "../../customTable/CustomTable";
import { formatDate } from "../../../utils/validation";

const ViewProductDetail = ({ setOpenPopUp, productData }) => {

  const column = [
    {
      headerName: "Items Description",
      field: "productName",
      width: 150,
      renderCell: () => {
        return <Typography>{productData.productName}</Typography>;
      },
    },
    {
      headerName: "QTY",
      field: "qty",
      width: 90,
      renderCell: () => {
        return <Typography>{productData.qty}</Typography>;
      },
    },
    {
      headerName: "Price Per Quantity",
      field: "unitPrice",
      width: 150,
      renderCell: () => {
        return <Typography>{productData.unitPrice}</Typography>;
      },
    },
    {
      headerName: "Amount",
      width: 100,
      renderCell: () => {
        return (
          <Typography>{productData.unitPrice * productData.qty}</Typography>
        );
      },
    },
  ];

  const printBill = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        bottom: 0,
        top: 0,
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          width: "500px",
          margin: "0 auto",
          padding: "10px 0px 0px 5px",
          backgroundColor: "orange",
          fontSize: "25px",
          color: "blue",
        }}
      >
        Invoice <hr />
      </Typography>
      <span
        style={{
          position: "absolute",
          top: 0,
          right: 10,
          cursor: "pointer",
          fontSize: "30px",
        }}
        onClick={() => setOpenPopUp({ open: false, type: "" })}
      >
        &times;
      </span>
      <div style={{ width: "500px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "grey" }}>
            <div>
              <Typography>Bill To :</Typography>
            </div>
            <div>
              <Typography>
                {productData.address}
              </Typography>
            </div>
          </div>
          <div style={{ color: "grey" }}>
            <div>
              <Typography>Date :</Typography>
            </div>
            <div>
              <Typography>
                {productData.purchaseDate}
              </Typography>
            </div>
          </div>
          <div style={{ color: "grey" }}>
            <div>
              <Typography>Bill From :</Typography>
            </div>
            <div>
              <Typography>
                <Typography>abc company</Typography>
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <CustomTable data={[productData]} columns={column} pagination />
        </div>
      </div>
      <div style={{ position: "absolute", right: 20, bottom: 20 }}>
        <CustomButton
          value={"Print Bill"}
          variant={"contained"}
          onClick={printBill}
        />
      </div>
    </div>
  );
};

export default ViewProductDetail;
