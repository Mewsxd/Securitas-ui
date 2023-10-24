import React from "react";
import classes from "./Sectors.module.css";
import { SectorContainer } from "./SectorContainer";
import img1 from "../../Assets/educationImage.jpg";
import img2 from "../../Assets/legal services.webp";
import img3 from "../../Assets/jobs sector.jpg";
const Sectors = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Sectors</p>
      <div className={classes.inner}>
        <SectorContainer
          icon={img1}
          title="Education"
          desc="Committed to education for all, our NGO offers free learning opportunities, empowering women's lives"
        />
        <SectorContainer
          icon={img2}
          title="Legal Services"
          desc="Empowering women through free legal aid, our NGO ensures justice, protection, and equality for every woman"
        />
        <SectorContainer
          icon={img3}
          title="Jobs"
          desc="NGO empowers women with jobs, fostering independence, economic growth, and positive community impact"
        />
      </div>
    </div>
  );
};

export default Sectors;
