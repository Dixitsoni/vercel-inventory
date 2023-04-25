import { Delete, EditOutlined, Print } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import CustomModel from "../../../../components/customModel/CustomModel";
import ActionPopUp from "../../../../components/customPopUp";
import CustomSearch from "../../../../components/customSearch/CustomSearch";
import CustomTable from "../../../../components/customTable/CustomTable";

const Bill = ({
  handlePop,
  setOpenPopUp,
  openPopUp,
  invoiceInfoData,
  setInvoiceInfoData,
  id,
}) => {
  const [invoiceData, setInvoiceData] = useState([
    {
      id: 0,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address1",
      purchaseDate: "2023/04/01",
      unitPrice: 5,
      qty: 40,
      status: "success",
    },
    {
      id: 1,
      invoiceNo: "#1210013",
      compnyName: "xasa pvt. ltd.",
      clientName: "david",
      productName: "Camera",
      address: "address2",
      purchaseDate: "2023/04/01",
      unitPrice: 2,
      qty: 40,
      status: "pending",
    },
    {
      id: 2,
      invoiceNo: "#1210014",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "Ayurdevic oil",
      address: "address3",
      purchaseDate: "2023/04/01",
      unitPrice: 5,
      qty: 100,
      status: "pending",
    },
    {
      id: 3,
      invoiceNo: "#1210015",
      compnyName: "xasa pvt. ltd.",
      clientName: "clark",
      productName: "produict1",
      address: "address4",
      purchaseDate: "2023/04/01",
      unitPrice: 10,
      qty: 40,
      status: "success",
    },
    {
      id: 4,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address5",
      purchaseDate: "2023/04/01",
      unitPrice: 10,
      qty: 40,
      status: "pending",
    },
    {
      id: 5,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address6",
      purchaseDate: "2023/04/01",
      unitPrice: 20,
      qty: 40,
      status: "success",
    },
    {
      id: 6,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address6",
      purchaseDate: "2023/04/01",
      unitPrice: 2,
      qty: 40,
      status: "pending",
    },
    {
      id: 7,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address7",
      purchaseDate: "2023/04/01",
      unitPrice: 5,
      qty: 40,
      status: "pending",
    },
    {
      id: 8,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict1",
      address: "address8",
      purchaseDate: "2023/04/01",
      unitPrice: 65,
      qty: 40,
      status: "success",
    },
    {
      id: 9,
      invoiceNo: "#1210012",
      compnyName: "xasa pvt. ltd.",
      clientName: "John",
      productName: "produict9",
      address: "address9",
      purchaseDate: "2023/04/01",
      unitPrice: 5,
      qty: 30,
      status: "success",
    },
  ]);
  const [value, setValue] = useState("");

  const column = [
    {
      headerName: "Invoice Number",
      field: "invoiceNo",
      width: 200,
      renderCell: (params) => {
        return <Typography>{params.row.invoiceNo}</Typography>;
      },
    },
    {
      headerName: "Customer",
      field: "clientName",
      width: 200,
      renderCell: (params) => {
        return <Typography>{params.row.clientName}</Typography>;
      },
    },
    {
      headerName: "Product Name",
      field: "productName",
      width: 200,
      renderCell: (params) => {
        return <Typography>{params.row.productName}</Typography>;
      },
    },
    {
      headerName: "Amount",
      field: "amount",
      width: 200,
      renderCell: (params) => {
        return <Typography>{params.row.unitPrice * params.row.qty}</Typography>;
      },
    },
    {
      headerName: "Status",
      field: "status",
      width: 200,
      renderCell: (params) => {
        const status = params.row["status"];
        const getStatusBgColor = status === "pending" ? "red" : "green";
        return (
          <Typography
            sx={{
              backgroundColor: getStatusBgColor,
              color: "white",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            {params.row.status}
          </Typography>
        );
      },
    },
    {
      headerName: "Action",
      field: "action",
      width: 200,
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
              onClick={() => handlePop(params.row, "newInvoice", "editInvoice")}
            />
            <Print
              titleAccess="Print Bill"
              className="cursor_pointer margin_left"
              onClick={() => viewProductDetail(params.row, "productDetail")}
            />
          </div>
        );
      },
    },
  ];

  const viewProductDetail = (productData, type) => {
    setOpenPopUp({
      open: true,
      type: type,
      productData: productData,
      columnData: column,
    });
  };

  const searchHandler = (e) => {
    setValue(e.target.value);
  };

  const searchData = () => {
    const getFiltereData = invoiceData.filter(
      (invoice) =>
        invoice.productName?.toLowerCase().match(value.toLowerCase()) ||
        invoice.clientName?.toLowerCase().match(value) ||
        invoice?.status.toLowerCase().match(value) ||
        invoice?.amount === value
    );
    return getFiltereData;
  };

  const deleteHandle = (productdata) => {
    setOpenPopUp({ open: true, type: "delete", productdata: productdata });
  };

  const deleteDataHandler = () => {
    const getFilteredData = invoiceData.filter(
      (invoice) => invoice.id !== openPopUp.productdata.id
    );
    setInvoiceData(getFilteredData);
  };

  const changeHandle = (e) => [
    setInvoiceInfoData({
      ...invoiceInfoData,
      [e.target.name]: e.target.value,
      id: Date.now(),
    }),
  ];

  const addInvoiceData = () => {
    const getInvoiceValue = Object.values(invoiceInfoData);
    if (getInvoiceValue.length === 7) {
      setInvoiceData([...invoiceData, invoiceInfoData]);
      setOpenPopUp({ open: false, type: "" });
    } else {
      setOpenPopUp({ open: true, type: "validationInvoice" });
    }
  };

  const updateInvoiceData = () => {
    const temp = [...invoiceData];
    const getInvoiceIndex = invoiceData.findIndex((invoice) => invoice === id);
    if (getInvoiceIndex > -1) {
      temp[getInvoiceIndex] = invoiceInfoData;
      setInvoiceData(temp);
      setOpenPopUp({ open: false, type: "" });
    }
  };

  return (
    <div className="button_invoice">
      <Typography
        sx={{ textAlign: "center", color: "darkblue", fontWeight: "bold" }}
      >
        Bill Management
      </Typography>
      <div>
        <div className="button_invoice_new">
          <CustomSearch
            type={"search"}
            placeholder={"Search"}
            onChange={searchHandler}
          />
          <CustomButton
            value={"+ New Invoice"}
            variant={"contained"}
            onClick={() => handlePop({}, "newInvoice", "addinvoice")}
          />
        </div>
        <CustomTable data={searchData()} columns={column} />
      </div>
      <CustomModel
        open={openPopUp?.open}
        onCancel={() => setOpenPopUp({ open: false, type: "" })}
      >
        <ActionPopUp
          setOpenPopUp={setOpenPopUp}
          type={openPopUp}
          deleteDataHandler={deleteDataHandler}
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
          changeHandle={changeHandle}
          addInvoiceData={addInvoiceData}
          updateInvoiceData={updateInvoiceData}
        />
      </CustomModel>
    </div>
  );
};

export default Bill;
