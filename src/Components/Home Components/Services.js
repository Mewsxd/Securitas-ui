import React from "react";
import classes from "./Services.module.css";
// import facility from "../../Assets/Facility management.png";
// import security from "../../Assets/Event security.png";
// import""from "../../Assets/Security services.png";
// import cleaning from "../../Assets/Housekeeping.jpg";
const Services = () => {
  return (
    <div className={classes.container}>
      <p
        // style={{
        //   fontSize: "2vw",
        //   fontWeight: 600,
        //   textAlign: "center",
        //   color: "#26224c",
        //   marginBottom: "3rem",
        // }}
        className={classes.title}
      >
        Services
      </p>
      <div className={classes.card}>
        <img src="" alt="facility" />
        <div>
          <ul>
            <li>Certified Protection Officer (C.P.O.)</li>
            <li>Armed Guards</li>
            <li>Static Guards</li>
            <li>Mobile Guards</li>
            <li>Electronic Surveillance (CCTV)</li>
          </ul>
          <p>Security Services</p>
        </div>
      </div>
      <div className={classes.card}>
        {/* <img src={facility} alt="facility" /> */}
        <div>
          <ul>
            <li>Pest control services</li>
            <li>Waste management services</li>
            <li>Transportation services</li>
            <li>Landscaping services</li>
          </ul>
          <p>Facility Management Service</p>
        </div>
      </div>

      <div className={classes.card}>
        {/* <img src={cleaning} alt="facility" /> */}
        <div>
          <ul>
            <li>Dusting</li>
            <li>Vacuuming</li>
            <li>Mopping</li>
            <li>Wiping down surfaces</li>
          </ul>
          <p>Housekeeping Services</p>
        </div>
      </div>
      <div className={classes.card}>
        {/* <img src={security} alt="facility" /> */}
        <div>
          <ul>
            <li>Intelligence to manage the gathering</li>
            <li>
              Route and alternate route selection, intelligence on exit routes
            </li>
            <li>Crowd control, media response</li>
            <li>
              Coordination with government agencies and local law enforcement
            </li>
          </ul>
          <p>Event Security Services</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
