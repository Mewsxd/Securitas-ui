import React from "react";
import classes from "./Sectors.module.css";
import { SectorContainer } from "./SectorContainer";
const Sectors = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Sectors</p>
      <div className={classes.inner}>
        <SectorContainer
          icon="https://images.edexlive.com/uploads/user/imagelibrary/2019/3/8/original/2-india.jpg"
          title="Education"
          desc="Committed to education for all, our NGO offers free learning opportunities, empowering women's lives"
        />
        <SectorContainer
          icon="https://img.freepik.com/free-photo/wooden-gavel_93675-134630.jpg?w=996&t=st=1697018448~exp=1697019048~hmac=b1e1de872568ffef18d052e0143e6aef3031c218c12f333185695b81d3e421c1"
          title="Legal Services"
          desc="Empowering women through free legal aid, our NGO ensures justice, protection, and equality for every woman"
        />
        <SectorContainer
          icon="https://n5a7d2f2.stackpathcdn.com/wp-content/uploads/2019/11/working-women-Web.jpg"
          title="Jobs"
          desc="NGO empowers women with jobs, fostering independence, economic growth, and positive community impact"
        />
      </div>
    </div>
  );
};

export default Sectors;
