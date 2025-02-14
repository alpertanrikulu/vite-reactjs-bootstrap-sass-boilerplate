import React from "react";
import Gemi from "./svg/gemi.svg";
import "./ship.css";

const Ship = () => {
  return (
    <div className="shipDiv opacity-25 position-absolute z-n3">
      <img className="ship" src={Gemi} alt="ship animation autline" />
    </div>
  );
};

export default Ship;
