import React, { useState } from "react";
import classes from "./Home.module.css";
import Navbar from "../Components/Home Components/Navbar";
import ImageSlider from "../Components/Home Components/ImageSlider";
import Intro from "../Components/Home Components/Intro";
import Stats from "../Components/Home Components/Stats";
import Sectors from "../Components/Home Components/Sectors";
import Services from "../Components/Home Components/Services";
import Clients from "../Components/Home Components/Clients";
import Form from "../Components/Home Components/Form";
import Footer from "../Components/Home Components/Footer";
import ScrollToTop from "./ScrollToTop";
const Home = () => {
  const [open, setOpen] = useState(false);
  console.log("FROM APP.JS ", open);
  return (
    <div>
      {/* <ScrollToTop /> */}
      {/* <Navbar onStatus={(data) => setOpen(data)} /> */}
      <ImageSlider isVisible={open} />
      <Intro />
      <Sectors />
      <Form />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
