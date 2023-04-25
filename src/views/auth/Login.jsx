import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { setToken } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import passwordIcon from "../../assets/images/lock.webp";
import profile from "../../assets/images/computer-icons-user-profile-avatar-avatar.jpg";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [userExist, setUserExist] = useState("");
  const navigate = useNavigate();

  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const loginHandleClick = () => {
    let error = {};
    if (email === "") {
      error.email = "please fill correct email";
    }
    if (password === "") {
      error.password = "please fill correct password";
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        redirect: "follow",
      };
      fetch("https://fakestoreapi.com/auth/login", requestOptions)
        .then((res) => res.json())
        .then((json) => {
          setToken(json.token);
          navigate("/inventory/dashboard", { replace: true });
        }).catch(() => {
          setUserExist("User not found")
        });
    }
    setErrorMessage(error);
  };

  return (
    <>
     {userExist && <Typography
        sx={{
          backgroundColor: "red",
          position: "absolute",
          left: "37%",
          top: "10%",
          right: "37%",
          textAlign:'center',
          padding:'5px',
          color:'white',
          marginBottom:'10px'
        }}
      >
        {userExist}
      </Typography>}
      <Card sx={{ maxWidth: 345, display: "flex", justifyContent: "center" }}>
        <div>
          <CardHeader
            title="Login To Inventory System"
            subheader={<p>login to access inventory system</p>}
          />
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{ width: 30, height: 30 }}
                src={profile}
                alt="profile"
              ></Avatar>

              <CustomInput
                value={email}
                helperText={email ? "" : errorMessage.email}
                id="my-input1"
                name="email"
                htmlFor="my-input1"
                style={{ paddingLeft: 10 }}
                children={"email"}
                aria-describedby={"my-helper-text1"}
                handleChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{ width: 30, height: 30 }}
                src={passwordIcon}
                alt="profile"
              ></Avatar>
              <CustomInput
                value={password}
                helperText={password ? "" : errorMessage.password}
                id="my-input2"
                htmlFor="my-input2"
                name="password"
                children={"Password"}
                aria-describedby={"my-helper-text2"}
                handleChange={handleChange}
                style={{ paddingLeft: 10 }}
              />
            </div>
          </CardContent>
          <CardContent>
            <CustomButton
              style={{ width: "100%" }}
              variant={"contained"}
              value={"submit"}
              onClick={loginHandleClick}
            />
          </CardContent>
        </div>
      </Card>
    </>
  );
}

export default Login;
