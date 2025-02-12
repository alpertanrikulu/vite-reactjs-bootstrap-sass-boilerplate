import React from "react";
import "./styles/Education.scss";
import Logouu from "../../../assets/svg/logouu.svg";
import Logogtu from "../../../assets/svg/logogtu.svg";

const Education = () => {
  return (
    <div className="" id="education" style={{ minHeight: "125vh" }}>
      <h2 className="display-3 text-center mt-5">Education</h2>
      <div className="education-wrapper d-flex justify-content-center align-items-center">
        <div className="education-container pb-5">
          <input type="radio" name="slide" id="c1" checked />
          <label className="education-card" htmlFor="c1">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logouu} alt="Uludag University Logo" />
              </div>
              <div className="education-description">
                <h4 className="fs-2 fw-bold ffRoboto">Uludağ University</h4>
                <p className="ffRoboto text-white">
                  Faculty of Arts and Sciences (2017-2021) <br />
                  Bachelor of Molecular Biology and Genetics
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" checked />
          <label className="education-card" htmlFor="c2">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logogtu} alt="Gebze Technical University Logo" />
              </div>
              <div className="education-description">
                <h4 className="fs-2 fw-bold ffRoboto">
                  Gebze Technical University
                </h4>
                <p className="ffRoboto text-white fs-5">
                  Institute of Science (2023-Ongoing) <br />
                  Master of Bioinformatics and System Biology
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" checked />
          <label className="education-card" htmlFor="c3">
            <div className="education-row">
              <div className="education-icon"></div>
              <div className="education-description">
                <h4>Ululdağ Üniversitesi</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, numquam.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Education;
