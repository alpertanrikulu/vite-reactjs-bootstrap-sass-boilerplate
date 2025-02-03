import React from "react";
import "./Istanbul.scss";

import Bikebwheel from "./svg/arka-tekerlek.svg";
import Bikefwheel from "./svg/on-tekerlek.svg";
import Bikeframe from "./svg/bisiklet-govde.svg";
import Lamba from "./svg/lambaa.svg";
import Sittingcat from "./svg/oturankedi.svg";
import Walkingcat from "./svg/yuruyenkedii.svg";
import Lookingcat from "./svg/bakankedi.svg";
import Umbrella from "./svg/semsiye.svg";
import Galata from "./svg/galataa.svg";
import Cablsestone from "./svg/cablestone.svg";

const Istanbul = () => {
  return (
    <div className="street">
      <div className="bikeframediv position-absolute z-n3 opacity-25">
        <img className="bikebwheel" src={Bikebwheel} alt="" />
        <img className="bikeframe" src={Bikeframe} alt="" />
        <img className="bikefwheel" src={Bikefwheel} alt="" />
        <img className="umbrella" src={Umbrella} alt="" />
      </div>
      <div className="galatacat">
        <img className="galata opacity-25" src={Galata} alt="" />
        <img className="walkingcat opacity-25" src={Walkingcat} alt="" />
      </div>
      <div className="rightlamb">
        <img className="sittingcat opacity-25" src={Sittingcat} alt="" />
        <img className="lookingcat opacity-25" src={Lookingcat} alt="" />
        <img className="lambar opacity-25" src={Lamba} alt="" />
      </div>
      <img className="lambal opacity-25" src={Lamba} alt="" />
      <hr className="ip opacity-25" />
    </div>
  );
};

export default Istanbul;
