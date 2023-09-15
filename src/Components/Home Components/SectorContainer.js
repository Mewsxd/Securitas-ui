import React from "react";
import classes from "./SectorContainer.module.css";
export const SectorContainer = (props) => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.inner}>
          {props.icon}
          <p className={classes.title}>{props.title}</p>
          <p className={classes.desc}>{props.desc}</p>
        </div>
      </div>
    </>
  );
};
