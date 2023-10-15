import React from "react";
import classes from "./Stats.module.css";
import { useSpring, animated } from "@react-spring/web";
function Number({ n, sign }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  const animatedNumber = number.to((n) => n.toFixed(0));
  return <animated.div>{animatedNumber}</animated.div>;
}

const Stats = () => {
  return (
    <div className={classes.container}>
      <p className={classes.mainTitle} style={{ marginBottom: "2vw" }}>
        A trusted leader in security for over two decades
      </p>
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <p className={classes.number}>
            <Number n={325} />
            <p>+</p>
          </p>
          <p className={classes.title}>SATISFIED CLIENTS</p>
        </div>
        <div className={classes.text}>
          <p className={classes.number}>
            <Number n={96} />
            <p>%</p>
          </p>
          <p className={classes.title}>RETENTION RATE</p>
        </div>
        <div className={classes.text}>
          <p className={classes.number}>
            <Number n={2700} />
            <p>+</p>
          </p>
          <p className={classes.title}>MANPOWER</p>
        </div>
        <div className={classes.text}>
          <p className={classes.number}>
            <Number n={100} />
            <p>%</p>
          </p>
          <p className={classes.title}>COMPLIANCE</p>
        </div>
        <div className={classes.text}>
          <p className={classes.number}>
            <Number n={4} />
          </p>
          <p className={classes.title}>BUSINESS VERTICALS</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
