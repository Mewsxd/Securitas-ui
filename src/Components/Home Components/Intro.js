import React from "react";
import classes from "./Intro.module.css";
// import back from "../../Assets/portrait-male-security-guard-with-uniform.jpg";
import back from "../../Assets/portrait-male-security-guard-with-radio-station-camera-screens.jpg";
import introGirl from "../../Assets/intro girl.png";
const Intro = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.left}>
          <img src={introGirl} alt="ad jh " />
        </div>
        <div className={classes.right}>
          <p className={classes.title} style={{ marginBottom: "2vw" }}>
            Welcome to Beti Hai
            <br /> Toh Kal Hai
          </p>
          <hr />
          <p className={classes.desc} style={{ marginTop: "2vw" }}>
            Our NGO envisions a future where the empowerment of education for
            Indian women is a widespread reality. Committed to breaking
            barriers, we dedicate ourselves to ensuring every Indian girl has
            access to quality education, fostering gender equality, and creating
            a transformative ripple effect across generations. Our vision is of
            an India where the power of education uplifts entire communities,
            transcending borders, enriching lives, and shaping a brighter future
            for countless women and families across the nation.
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
