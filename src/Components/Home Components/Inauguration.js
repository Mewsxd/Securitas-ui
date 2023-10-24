import React, { useState } from "react";
import classes from "./Inauguration.module.css";

//importing all images in the slider from assets
import img1 from "../../Assets/Inauguration/first pic.jpeg";
import img2 from "../../Assets/Inauguration/second pic.jpeg";
import img3 from "../../Assets/Inauguration/third pic.jpeg";
import img4 from "../../Assets/Inauguration/fourth pic.jpeg";
import img5 from "../../Assets/Inauguration/fifth pic.jpeg";

// storing images in an array
const sliderImages = [img1, img2, img3, img4, img5];
const Inauguration = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // stores the index of the images in the array
  //Handles onclick event for left button
  function leftButtonHandler() {
    // curIndex decreases index value by 1 if the current state of index is greater than 0 or else its equal to 4 which is the last image
    const curIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : sliderImages.length - 1;
    setCurrentImageIndex(curIndex);
  }
  //Handles onclick event for right button
  function rightButtonHandler() {
    // curIndex decreases index value by 1 if the current state of index is greater than 0 or else its equal to 4 which is the last image
    const curIndex =
      currentImageIndex < sliderImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(curIndex);
  }
  return (
    <div className={classes.container}>
      <h1>Inaugrural ceremony of Beti hai to kal hai</h1>
      <div className={classes.sliderContainer}>
        <img src={sliderImages[currentImageIndex]} />
        <button className={classes.left} onClick={leftButtonHandler}>
          ❰
        </button>
        <button className={classes.right} onClick={rightButtonHandler}>
          ❱
        </button>
      </div>
    </div>
  );
};

export default Inauguration;
