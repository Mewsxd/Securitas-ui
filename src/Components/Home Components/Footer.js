import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>IronGate</p>
            <div className={classes.logoContainer}>
              <p
                style={{
                  backgroundColor: "red",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "orange",
                }}
              ></p>
              <p
                style={{
                  backgroundColor: "green",
                }}
              ></p>
            </div>
            {/* </div> */}
          </div>
          <p className={classes.desc}>
            IronGate provides progressive, and affordable
            <br /> security, accessible worldwide
            <br /> for everyone
          </p>
          <p style={{ fontWeight: 300 }} className={classes.desc}>
            ©IronGate LTD 2020. All rights reserved
          </p>
        </div>
        <div className={classes.right}>
          <div className={classes.rightLeft}>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a service</li>
              <li>Apps</li>
            </ul>
          </div>
          <div className={classes.rightCenter}>
            <p>Region</p>
            <ul>
              <li>Mumbai</li>
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Kerala</li>
            </ul>
          </div>
          <div className={classes.rightRight}>
            <p>Help</p>
            <ul>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How is works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
