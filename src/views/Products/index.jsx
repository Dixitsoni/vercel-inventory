import { Box, Tab, Tabs, Typography, Avatar } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import Bill from "./tabComponent/Bill/Bill";
import DashBoard from "./tabComponent/DashBoard";
import Stats from "./tabComponent/Stats";
import Stock from "./tabComponent/stocksCategory/Stock";
import CameraProduct from "../../assets/images/eos_m50_m55-200_b1.png";
import MobileChargerProduct from "../../assets/images/139721377_WIZ010-WHT_MagSafe_BoostChargePro_2in1WirlessChargeDock_Hero1_WEB.webp";
import AyurvedProduct from "../../assets/images/download.jpeg";
import DigitalWatchProduct from "../../assets/images/png-transparent-apple-watch-smartwatch-wearable-technology-apple-products-electronics-gadget-company.png";
import CosmeticProduct from "../../assets/images/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg";

import { Delete, EditOutlined, RemoveRedEye } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTab() {
  const [value, setValue] = React.useState(0);
  const [openPopUp, setOpenPopUp] = React.useState({ open: false, type: "" });
  const [userData, setUserData] = React.useState({});
  const [invoiceInfoData, setInvoiceInfoData] = useState({});
  const [id, setId] = useState();

  const [data, setData] = useState([
    {
      id: 0,
      transactionId: "#0011",
      employerId: "#100121",
      employerName: "John",
      productBarCode: "#0012001231",
      productCode: "00121#",
      standardCost: 400,
      analytics: [
        { date: "2023/04/01", quantity: 20 },
        { date: "2023/04/02", quantity: 21 },
        { date: "2023/04/03", quantity: 4 },
        { date: "2023/04/04", quantity: 40 },
        { date: "2023/04/05", quantity: 100 },
      ],
      compnyName: "abc",
      unitPrice: 40,
      unit: "bag",
      productImage: CameraProduct,
      name: "Canon Camera",
      purchaseDate: "2023/04/01",
      qty: 5,
      description: "This is Canon Camera Product 40MP",
    },
    {
      id: 1,
      transactionId: "#0012",
      employerId: "#100122",
      employerName: "david",
      productBarCode: "#0012001232",
      productCode: "00122#",
      standardCost: 500,
      compnyName: "xyz pvt. ltd.",
      analytics: [
        { date: "2023/04/02", quantity: 10 },
        { date: "2023/04/07", quantity: 20 },
        { date: "2023/04/09", quantity: 5 },
        { date: "2023/04/10", quantity: 70 },
        { date: "2023/04/12", quantity: 30 },
      ],
      unitPrice: 60,
      unit: "bag",
      productImage: MobileChargerProduct,
      name: "Mobile charger wireless",
      purchaseDate: "2023/04/02",
      qty: 10,
      description: "This is wireless mobile charger",
    },
    {
      id: 2,
      transactionId: "#0013",
      employerId: "#100123",
      employerName: "watson",
      productBarCode: "#0012001233",
      productCode: "00124#",
      standardCost: 700,
      compnyName: "qwe pvt. ltd",
      unitPrice: 20,
      analytics: [
        { date: "2023/03/01", quantity: 4 },
        { date: "2023/03/09", quantity: 20 },
        { date: "2023/03/15", quantity: 10 },
        { date: "2023/03/16", quantity: 60 },
        { date: "2023/03/19", quantity: 200 },
      ],
      unit: "bag",
      productImage: AyurvedProduct,
      name: "Ayurved Oil",
      purchaseDate: "2023/04/02",
      qty: 30,
      description: "This is Ayurved Product",
    },
    {
      id: 3,
      transactionId: "#0014",
      employerId: "#100125",
      employerName: "clark",
      productBarCode: "#0012001235",
      productCode: "00125#",
      standardCost: 900,
      analytics: [
        { date: "2023/04/10", quantity: 10 },
        { date: "2023/04/15", quantity: 50 },
        { date: "2023/04/17", quantity: 70 },
        { date: "2023/04/18", quantity: 196 },
        { date: "2023/04/19", quantity: 7 },
      ],
      compnyName: "asr ppvt. ltd",
      unitPrice: 50,
      unit: "bag",
      productImage: DigitalWatchProduct,
      name: "Digital Watch",
      purchaseDate: "2023/04/03",
      qty: 9,
      description: "This is Digital Watch having all feature",
    },
    {
      id: 4,
      transactionId: "#0017",
      employerId: "#100128",
      employerName: "doe",
      productBarCode: "#0012001237",
      productCode: "00129#",
      standardCost: 300,
      analytics: [
        { date: "2023/01/10", quantity: 200 },
        { date: "2023/01/20", quantity: 40 },
        { date: "2023/02/03", quantity: 20 },
        { date: "2023/03/04", quantity: 1 },
        { date: "2023/04/05", quantity: 100 },
      ],
      compnyName: "wer pvt. ltd",
      unitPrice: 90,
      unit: "bag",
      productImage: CosmeticProduct,
      name: "Cosmetic Product",
      purchaseDate: "2023/04/04",
      qty: 30,
      description: "This is Cosmetic Product ",
    },
    {
      id: 5,
      transactionId: "#0017",
      employerId: "#100128",
      employerName: "doe",
      productBarCode: "#0012001237",
      productCode: "00129#",
      standardCost: 300,
      analytics: [
        { date: "2023/01/10", quantity: 200 },
        { date: "2023/01/20", quantity: 40 },
        { date: "2023/02/03", quantity: 20 },
        { date: "2023/03/04", quantity: 1 },
        { date: "2023/04/05", quantity: 100 },
      ],
      compnyName: "wer pvt. ltd",
      unitPrice: 90,
      unit: "bag",
      productImage: CosmeticProduct,
      name: "Cosmetic Product",
      purchaseDate: "2023/04/04",
      qty: 30,
      description: "This is Cosmetic Product ",
    },
  ]);

  const columns = [
    {
      headerName: "Product Image",
      field: "productImage",
      width: 150,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return (
          <Avatar src={params.row.productImage} alt="product image"></Avatar>
        );
      },
    },
    {
      headerName: "Product Name",
      field: "name",
      textAlign: "center",
      width: 250,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return <Typography>{params.row.name}</Typography>;
      },
    },
    {
      headerName: "Description",
      field: "description",
      textAlign: "center",
      width: 300,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return <Typography>{params.row.description}</Typography>;
      },
    },
    {
      headerName: "Quantity",
      field: "qty",
      textAlign: "center",
      width: 100,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return <Typography>{params.row.qty}</Typography>;
      },
    },
    {
      headerName: "Price Per Quantity",
      field: "unitPrice",
      textAlign: "center",
      width: 150,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return <Typography>{params.row.unitPrice}</Typography>;
      },
    },
    {
      headerName: "Amount",
      field: "amount",
      textAlign: "center",
      width: 150,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return <Typography>{params.row.unitPrice * params.row.qty}</Typography>;
      },
    },
    {
      headerName: "Action",
      field: "action",
      width: 300,
      sortable: false,
      menu: false,
      renderHeader: (params) => {
        return <Typography>{params.colDef.headerName}</Typography>;
      },
      renderCell: (params) => {
        return (
          <div>
            <Delete
              titleAccess="Delete"
              className="cursor_pointer"
              onClick={() => deleteHandle(params.row, "delete")}
              sx={{ color: "red" }}
            />
            <EditOutlined
              titleAccess="edit"
              className="cursor_pointer margin_left"
              onClick={() => handlePop(params.row, "addproduct", "editproduct")}
            />
            <RemoveRedEye
              titleAccess="Print Bill"
              className="cursor_pointer margin_left"
              onClick={() =>
                viewProductDetail(params.row, "showproduct", "showproduct")
              }
            />
          </div>
        );
      },
    },
  ];

  const handlePop = (data, type, key) => {
    setId(data);
    switch (key) {
      case "addproduct":
        setUserData({});
        break;
      case "editproduct":
        setUserData({ ...userData, ...data, key: key });
        break;
      case "addinvoice":
        setInvoiceInfoData({});
        break;
      case "editInvoice":
        setInvoiceInfoData({ ...invoiceInfoData, ...data, key: key });
        break;
      default:
        setOpenPopUp({ open: true, type: type });
        break;
    }
    setOpenPopUp({ open: true, type: type });
  };

  const viewProductDetail = (productData, type) => {
    setOpenPopUp({ open: true, type: type, productData: productData });
  };

  const deleteHandle = (rowData, type) => {
    setOpenPopUp({ open: true, type: type, productData: rowData });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products or Items" {...a11yProps(0)} />
          <Tab label="Stocks" {...a11yProps(1)} />
          <Tab label="Statistics" {...a11yProps(2)} />
          <Tab label="Bill" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DashBoard
          handlePop={handlePop}
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
          data={data}
          id={id}
          setData={setData}
          columns={columns}
          userData={userData}
          setUserData={setUserData}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stock data={data} columns={columns} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stats
          data={data}
          columns={columns}
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Bill
          handlePop={handlePop}
          openPopUp={openPopUp}
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
          setOpenPopUp={setOpenPopUp}
          id={id}
        />
      </TabPanel>
    </div>
  );
}

export default CustomTab;
