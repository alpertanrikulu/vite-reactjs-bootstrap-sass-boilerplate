import React from "react";
import "./Animatedrlines.scss";
import Rlines from "../../assets/svg/rlines.svg";

const Animatedrlines = () => {
  return (
    <div className="animatedRLinesDiv d-none d-lg-block position-absolute z-n4">
      <img className="animatedRLines" src={Rlines} alt="animated lines" />
    </div>
  );
};

export default Animatedrlines;
