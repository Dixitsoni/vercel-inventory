import { Avatar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import profileImage from '../../../../../assets/images/computer-icons-user-profile-avatar-avatar.jpg'

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/2")
      .then((res) => res.json())
      .then((json) => {
        setProfileData({
          firstname: json?.name?.firstname,
          lastname: json?.name?.lastname,
          email: json?.email,
        });
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 200,
        }}
      >
        <div
          style={{
            border: "5px solid pink",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 600,
            borderRadius: "150px",
          }}
        >
          <Avatar src={profileImage} alt="profile" sx={{ width: "150px", height: "150px" }}>
            D
          </Avatar>
          <div style={{ marginRight: "50px", color: "grey" }}>
            <div className="d_flex_profile">
              <h4>Name : </h4>
              <Typography sx={{ marginLeft: "10px" }}>
                {profileData?.firstname} {profileData?.lastname}
              </Typography>
            </div>
            <div className="d_flex_profile">
              <h4>email : </h4>
              <Typography sx={{ marginLeft: "10px" }}>
                {profileData?.email}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
