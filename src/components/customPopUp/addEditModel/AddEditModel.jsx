import { Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import CustomInput from "../../customInput/CustomInput";
import productImage from "../../../assets/images/inventory-icon-png-4.jpg";

function AddEditPopUp({
  setOpenPopUp,
  userData,
  addProduct,
  logo,
  changeHandle,
  updateProduct,
  setLogo,
}) {

  console.log(userData,'userData')
  return (
    <div className="width_container">
      <div>
        <div>
          <span
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              fontSize: "30px",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenPopUp(false)}
          >
            &times;
          </span>
        </div>
        <div className="">
          <div className="text_align">
            <Typography sx={{ color: "darkblue" }}>click on image</Typography>
            <img
              width={150}
              height={120}
              src={
                userData?.productImage ? userData?.productImage : productImage
              }
              alt="productImage"
            />
            <input name="productImage" type={"file"} onChange={changeHandle} />
          </div>
          <div className="margin">
            <CustomInput
              name={"transactionId"}
              value={userData?.transactionId}
              handleChange={changeHandle}
              helperText={
                !userData?.transactionId ? "please Enter transactionId" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Transaction ID"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"employerId"}
              value={userData?.employerId}
              handleChange={changeHandle}
              helperText={
                !userData?.employerId ? "please Enter EmployerId" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Employer ID"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"employerName"}
              value={userData?.employerName}
              handleChange={changeHandle}
              helperText={
                !userData?.employerName ? "please Enter Employer Name" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Employer Name"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"productBarCode"}
              value={userData?.productBarCode}
              handleChange={changeHandle}
              helperText={
                !userData?.productBarCode ? "please Enter product Barcode" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Product Barcode"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"name"}
              value={userData?.name}
              handleChange={changeHandle}
              helperText={!userData?.name ? "please Enter product name" : ""}
              id="my-input1"
              htmlFor="my-input1"
              children={"Product Name"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"productCode"}
              value={userData?.productCode}
              handleChange={changeHandle}
              helperText={
                !userData?.productCode ? "please Enter product code" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Product code"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"description"}
              value={userData?.description}
              handleChange={changeHandle}
              helperText={
                !userData?.description ? "please Enter Description" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Description"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"standardCost"}
              type={"number"}
              value={userData?.standardCost}
              handleChange={changeHandle}
              helperText={
                !userData?.standardCost ? "please Enter Standard Cost" : ""
              }
              id="my-input1"
              htmlFor="my-input1"
              children={"Standard cost"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"qty"}
              type={"number"}
              value={userData?.qty}
              handleChange={changeHandle}
              helperText={!userData?.qty ? "please Enter Quantity" : ""}
              id="my-input1"
              htmlFor="my-input1"
              children={"Quantity"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"unitPrice"}
              type={"number"}
              value={userData?.unitPrice}
              handleChange={changeHandle}
              helperText={!userData?.unitPrice ? "please Enter Unit price" : ""}
              id="my-input1"
              htmlFor="my-input1"
              children={"Unit Price"}
              aria-describedby={"my-helper-text1"}
              required
            />
            <CustomInput
              name={"unit"}
              value={userData?.unit}
              handleChange={changeHandle}
              helperText={!userData?.unit ? "please Enter Unit" : ""}
              id="my-input1"
              htmlFor="my-input1"
              children={"Unit"}
              aria-describedby={"my-helper-text1"}
              required
            />
             <CustomInput
              name={"date"}
              type={'date'}
              value={userData?.date}
              handleChange={changeHandle}
              helperText={!userData?.date ? "please Enter date" : ""}
              id="my-input1"
              htmlFor="my-input1"
              aria-describedby={"my-helper-text1"}
              required
            />
          </div>
          <div className="top_span">
            <CustomButton
              variant={"contained"}
              sx={{ marginRight: "40px" }}
              // className={'addupdate_button_margin'}
              value={
                userData.key === "editproduct"
                  ? "Update Invetory"
                  : "Add Inventory"
              }
              onClick={
                userData.key === "editproduct"
                  ? () => updateProduct()
                  : () => addProduct()
              }
            />
            <CustomButton
              variant={"outlined"}
              sx={{ marginleft: "20px" }}
              // className="cancel_button_margin"
              value={"Cancel"}
              onClick={() => {
                setOpenPopUp({ open: false, type: "" });
                setLogo("");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditPopUp;
