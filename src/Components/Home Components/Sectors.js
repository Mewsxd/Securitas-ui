import React from "react";
import classes from "./Sectors.module.css";
import { SectorContainer } from "./SectorContainer";
import {
  FaGraduationCap,
  FaHospitalAlt,
  FaIndustry,
  FaPiggyBank,
  FaPlaneDeparture,
} from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { BsBuildingFill } from "react-icons/bs";
const Sectors = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Sectors</p>
      <div className={classes.inner}>
        <SectorContainer
          icon={<FaHospitalAlt className={classes.icon} />}
          title="Hospitals"
          desc="We manage hospitals and healthcare facilities. Facility management
          services for Indian states."
        />
        <SectorContainer
          icon={<FaPlaneDeparture className={classes.icon} />}
          title="Airport"
          desc="Every airport, train station, and subway stop in the country can rest assured that our facility management services will meet their specific needs."
        />
        <SectorContainer
          icon={<FaGraduationCap className={classes.icon} />}
          title="Educational institutes"
          desc="The education industry provides its students with the knowledge and skills to adapt to a continually changing working world."
        />
        {/* </div> */}
        {/* <div className={classes.inner}> */}
        <SectorContainer
          icon={<FaIndustry className={classes.icon} />}
          title="Industrial sector"
          desc="Most businesses in the industrial sector make and sell capital goods, provide transportation services, or offer commercial services and supplies."
        />
        <SectorContainer
          icon={<BsBuildingFill className={classes.icon} />}
          title="Banks"
          desc="Numerous public and private banks and their branches in India are also among our clients. We offer the best facility management services to each client."
        />
        <SectorContainer
          icon={<TbBuildingBank className={classes.icon} />}
          title="Central and state government"
          desc="Across multiple states in India, we manage the facilities for a wide variety of government agencies."
        />
      </div>
    </div>
  );
};

export default Sectors;
