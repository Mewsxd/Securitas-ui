import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

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
            <button>Home</button>
            <button>About</button>
            <button>Services</button>
            <button>Sector</button>
            <button>Career</button>
            <button>Contact Us</button>
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
