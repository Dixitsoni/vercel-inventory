import { Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomModel from "../../../components/customModel/CustomModel";
import AddEditPopUp from "../../../components/customPopUp/addEditModel/AddEditModel";
import CustomSearch from "../../../components/customSearch/CustomSearch";
import CustomTable from "../../../components/customTable/CustomTable";

function Accounts() {
  return (
    <div className="bg_color">
      <Typography
        type="primary"
        color={"darkblue"}
        sx={{ display: "flex", justifyContent: "center" }}
        variant="primary"
      >
        Account Management
      </Typography>
      <div className="dashboard_container">
        <div>
          <CustomSearch
            // onChange={searchHandler}
            type={"search"}
            placeholder={"Search"}
          />
        </div>
        <div>
          <CustomButton
            value={"ADD PRODUCT"}
            // onClick={() => handlePop({}, "addproduct")}
          />
        </div>
      </div>
      <div>
        <CustomTable
          data={[]}
          columns={[]}
          // getRowId={(row) => row.id}
        />
      </div>
      <div>
        <CustomModel
        //  open={openPopUp} onCancel={() => setOpenPopUp(false)}
        >
          <AddEditPopUp
          // setOpenPopUp={setOpenPopUp}
          // userData={userData}
          // addProduct={addProduct}
          // fileHandler={fileHandler}
          // logo={logo}
          // setLogo={setLogo}
          />
        </CustomModel>
      </div>
    </div>
  );
}

export default Accounts;
