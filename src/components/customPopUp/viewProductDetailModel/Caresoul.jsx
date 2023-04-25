import { Card, Typography } from "@mui/material";
import React from "react";

const Caresoul = ({ productArray, setOpenPopUp }) => {
  return (
    <>
      <span onClick={() => setOpenPopUp({ open: false, type: "" })} style={{ color: 'white', cursor: 'pointer', fontSize: '50px', fontWeight: 'bold', position: 'absolute', right: '20px', top: 0 }}>&times;</span>
      <div style={{ display: "flex", alignItems: "center", marginTop: '150px' }}>
        <>
          <Card
            style={{
              width: "800px",
              backgroundColor: "white",
              marginTop: "70px",
            }}
          >
            <div style={{ backgroundColor: "orange" }}>
              <Typography
                sx={{ textAlign: "center", padding: "10px 0px" }}
              >
                Product Details
              </Typography>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: '20px'
                }}
              >
                <img
                  width={400}
                  height={370}
                  src={productArray.productImage}
                  alt="productImage"
                />
                <div style={{ height: 370 }}>
                  <table border={'1px solid grey'} width={'100%'}>
                    <tr>
                      <td className="title">Product Name</td>
                      <td className="item_description">{productArray.name} </td>
                    </tr>
                    <tr>
                      <td className="title">Product Description</td>
                      <td className="item_description">{productArray.description}</td>
                    </tr>
                    <tr>
                      <td className="title">Employer Id</td>
                      <td className="item_description">{productArray.employerId}</td>
                    </tr>
                    <tr>
                      <td className="title">Employer Name</td>
                      <td className="item_description">{productArray.employerName}</td>
                    </tr>
                    <tr>
                      <td className="title">Product BarCode</td>
                      <td className="item_description">{productArray.productBarCode} </td>
                    </tr>
                    <tr>
                      <td className="title">Product Code</td>
                      <td className="item_description">{productArray.productCode}</td>
                    </tr>
                    <tr>
                      <td className="title">Date Of Purchase</td>
                      <td className="item_description">{productArray.purchaseDate}</td>
                    </tr>
                    <tr>
                      <td className="title">Quantity</td>
                      <td className="item_description">{productArray.qty}</td>
                    </tr>
                    <tr>
                      <td className="title">Standard Cost</td>
                      <td className="item_description">{productArray.standardCost}</td>
                    </tr>
                    <tr>
                      <td className="title">Transaction Id</td>
                      <td className="item_description">{productArray.transactionId}</td>
                    </tr>
                    <tr>
                      <td className="title">Unit</td>
                      <td className="item_description">{productArray.unit}</td>
                    </tr>
                    <tr>
                      <td className="title">Unit Price</td>
                      <td className="item_description">{productArray.unitPrice}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        </>
      </div>
    </>
  );
};

export default Caresoul;
