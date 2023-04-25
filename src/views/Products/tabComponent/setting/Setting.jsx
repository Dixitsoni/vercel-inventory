import { Typography } from "@mui/material";
import React, { useState } from "react";
import ChangePassword from "./changePassword/ChangePassword";
import Profile from "./profile/Profile";

const AvailabilityComponent = [
  { id: 0, component: ChangePassword, category: "Change password" },
  { id: 1, component: Profile, category: "Profile" },
  // { id: 2, component: PantAvailaibility, category: "Pant" },
  // { id: 3, component: JeanAvailability, category: "Jean" },
];

function Setting() {
  const [active, setActive] = useState(0);

  const tabHandler = (id) => {
    setActive(id);
  };

  return (
    <div className="bg_color">
      <Typography
        type="primary"
        color={"darkblue"}
        sx={{ display: "flex", justifyContent: "center" }}
        variant="primary"
      >
        SETTING
      </Typography>
      <div className="top_span_setting">
        <div>
          <div className="d_flex_setting">
            {AvailabilityComponent.map(({ id, category }) => {
              return (
                <Typography
                  sx={
                    id === active
                      ? {
                          cursor: "pointer",
                          backgroundColor: "blue",
                          borderRadius: "5px",
                          padding: "10px",
                          textAlign: "center",
                          color: "white",
                        }
                      : {
                          cursor: "pointer",
                          textAlign: "center",
                        }
                  }
                  onClick={() => tabHandler(id)}
                >
                  {/* {category} &gt; */}
                </Typography>
              );
            })}
          </div>
          <div className="d_flex top_span">
            {AvailabilityComponent.map(({ id, component: Component }) => {
              return (
                active === id && (
                  <div>
                    <Component />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
