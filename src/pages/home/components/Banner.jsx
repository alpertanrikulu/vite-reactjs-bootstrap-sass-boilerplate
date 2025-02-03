import React, { useState, useEffect, useRef } from "react";
import "./styles/Banner.scss";

const Banner = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
      if (entry.target === containerRef2.current) {
        setIsVisible2(entry.isIntersecting);
      }
      if (entry.target === containerRef3.current) {
        setIsVisible3(entry.isIntersecting);
      }
      if (entry.target === containerRef4.current) {
        setIsVisible4(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);
    if (containerRef4.current) observer.observe(containerRef4.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
      if (containerRef4.current) observer.unobserve(containerRef4.current);
    };
  }, [containerRef1, containerRef2, containerRef3, containerRef4, options]);

  return (
    <div
      className="position-relative z-n6"
      style={{ minHeight: "125vh", backgroundColor: "rgb(29, 38, 89)" }}
    >
      <div className="container">
        <div className="row">
          <div ref={containerRef1} className="col-lg-8 order-2 order-lg-1">
            <h2
              className={`text-start mt-0 textResponsive2 ${
                isVisible1 ? "animationTextIn" : "animationTextOut"
              } mb-3 pt-5`}
            >
              LET'S CREATE
            </h2>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 d-flex justify-content-center align-items-center pt-5">
            <div
              style={{
                width: "350px",
                height: "150px",
                backgroundColor: "rgb(0,0,0)",
              }}
            ></div>
          </div>
        </div>
        <div className="row" style={{ animationDelay: "2s" }}>
          <div ref={containerRef2} className="col-12" id="animationDiv">
            <h2
              className={`text-center textResponsive2 my-3 ${
                isVisible2 ? "animationTextIn" : "animationTextOut"
              }`}
            >
              SOMETHING GREAT
            </h2>
          </div>
        </div>
        <div className="row" style={{ animationDelay: "3s" }}>
          <div className="col-md-6 order-2 order-md-1">
            <div
              style={{
                width: "350px",
                height: "150px",
                backgroundColor: "rgb(0,0,0)",
              }}
            ></div>
          </div>
          <div ref={containerRef3} className="col-md-6 order-1 order-md-2">
            <h2
              className={`text-end textResponsive2 my-3 ${
                isVisible3 ? "animationTextIn" : "animationTextOut"
              }`}
            >
              TOGETHER
            </h2>
          </div>
        </div>
        <div ref={containerRef4}>
          <h2
            className={`text-center textResponsive2 animationText mt-3 mb-5 ${
              isVisible4 ? "animationTextIn" : "animationTextOut"
            }`}
          >
            WE’LL DEBUG THE REST!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
