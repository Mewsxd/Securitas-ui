import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <p className={classes.title}>Shubhsita foundation</p>
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
            Shubhsita provides progressive and affordable empowerment,
            accessible nation wide for every woman.
          </p>
          <p style={{ fontWeight: 300 }} className={classes.desc}>
            ©Shubhsita foundation LTD 2023. All rights reserved
          </p>
        </div>
        <div className={classes.right}>
          <div className={classes.rightLeft}>
            <p>Company</p>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/sectors">Sectors</Link>
              </li>
              <li>
                <Link>Team Members</Link>
              </li>
              <li>
                <Link to="contacts">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={classes.rightRight}>
            <p>Help</p>
            <ul>
              <li>
                Priyadarshini College Rd, near Swami Samarth Mandir, Alodi,
                Wardha, Maharashtra 442001
              </li>
              <li>+91 8329683501, +91 8767468470</li>
              {/* <li className={classes.socialMediaIcons}>
                <BsFacebook className={classes.socialMediaIcons} />
                <GrYoutube className={classes.socialMediaIcons} />
                <AiFillInstagram className={classes.socialMediaIcons} />
              </li> */}
            </ul>
            <div className={classes.socialMediaIcons}>
              <BsFacebook />
              <GrYoutube />
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
