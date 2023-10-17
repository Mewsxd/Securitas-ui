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
                <p>irongate.info@gmail.com</p>
              </div>
            </div>
            <div className={classes.text}>
              <BsTelephoneFill className={classes.icons} />
              <div>
                <p>Chat with us</p>
                <p>irongate.info@gmail.com</p>
              </div>
            </div>
            <div className={classes.text}>
              <FaMapPin className={classes.icons} />
              <div>
                <p>Chat with us</p>
                <p>irongate.info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
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
      </div>
    </div>
  );
};

export default Form;