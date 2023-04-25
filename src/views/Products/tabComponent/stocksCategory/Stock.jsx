import { Typography } from "@mui/material";
import React, { useState } from "react";
import Availability from "./availability/Availability";

function Stock({ data, columns }) {
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
        Stock Management
      </Typography>
      <div className="">
        <div>
          <Typography
            sx={{ color: "cadetblue", fontSize: 20, marginBottom: 10 }}
          >
            Category Wise &gt;
          </Typography>
          <div className="d_flex">
            <div>
              {data.map((productData) => {
                return (
                  <Typography
                    sx={
                      productData.id === active
                        ? {
                            lineHeight: 3,
                            marginLeft: 10,
                            cursor: "pointer",
                            backgroundColor: "blue",
                            borderRadius: "5px",
                            // width: 100,
                            textAlign: "center",
                            color: "white",
                          }
                        : {
                            lineHeight: 3,
                            marginLeft: 10,
                            cursor: "pointer",
                            // width: 100,
                            textAlign: "center",
                          }
                    }
                    onClick={() => tabHandler(productData.id)}
                  >
                    {productData.name} &gt;
                  </Typography>
                );
              })}
            </div>
            {data.map((productData) => {
              return (
                active === productData.id && (
                  <>
                    <Availability productData={productData} />
                  </>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stock;
