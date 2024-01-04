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
      <div className={classes.mainContainer}>
        <h1>Need more details?</h1>
        <hr />
        <div className={classes.innerContainer}>
          <div className={classes.left}>
            <FormComponent />
          </div>
          <div className={classes.right}>
            <ul>
              <li>
                <AiFillHome />
                <span>
                  F-1204, Sonam Shrivilas, new golden nest phase 15, bhayandar
                  east, thane 401105
                </span>
              </li>
              <li>
                <MdEmail />{" "}
                <span>
                  satish3272003@yahoo.co.in <br />{" "}
                  {/* imranbanani@languagefluent.com */}
                </span>
              </li>

              <li>
                <BsPhoneFill /> <span>+91 8169017703, +91 7021840281</span>
              </li>
            </ul>
            <div className={classes.socialMediaIcons}>
              <BsFacebook />
              <GrYoutube />
              <AiFillInstagram />
            </div>
          </div>
        </div>
        <hr></hr>
        <h1 className={classes.thankYou}>Thank You For Contacting Us</h1>
      </div>
    </div>
  );
};

export default ContactPage;
