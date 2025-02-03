import React from "react";
import "./Animatedlines.scss";
import Lines from "../../assets/svg/lines.svg";

const Animatedlines = () => {
  return (
    <div className="animatedLinesDiv d-none d-lg-block">
      <img className="animatedLines" src={Lines} alt="animated lines" />
    </div>
  );
};

export default Animatedlines;
