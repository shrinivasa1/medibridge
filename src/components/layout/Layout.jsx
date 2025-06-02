import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Toolbar } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* Toolbar here adds padding equal to Navbar height */}
      <Toolbar />
      {children}
      <Footer/>
      
    </>
  );
};

export default Layout;
