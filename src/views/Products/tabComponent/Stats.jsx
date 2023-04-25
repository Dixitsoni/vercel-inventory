import { Card, Typography } from "@mui/material";
import React from "react";
import CustomModel from "../../../components/customModel/CustomModel";
import ActionPopUp from "../../../components/customPopUp";

function Stats({ data, setOpenPopUp, openPopUp }) {
  const openGraphAnalytics = (analyticData, productName) => {
    setOpenPopUp({
      open: true,
      type: "analyticsData",
      analyticData: analyticData,
      productName: productName,
    });
  };

  return (
    <div className="bg_color">
      <Typography
        type="primary"
        color={"darkblue"}
        sx={{ display: "flex", justifyContent: "center" }}
        variant="primary"
      >
        Statistics of Tracking Inventory
      </Typography>
      <div className="stats_container">
        {data.map((product) => {
          return (
            <Card
              onClick={() =>
                openGraphAnalytics(product.analytics, product.name)
              }
              xs={2}
              md={4}
              sx={{
                cursor: "pointer",
                backgroundColor: "white",
                width: "20%",
                mt: 5,
                p: 4,
                textAlign:'center'
              }}
            >
              <img
                width={200}
                height={100}
                src={product.productImage}
                alt="productImage"
              />
              <Typography>{product.name}</Typography>
              <Typography sx={{ color: "darkblue", mt: 2 }}>
                To see analytics of {product.name} click on this card
              </Typography>
            </Card>
          );
        })}
      </div>
      <CustomModel
        open={openPopUp.open}
        onCancel={() => setOpenPopUp({ open: false, type: "" })}
      >
        <ActionPopUp type={openPopUp} setOpenPopUp={setOpenPopUp} />
      </CustomModel>
    </div>
  );
}

export default Stats;
