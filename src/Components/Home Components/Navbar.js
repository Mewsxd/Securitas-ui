import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
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
        </div>
        <div className={classes.right}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sectors"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Sectors
              </NavLink>
            </li>
            <li>Career</li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <p className={classes.hamburger}>
            <GiHamburgerMenu />
          </p>
        </div>
      </div>
      {/* <div className={classes.hamburgerNavbar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Sector</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
