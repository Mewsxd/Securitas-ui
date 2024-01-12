import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png";
const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  function hamburgerListener() {
    setShowHamburger(!showHamburger);
  }
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <img src={logo} className={classes.logo} alt="logo" />
          <NavLink to={"/"}>
            <p
              className={classes.title}
              onClick={() => setShowHamburger(false)}
            >
              Beti Hai Toh Kal Hai
            </p>
          </NavLink>
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
            <li>
              <NavLink
                to="/members"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Members
              </NavLink>
            </li>
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
            <GiHamburgerMenu onClick={hamburgerListener} />
          </p>
        </div>
      </div>
      {showHamburger && (
        <div className={classes.hamburgerNavbar}>
          <ul onClick={() => setShowHamburger(false)}>
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
            <li>
              <NavLink
                to="/members"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Members
              </NavLink>
            </li>
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
