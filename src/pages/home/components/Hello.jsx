import React from "react";
import Waves from "../../../animations/waves/Waves";
import Avatar from "../../../assets/images/avatar.png";
import Darrow from "../../../assets/svg/darrow.svg";
import "./styles/Hello.scss";

const Hello = () => {
  return (
    <div className="position-relative container px-5">
      <div className="row text-center text-md-start">
        <div className="col-12 col-md-6 col-xl-6 mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 order-1 order-lg-2 ">
              <div
                className="text-center text-lg-end ffRoboto"
                style={{ width: "100wv" }}
              >
                <button className="myButton leftSlideAnimation">
                  <span className="fs-5 fw-200">Download my CV </span>
                  <img
                    src={Darrow}
                    style={{ width: "16px", height: "auto" }}
                    alt="Download my cv"
                  />
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <p className="fs-1 fw-bold mb-0">Hello 👋, I'm</p>
            </div>
          </div>
          <h1 className="textResponsive">Alper Tanrıkulu</h1>
          <h2 className="ffRoboto opacity-75 fw-normal fs-4 my-5 pb-5 py-md-3">
            I craft dynamic web experiences using React, creating animated
            websites and functional application interfaces with clean,
            responsive designs
          </h2>
        </div>
        <div className="col-12 col-md-6 col-xl-5 position-relative d-flex justify-content-start align-items-end">
          <div className="bottom-0 d-flex justify-content-center align-items-center">
            <Waves />
            <img
              className=""
              src={Avatar}
              alt="Alper Tanrikulu hello page avatar"
            />
          </div>
        </div>
        <div className="col-xl-1 d-none d-xl-flex flex-column align-items-center justify-content-center order-xl-3">
          <button
            className="myButton2 fs-5 fw-5 my-5 px-3 py-0 ffRoboto"
            style={{
              transform: "rotate(270deg)",
            }}
          >
            YouTube
          </button>
          <button
            className="myButton2 fs-5 fw-5 my-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
          >
            Instagram
          </button>
          <button
            className="myButton2 fs-5 fw-5 my-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
          >
            LinkedIn
          </button>
          <button
            className="myButton2 fs-5 fw-5 mt-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
