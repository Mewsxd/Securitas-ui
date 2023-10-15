import React from "react";
import classes from "./SectorContainer.module.css";
import { Link } from "react-router-dom";
export const SectorContainer = (props) => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <img src={props.icon} />
          <p className={classes.title}>{props.title}</p>
          <p className={classes.desc}>{props.desc}</p>
        </div>
        {/* <p className={classes.readMore}>View More</p> */}
      </div>
    </>
  );
};
