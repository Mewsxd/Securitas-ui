import React from "react";
import classes from "./SectorContainer.module.css";
import { NavLink } from "react-router-dom";
export const SectorContainer = (props) => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <img src={props.icon} alt="aa" />
          <p className={classes.title}>{props.title}</p>
          <p className={classes.desc}>{props.desc}</p>
        </div>
        <NavLink to="/sectors" className={classes.responsiveViewMore}>
          <p>View More</p>
        </NavLink>
        <NavLink to="/sectors">
          <button className={classes.viewMoreBtn}>View More</button>
        </NavLink>
      </div>
    </>
  );
};
