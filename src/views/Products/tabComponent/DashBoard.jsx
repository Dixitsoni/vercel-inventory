import { Typography } from "@mui/material";
import { debounce } from "lodash";
import React, { useState, useCallback } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomModel from "../../../components/customModel/CustomModel";
import ActionPopUp from "../../../components/customPopUp";
import CustomSearch from "../../../components/customSearch/CustomSearch";
import CustomTable from "../../../components/customTable/CustomTable";

function DashBoard({
  handlePop,
  openPopUp,
  setOpenPopUp,
  userData,
  setUserData,
  id,
  data,
  setData,
  columns,
}) {
  const [event, setEvent] = useState(``);
  const [logo, setLogo] = React.useState("");

  const searchHandler = (e) => {
    setEvent(e.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(searchHandler, 300), []);

  const SearchData = () => {
    const getSearchData = data?.filter(
      (searchData) =>
        searchData?.name?.toLowerCase().match(event.toLowerCase()) ||
        searchData?.description?.toLowerCase().match(event.toLowerCase())
    );
    return getSearchData;
  };

  const deleteDataHandler = (productData) => {
    const getFilteredData = data?.filter(
      (product) => product.id !== productData
    );
    setData(getFilteredData);
  };

  console.log(userData, "userDAtat");

  const addProduct = () => {
    const productValues = Object.values(userData);
    const getProduct = data.find(
      (product) => product.productCode === userData.productCode
    );
    const temp = { ...userData };
    temp.analytics = [{ date: temp.date, quantity: temp.qty }];
    if (getProduct) {
      setOpenPopUp({ open: true, type: "product_exist" });
    } else {
      if (productValues?.length === 15) {
        setData([...data, temp]);
        setLogo("");
        setOpenPopUp({ open: false, type: "" });
      } else {
        setOpenPopUp({ open: true, type: "validationPop" });
      }
    }
  };

  const changeHandle = (e) => {
    const { name, value } = e.target;
    if (e.target.files) {
      let image = e.target.files[0];
      convertBase64(image)
        .then((res) => setUserData({ ...userData, productImage: res }))
        .catch((err) => console.log(err));
    } else {
      let analyticData = [];
      if (name === "date" && name === "qty") {
        analyticData = [...analyticData, { date: value }];
        setUserData({ ...userData, date: value, analytics: [...analyticData] });
      } else if (name === "qty") {
        analyticData = [...analyticData, { quantity: value }];
        setUserData({ ...userData, qty: value, analytics: [...analyticData] });
      } else {
        setUserData({
          ...userData,
          [name]: value,
          id: Date.now(),
        });
      }
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e.target.error);
    });
  };

  const updateProduct = () => {
    const tempData = [...data];
    const tempIndex = tempData.findIndex((product) => product?.id === id?.id);
    if (tempIndex > -1) {
      tempData[tempIndex] = userData;
      setData(tempData);
      setOpenPopUp({ open: false, type: "" });
    }
  };

  return (
    <>
      <Typography
        type="primary"
        color={"darkblue"}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
        variant="primary"
      >
        Manage Inventory Items
      </Typography>
      <div className="bg_color">
        <div className="dashboard_container">
          <div>
            <CustomSearch
              onChange={debouncedChangeHandler}
              type={"search"}
              placeholder={"Search"}
            />
          </div>
          <div>
            <CustomButton
              value={"+ ADD INVENTORY ITEM"}
              variant={"contained"}
              onClick={() => handlePop({}, "addproduct", "addproduct")}
            />
          </div>
        </div>
        <div>
          <CustomTable data={SearchData()} columns={columns} />
        </div>
        <div>
          <CustomModel
            open={openPopUp?.open}
            onCancel={() => setOpenPopUp(false)}
          >
            <ActionPopUp
              setOpenPopUp={setOpenPopUp}
              type={openPopUp}
              userData={userData}
              addProduct={addProduct}
              logo={logo}
              id={id}
              setLogo={setLogo}
              changeHandle={changeHandle}
              updateProduct={updateProduct}
              deleteDataHandler={deleteDataHandler}
            />
          </CustomModel>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
