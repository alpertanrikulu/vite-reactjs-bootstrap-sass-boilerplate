import React, { useRef, useEffect, useState } from "react";
import "./Universe.css";
// import Alper from "../../../assets/universe/alper.svg";
import Bootstrap from "../../assets/universe/bootstrap.svg";
import Django from "../../assets/universe/django.svg";
import Fastapi from "../../assets/universe/fastapi.svg";
import Figma from "../../assets/universe/figma.svg";
import Flask from "../../assets/universe/flask.svg";
import Github from "../../assets/universe/github.svg";
import Materialui from "../../assets/universe/materialui.svg";
import Python from "../../assets/universe/python.svg";
import Reacts from "../../assets/universe/react.svg";
import Reduxs from "../../assets/universe/redux.svg";
import Tsql from "../../assets/universe/tsql.svg";
import Vites from "../../assets/universe/vite.svg";

import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../pointer/pointer";

const Universe = () => {
  const universeRef = useRef(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === universeRef.current) {
        setIsDisplayed(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (universeRef.current) observer.observe(universeRef.current);

    return () => {
      if (universeRef.current) observer.unobserve(universeRef.current);
    };
  }, [universeRef, options]);

  return (
    <div className="mt-5">
      <div className="universe shadowEffect">
        <pointer-particles
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1011, // En arka plana yerleştirir
          }}
        ></pointer-particles>

        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
        <div className="alper" ref={universeRef}>
          {/* <img src={Alper} alt="" /> */}
          <h2
            className={`text-white display-2 mb-0 ${
              isDisplayed ? "skillsIn" : "skillsOut"
            }`}
          >
            Skills
          </h2>
        </div>
        <div
          className="level"
          style={{
            "--quantity": 3,
            "--zaman": 10,
            "--distance": 150,
            zIndex: "1001",
          }}
        >
          <div className="orbit" style={{ "--position": 1 }}>
            <div className="slider">
              <div className="item">
                <img src={Github} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 2 }}>
            <div className="slider">
              <div className="item">
                <img src={Figma} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 3 }}>
            <div className="slider">
              <div className="item">
                <img src={Tsql} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="level"
          style={{
            "--quantity": 4,
            "--zaman": 15,
            "--distance": 250,
            zIndex: "1002",
          }}
        >
          <div className="orbit" style={{ "--position": 1 }}>
            <div className="slider">
              <div className="item">
                <img src={Python} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 2 }}>
            <div className="slider">
              <div className="item">
                <img src={Flask} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 3 }}>
            <div className="slider">
              <div className="item">
                <img src={Fastapi} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 4 }}>
            <div className="slider">
              <div className="item">
                <img src={Django} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="level"
          style={{
            "--quantity": 5,
            "--zaman": 20,
            "--distance": 350,
            zIndex: "1003",
          }}
        >
          <div className="orbit" style={{ "--position": 1 }}>
            <div className="slider">
              <div className="item">
                <img src={Reacts} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 2 }}>
            <div className="slider">
              <div className="item">
                <img src={Materialui} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 3 }}>
            <div className="slider">
              <div className="item">
                <img src={Bootstrap} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 4 }}>
            <div className="slider">
              <div className="item">
                <img src={Vites} alt="" />
              </div>
            </div>
          </div>
          <div className="orbit" style={{ "--position": 5 }}>
            <div className="slider">
              <div className="item">
                <img src={Reduxs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universe;
