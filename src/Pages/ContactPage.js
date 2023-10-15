import React from "react";
import classes from "./ContactPage.module.css";
import { AiFillHome, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsPhoneFill, BsFacebook } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import FormComponent from "../Components/FormComponent";
const ContactPage = () => {
  return (
    <div>
      {/* <ScrollToTop />
      <Navbar /> */}
      <div className={classes.mainContainer}>
        <h1>Need more details?</h1>
        <hr />
        <div className={classes.innerContainer}>
          <div className={classes.left}>
            <FormComponent />
            {/* <div className={classes.formContainer}>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ marginTop: "2vw" }}
                />
                <input type="text" placeholder="Phone number" />
                <input type="email" placeholder="Email" />
              </form>
              <button>Submit</button>
            </div> */}
          </div>
          <div className={classes.right}>
            <ul>
              <li>
                <AiFillHome />
                <span>
                  Priyadarshini College Rd, near Swami Samarth Mandir, Alodi,
                  Wardha, Maharashtra 442001
                </span>
              </li>
              <li>
                <MdEmail />{" "}
                <span>
                  contact@languagefluent.com <br />{" "}
                  imranbanani@languagefluent.com
                </span>
              </li>

              <li>
                <BsPhoneFill /> <span>+91 8329683501, +91 8767468470</span>
              </li>
            </ul>
            <div className={classes.socialMediaIcons}>
              <BsFacebook />
              <GrYoutube />
              <AiFillInstagram />
            </div>
          </div>
        </div>
        <h1 className={classes.thankYou}>Thank You For Contacting Us</h1>
      </div>
    </div>
  );
};

export default ContactPage;
