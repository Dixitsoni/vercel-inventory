import React from "react";
import AddEditPopUp from "./addEditModel/AddEditModel";
import DeleteModel from "./deleteModel/DeleteModel";
import InvoiceModel from "./invoiceModel/InvoiceModel";
import Caresoul from "./viewProductDetailModel/Caresoul";
import ViewProductDetail from "./viewProductDetailModel/ViewProductDetailModel";
import GraphModel from "./graphModel/GraphModel";
import ValidationPop from "./addEditModel/ValidationPop";
import ValidationInvoicePop from "./invoiceModel/ValidationInvoicePop";
import ProductExist from "./addEditModel/ProductExist";

const ActionPopUp = ({
  type,
  setOpenPopUp,
  userData,
  addProduct,
  logo,
  setLogo,
  changeHandle,
  updateProduct,
  deleteDataHandler,
  invoiceInfoData,
  setInvoiceInfoData,
  addInvoiceData,
  updateInvoiceData,
  id,
}) => {
  switch (type?.type) {
    case "addproduct":
      return (
        <AddEditPopUp
          setLogo={setLogo}
          changeHandle={changeHandle}
          updateProduct={updateProduct}
          setOpenPopUp={setOpenPopUp}
          userData={userData}
          addProduct={addProduct}
          logo={logo}
          type={type}
        />
      );
    case "delete":
      return (
        <DeleteModel
          setOpenPopUp={setOpenPopUp}
          deleteDataHandler={deleteDataHandler}
          openPopUp={type.productData}
        />
      );
    case "productDetail":
      return (
        <ViewProductDetail
          setOpenPopUp={setOpenPopUp}
          productData={type?.productData}
          openPopUp={type}
          // productArray={id}
        />
      );

    case "newInvoice":
      return (
        <InvoiceModel
          setOpenPopUp={setOpenPopUp}
          invoiceInfoData={invoiceInfoData}
          setInvoiceInfoData={setInvoiceInfoData}
          changeHandle={changeHandle}
          addInvoiceData={addInvoiceData}
          updateInvoiceData={updateInvoiceData}
        />
      );

    case "showproduct":
      return (
        <Caresoul
          productArray={type?.productData}
          setOpenPopUp={setOpenPopUp}
        />
      );

    case "analyticsData":
      return (
        <GraphModel
          analyticData={type?.analyticData}
          productName={type?.productName}
          setOpenPopUp={setOpenPopUp}
        />
      );

    case "validationPop":
      return <ValidationPop setOpenPopUp={setOpenPopUp} type={type} />;

    case "validationInvoice":
      return <ValidationInvoicePop setOpenPopUp={setOpenPopUp} />;

    case "product_exist":
      return <ProductExist setOpenPopUp={setOpenPopUp}/>;

    default:
      return false;
  }
};

export default ActionPopUp;
