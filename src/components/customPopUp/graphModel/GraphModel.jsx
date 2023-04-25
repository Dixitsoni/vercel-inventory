import { Card, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const GraphModel = ({ analyticData, setOpenPopUp, productName }) => {
  const analyticsProductDate = analyticData.map((product) => product.date);
  const analyticsProductquantity = analyticData.map(
    (product) => product.quantity
  );

  const state = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: analyticsProductDate,
      },
      colors: [
        function ({ value, seriesIndex, w }) {
          if (value <= 5) {
            return "#FF0000";
          } else {
            return "#013220";
          }
        },
      ],
    },
    series: [
      {
        name: "Avaibility",
        data: analyticsProductquantity,
      },
    ],
  };

  return (
    <>
      <span
        onClick={() => setOpenPopUp({ open: false, type: "" })}
        style={{
          color: "white",
          cursor: "pointer",
          fontSize: "50px",
          fontWeight: "bold",
          position: "absolute",
          right: "20px",
          top: 0,
        }}
      >
        &times;
      </span>
      <Card sx={{ width: "49%", mt: 10, height: "450px" }}>
        <Typography
          sx={{
            textAlign: "center",
            backgroundColor: "navajowhite",
            padding: 1,
            color: "peru",
          }}
        >
          {productName} Availability per day
        </Typography>
        <Chart type="bar" series={state.series} options={state.options} />
      </Card>
    </>
  );
};

export default GraphModel;
