import React from "react";
import Navbar from "../Components/Home Components/Navbar";
import Footer from "../Components/Home Components/Footer";
import OurStory from "../Components/About us/OurStory";
import Form from "../Components/Home Components/Form";
import ScrollToTop from "./ScrollToTop";
import { ValuesContainer } from "../Components/About us/ValuesContainer";

const About = () => {
  return (
    <div>
      <OurStory />
      <ValuesContainer />
      <Form />
    </div>
  );
};

export default About;
