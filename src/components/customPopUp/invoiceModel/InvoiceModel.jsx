import { Typography } from "@mui/material";
import React from "react";
import CustomInput from "../../customInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";

const InvoiceModel = ({
  setOpenPopUp,
  invoiceInfoData,
  setInvoiceInfoData,
  changeHandle,
  addInvoiceData,
  updateInvoiceData,
}) => {
  return (
    <div className="width_container">
      <div>
        <div>
          <Typography sx={{ textAlign: "center" }}>
            {invoiceInfoData.key === "editInvoice"
              ? "Edit Invoice"
              : "Add New Invoice"}
          </Typography>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              fontSize: "30px",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenPopUp({ open: false, type: "" })}
          >
            &times;
          </span>
        </div>
        <div className="">
          <div className="margin">
            <CustomInput
              name={"invoiceNo"}
              value={invoiceInfoData?.invoiceNo}
              handleChange={changeHandle}
              helperText={
                !invoiceInfoData?.invoiceNo ? "please Enter Invoice Number" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Invoice Number"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"clientName"}
              value={invoiceInfoData?.clientName}
              handleChange={changeHandle}
              helperText={
                !invoiceInfoData?.clientName ? "please Enter Client Name" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Customer"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"productName"}
              value={invoiceInfoData?.productName}
              handleChange={changeHandle}
              helperText={
                !invoiceInfoData?.productName ? "please Enter Product Name" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Product Name"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"qty"}
              type={"number"}
              value={invoiceInfoData?.qty}
              handleChange={changeHandle}
              helperText={!invoiceInfoData?.qty ? "please Enter Quantity" : ""}
              id="my-input1"
              htmlFor="my-input1"
              children={"Quantity"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"unitPrice"}
              type={"number"}
              value={invoiceInfoData?.unitPrice}
              handleChange={changeHandle}
              helperText={
                !invoiceInfoData?.unitPrice ? "please Enter Unit Price" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Unit Price"}
              aria-describedby={"my-helper-text1"}
              required
            />
          </div>
          <div className="d_flex">
            <div>
              <input
                name="status"
                defaultChecked={
                  invoiceInfoData.status
                    ? invoiceInfoData.status === "pending"
                    : ""
                }
                value={"pending"}
                type="radio"
                onChange={changeHandle}
              />
              <label>Payment Pending</label>
              {invoiceInfoData.status ? (
                ""
              ) : (
                <p style={{ color: "red" }}>
                  please Select payment pending or not
                </p>
              )}
            </div>
            <div>
              <input
                name="status"
                defaultChecked={
                  invoiceInfoData.status
                    ? invoiceInfoData.status === "success"
                    : ""
                }
                value={"success"}
                type="radio"
                onChange={changeHandle}
              />
              <label>Payment Success</label>
            </div>
          </div>
          <div className="top_span_add_edit_invoice">
            <CustomButton
              variant={"contained"}
              sx={{ width: "200px", margin: "20px 20px" }}
              value={
                invoiceInfoData.key === "editInvoice"
                  ? "Update Invoice"
                  : "Add Invoice"
              }
              onClick={
                invoiceInfoData.key === "editInvoice"
                  ? () => updateInvoiceData()
                  : () => addInvoiceData()
              }
            />
            <CustomButton
              variant={"outlined"}
              sx={{ width: "200px", margin: "20px 20px" }}
              // className="cancel_button_margin"
              value={"Cancel"}
              onClick={() => setOpenPopUp({ open: false, type: "" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModel;
