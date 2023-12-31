import React from "react";
import classes from "./OurStory.module.css";
import oldWoman from "../../Assets/old woman.jpg";
import croppedSchoolGirl from "../../Assets/school girl vertical cropped.jpg";
import schoolGirl from "../../Assets/school girl vertical.webp";
const OurStory = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.story}>
        <section className={classes.left}>
          <h1>Helping women succeed throught the power of education.</h1>
          <img src={croppedSchoolGirl} />
          <p>
            Dedicated to transformative impact, our NGO is devoted to empowering
            female education, breaking barriers, fostering equality, and
            creating opportunities for girls' upliftment. Through impactful
            initiatives, we envision a world where every girl has access to the
            tools and knowledge needed for a brighter and equitable future. Our
            commitment extends to cultivating environments where education
            becomes a powerful force, shaping empowered individuals and
            communities.
          </p>
        </section>
        <section className={classes.right}>
          <img src={schoolGirl} />
        </section>
      </div>
      <div className={classes.vision}>
        <section className={classes.bottomLeft}>
          <h1>Our Vision</h1>
          <img src={oldWoman} />
        </section>
        <section className={classes.bottomRight}>
          <h1>Our Vision</h1>
          <p>
            Our NGO envisions a future where female education empowerment
            becomes a global reality. Aspiring to dismantle barriers, we're
            dedicated to providing every girl with access to quality education,
            fostering gender equality, and unleashing a ripple effect of
            positive change across generations. Our visionary goal is a world
            where education's transformative power uplifts entire communities,
            creating a sustainable impact that transcends borders, enriching
            lives and shaping a brighter future for countless individuals
            worldwide.
          </p>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
