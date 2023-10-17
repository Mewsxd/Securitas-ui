import React from "react";
import classes from "./ImageSlider.module.css";
import { Link } from "react-router-dom";
const ImageSlider = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.sliderTextContainer}>
        <p>
          Beti Hai Toh <br /> Kal Hai
          <span style={{ color: "lightblue" }}></span>
          <br />
        </p>
        <button>
          <Link to="/about">Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
