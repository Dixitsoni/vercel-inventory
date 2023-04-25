import React from "react";
import { isAuthenticated } from "../utils";
import Header from "./header/Header";

function DefaultLayout({ children }) {
  return (
    <>
      {isAuthenticated() && <Header />}
      {children}
      {/* {isAuthenticated() && <Footer />} */}
    </>
  );
}

export default DefaultLayout;
