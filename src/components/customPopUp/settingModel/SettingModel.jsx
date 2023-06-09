import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ChangePass from "../../../assets/images/lock.webp";
import profile from "../../../assets/images/images.jpeg";
import LogoutImage from "../../../assets/images/logout-8.png";
import { token } from "../../../utils";

const SettingModel = ({ setSetting }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const settingPathHandler = (path) => {
    navigate(path, { replace: true });
    setSetting(false);
  };

  const logOut = () => {
    console.log('hjsahdsadsadlsakdasdklk')
    cookies.remove("x-auth-token");
    navigate("/login", { replace: true });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 50,
        zIndex: 20,
        backgroundColor: "white",
        right: 20,
        boxShadow: "0px 0px 10px grey",
        borderRadius: "10px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: "20px",
          lineHeight: 2,
          color: "burlywood",
        }}
      >
        <li
          className="li_setting"
          onClick={() => settingPathHandler("/inventory/changePassword")}
        >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src={ChangePass}
            alt="changepass"
          ></Avatar>
          <span style={{ marginLeft: "20px" }}>Change Password</span>
        </li>
        <li
          className="li_setting li_style"
          onClick={() => settingPathHandler("/inventory/profile")}
        >
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src={profile}
            alt="profile"
          ></Avatar>
          <span style={{ marginLeft: "20px" }}>Profile</span>
        </li>
        <li className="li_setting li_style">
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src={LogoutImage}
            alt="logoutImage"
          ></Avatar>
          <span style={{ marginLeft: "20px" }} onClick={logOut}>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default SettingModel;
