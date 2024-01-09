import React from "react";
import eventImage from "../Assets/rojgar-yojona.jpeg";
import classes from "./EventPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import img1 from "../Assets/Events/geeta1.jpeg";
import img2 from "../Assets/Events/geeta2.jpeg";

const EventPage = () => {
  const sliderImages = [img1, img2];
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
    <div className={classes.eventContainer}>
      <div className={classes.rojgarMelaEvent}>
        <h1>Event:- Rojgar Mela 2024</h1>
        <img src={eventImage} alt="eventimage" />

        <h3>Date:- 28th January'24, 10AM to 3AM</h3>
        <h3>
          Venue:- Shivar garden, Mira bhayandar road, Mira road (East), Thane -
          401107
        </h3>
        <div className={classes.phoneNumber}>
          <FaPhoneAlt className={classes.icon} />
          <h3>+91 8169017703</h3>
        </div>
        <h3>Register for the event by clicking the button below</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdaa61wrvcYEqG_U1f0vTEBBtvM5nZvyBBpZoL_4xS4MW1SnQ/viewform"
        >
          <button>Register here</button>
        </a>
      </div>
      <div className={classes.geetaDistributionEvent}>
        <h1>Event:- Bhagwat Geeta distribution event</h1>
        <div className={classes.sliderContainer}>
          <img src={sliderImages[currentImageIndex]} alt="slider" />
          <button className={classes.left} onClick={leftButtonHandler}>
            ❰
          </button>
          <button className={classes.right} onClick={rightButtonHandler}>
            ❱
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
