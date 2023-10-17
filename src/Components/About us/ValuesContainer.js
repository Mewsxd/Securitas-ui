import React from "react";
import classes from "./ValuesContainer.module.css";
import { GoLaw } from "react-icons/go";
import { RiSpeakLine } from "react-icons/ri";
import { GiFist } from "react-icons/gi";
export const ValuesContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <GoLaw className={classes.icon} />
        <h1>Legal Advocacy and Awareness</h1>
        <p>
          Legal advocacy is key for a women's rights NGO, providing support,
          raising awareness, and advocating reforms.
        </p>
      </div>
      <div className={classes.innerContainer}>
        <GiFist className={classes.icon} />
        <h1>Empowerment Initiatives</h1>
        <p>
          Empower women through education. Join our programs for rights,
          equality, and skills. Attend workshops and campaigns for positive
          change.
        </p>
      </div>
      <div className={classes.innerContainer}>
        <RiSpeakLine className={classes.icon} />
        <h1>Addressing Gender-Based Violence</h1>
        <p>
          Combat gender-based violence: prevention, support, awareness. Safe
          spaces, counseling, justice collaboration.
        </p>
      </div>
    </div>
  );
};
