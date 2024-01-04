import React from "react";
import classes from "./Form.module.css";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import FormComponent from "../FormComponent";
const Form = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <p className={classes.title}>Chat with us</p>
        <div className={classes.left}>
          <div className={classes.textContainer}>
            <p className={classes.textTitle}>Contact Us</p>
            <div className={classes.text}>
              <MdEmail className={classes.icons} />
              <div>
                <p>Chat with us</p>
                <p>satish3272003@yahoo.co.in</p>
              </div>
            </div>
            <div className={classes.text}>
              <BsTelephoneFill className={classes.icons} />
              <div>
                <p>Call us</p>
                <p>8169017703, 7021840281</p>
              </div>
            </div>
            <div className={classes.text}>
              <FaMapPin className={classes.icons} />
              <div>
                <p>Visit us</p>
                <p>Bhayandar east, thane 401105</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Form;
