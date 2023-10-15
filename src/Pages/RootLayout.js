import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home Components/Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "../Components/Home Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
