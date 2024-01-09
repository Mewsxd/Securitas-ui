import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../Assets/logo.png";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <p className={classes.title}>Beti Hai Toh Kal Hai</p>
          </div>
          <p className={classes.desc}>
            Our foundation provides progressive and affordable empowerment,
            accessible nation wide for every woman.
          </p>
          <p style={{ fontWeight: 300 }} className={classes.desc}>
            ©Beti Hai Toh Kal Hai LTD 2023. All rights reserved
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
            <p>Reach us</p>
            <ul>
              <li>
                F-1204, Sonam Shrivilas, new golden nest phase 15, bhayandar
                east, thane 401105
              </li>
              <li>+91 8169017703, +91 7021840281</li>
            </ul>
            <div className={classes.socialMediaIcons}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/BetiHaii"
              >
                <BsFacebook />
              </a>
              <GrYoutube />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/betihaii"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
