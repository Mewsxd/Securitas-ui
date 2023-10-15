import React from "react";
import Navbar from "../Components/Home Components/Navbar";
import Footer from "../Components/Home Components/Footer";
import OurStory from "../Components/About us/OurStory";
import Form from "../Components/Home Components/Form";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  return (
    <div>
      {/* <ScrollToTop />
      <Navbar /> */}
      <OurStory />
      <Form />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
