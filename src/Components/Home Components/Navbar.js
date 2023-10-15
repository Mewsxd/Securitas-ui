import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [show, setShow] = useState();
  // useEffect(() => {
  //   function resizeHandler() {
  //     const newWidth = window.innerWidth();
  //     setWindowWidth(newWidth);
  //     setShow(windowWidth < 600);
  //   }
  //   window.addEventListener("resize", resizeHandler);

  //   return () => {
  //     window.removeEventListener("resize", resizeHandler);
  //   };
  // }, [window.innerWidth]);
  const [open, setOpen] = useState(true);
  // console.log("FROM Navbar.js ", open);
  const hamburgerNavbarHandler = () => {
    setOpen((state) => !state);
    console.log("FROM Navbar.js ", open);
    props.onStatus(open);
  };
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <p style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            Shubhsita foundation
          </p>
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
          {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Sector</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul> */}
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
            {/* <li>Services</li> */}
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
          <p className={classes.hamburger} onClick={hamburgerNavbarHandler}>
            <GiHamburgerMenu />
          </p>
          {/* <div className={classes.hamburgerNavbar}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
