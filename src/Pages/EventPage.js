import React from "react";
import eventImage from "../Assets/rojgar-yojona.jpg";
import classes from "./EventPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const EventPage = () => {
  return (
    <div className={classes.eventContainer}>
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
    </div>
  );
};

export default EventPage;
