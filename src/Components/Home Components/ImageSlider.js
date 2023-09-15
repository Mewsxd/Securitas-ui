import React from "react";
import classes from "./ImageSlider.module.css";
const ImageSlider = (props) => {
  return (
    <div className={classes.container}>
      {props.isVisible && (
        <sector className={classes.hamburgerNavbar}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Sector</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </sector>
      )}
      <p>
        Potential. <span style={{ color: "orangered" }}>Positivity.</span>
        <br /> Progress.
      </p>
      <button>
        Learn more <span>&rarr;</span>
      </button>
    </div>
  );
};

export default ImageSlider;
