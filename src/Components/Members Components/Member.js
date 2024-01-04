import React from "react";
import m1 from "../../Assets/Members/member-1.jpeg";
import m2 from "../../Assets/Members/member-2.jpeg";

import classes from "./Member.module.css";
const Member = ({ img, name, female }) => {
  return (
    <div className={classes.member}>
      <img src={img} alt="p1" />
      <p>
        {female ? "Smt " : "Shri "} {name}
      </p>
    </div>
  );
};

export default Member;
