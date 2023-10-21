import React from "react";
import ImageSlider from "../Components/Home Components/ImageSlider";
import Intro from "../Components/Home Components/Intro";
import Sectors from "../Components/Home Components/Sectors";
import Form from "../Components/Home Components/Form";
const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Intro />
      <Sectors />
      <Form />
    </div>
  );
};

export default Home;
