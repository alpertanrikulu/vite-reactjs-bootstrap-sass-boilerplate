import React from "react";
import "./Animatedrlines.scss";
import Rlines from "../../assets/svg/rlines.svg";

const Animatedrlines = () => {
  return (
    <div className="animatedRLinesDiv d-lg-block position-absolute z-n5 opacity-25">
      <img
        className="animatedRLines position-absolute"
        src={Rlines}
        alt="animated lines"
      />
    </div>
  );
};

export default Animatedrlines;
