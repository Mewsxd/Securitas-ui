import React from "react";
import classes from "./SectorContainer.module.css";
import { Link, NavLink } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const SectorContainer = (props) => {
  return (
    <>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <img src={props.icon} />
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
