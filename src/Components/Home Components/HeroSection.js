import React from "react";
import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import img from "../../Assets/hero section image.jpg";
const HeroSection = (props) => {
  return (
    <div className={classes.container}>
      <img src={img} alt="hero" />
      <div className={classes.sliderTextContainer}>
        <p>
          Beti Hai Toh <br /> Kal Hai
        </p>
        <button>
          <Link to="/about">Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
