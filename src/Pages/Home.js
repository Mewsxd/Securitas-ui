import React from "react";
import Intro from "../Components/Home Components/Intro";
import Sectors from "../Components/Home Components/Sectors";
import Form from "../Components/Home Components/Form";
import HeroSection from "../Components/Home Components/HeroSection";
import Inauguration from "../Components/Home Components/Inauguration";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Intro />
      <Inauguration />
      <Sectors />
      <Form />
    </div>
  );
};

export default Home;
