import React from "react";
import classes from "./Intro.module.css";
// import back from "../../Assets/portrait-male-security-guard-with-uniform.jpg";
import back from "../../Assets/portrait-male-security-guard-with-radio-station-camera-screens.jpg";
const Intro = () => {
  return (
    <div className={classes.container}>
      {/* <p
        style={{
          margin: 0,
          fontSize: "4rem",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        About Us
      </p> */}
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <img src={back} alt="ad jh " />
        </div>
        <div className={classes.right}>
          <p className={classes.title} style={{ marginBottom: "2vw" }}>
            Welcome to IronGate
          </p>
          <hr
            style={{
              color: "black",
              width: "40px",
              borderBottom: "3px solid #26224c",
              margin: "0px 2px",
            }}
          ></hr>
          <p className={classes.desc} style={{ marginTop: "2vw" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          {/* <p
            style={{
              fontSize: "1.1rem",
              width: "75%",
              lineHeight: "1.8rem",
              wordSpacing: "0.5rem",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
