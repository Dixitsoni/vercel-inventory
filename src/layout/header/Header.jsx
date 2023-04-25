import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InventoryImage from "../../assets/images/inventory-icon-png-4.jpg";
import SettingModel from "../../components/customPopUp/settingModel/SettingModel";
import profileImage from "../../assets/images/computer-icons-user-profile-avatar-avatar.jpg";
import { isAuthenticated } from "../../utils";

function Header() {
  const [setting, setSetting] = useState(false);
  const [email, setEmail] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/2")
      .then((res) => res.json())
      .then((json) => {
        setEmail(json.email);
      });
  }, []);

  const openSetting = (e) => {
    setSetting(!setting);
  };

  return (
    <div>
      <AppBar>
        <div className="Header_bar_menu"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
            cursor: "pointer",
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Avatar
              sx={{ marginRight: 2 }}
              src={InventoryImage}
              alt="logo"
            ></Avatar>
            <div>
              <h3>INVENTORY MANAGEMENT SYSTEM</h3>
            </div>
          </Toolbar>
          {isAuthenticated() && (
            <div onClick={openSetting} className="d_flex_email">
              <Typography sx={{ marginRight: 1 }}>{email}</Typography>
              <Avatar src={profileImage} alt="profilePicture">
                p
              </Avatar>
            </div>
          )}
        </div>
      </AppBar>
      {setting && <SettingModel setSetting={setSetting} />}
    </div>
  );
}

export default Header;
