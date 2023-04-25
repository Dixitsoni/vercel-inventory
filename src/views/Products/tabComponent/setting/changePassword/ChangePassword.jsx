import { Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomButton from "../../../../../components/CustomButton/CustomButton";
import CustomInput from "../../../../../components/customInput/CustomInput";

const ChangePassword = () => {
  const [password, setPassword] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" });
  const [errorMessage, setErrorMessage] = useState({});

  const { oldPassword, newPassword, confirmPassword } = password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const changePasswordHandler = () => {
    let error = {};
    if (oldPassword === "") {
      error.oldPassword = "please fill Old password";
    }
    if (newPassword === "") {
      error.newPassword = "please fill New password";
    } else if (confirmPassword !== newPassword) {
      error.confirmPassword = "New password and old password does not match"
    } else {
      console.log(password, "password");
    }
    setErrorMessage(error)
  };

  const resetHandler = () => {
    setPassword({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <Card sx={{ padding: 2, width: 400, margin: "100px auto" }}>
      {/* <div> */}
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
        Change Password
      </h2>
      {/* </div> */}
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <div>
          <CustomInput
            // value={userData?.email}
            name={"oldPassword"}
            helperText={oldPassword ? "" : errorMessage.oldPassword}
            id="my-input1"
            value={oldPassword}
            htmlFor="my-input1"
            children={"OldPassword"}
            aria-describedby={"my-helper-text1"}
            handleChange={handleChange}
          />
        </div>
        <div>
          <CustomInput
            // value={userData?.email}
            name={"newPassword"}
            value={newPassword}
            helperText={newPassword ? "" : errorMessage.newPassword}
            id="my-input1"
            htmlFor="my-input1"
            children={"NewPassword"}
            aria-describedby={"my-helper-text1"}
            handleChange={handleChange}
          />
        </div>
        <div>
          <CustomInput
            // value={userData?.email}
            name={"confirmPassword"}
            helperText={confirmPassword === newPassword ? "" : errorMessage.confirmPassword}
            value={confirmPassword}
            id="my-input1"
            htmlFor="my-input1"
            children={"Confirm Password"}
            aria-describedby={"my-helper-text1"}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div style={{ marginTop: 10, textAlign: "center" }}>
        <CustomButton
          value={"Save"}
          style={{ width: "40%" }}
          onClick={changePasswordHandler}
          // color={"primary"}
          variant={"contained"}
          sx={{ marginLeft: 2 }}
        />
        <CustomButton
          value={"Reset"}
          style={{ width: "40%" }}
          onClick={resetHandler}
          variant={"outlined"}
          sx={{ marginLeft: 2 }}
        />
      </div>
    </Card>
  );
};

export default ChangePassword;
