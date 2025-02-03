import React, { useRef, useEffect, useState } from "react";
import Darrow from "../../../assets/svg/darrow.svg";
import "./styles/Skills.scss";
// import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import "../../../animations/pointer/pointer";
import Universe from "../../../animations/universe/Universe";

const Skills = () => {
  // const popoverRef = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

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
      if (entry.target === containerRef5.current) {
        setIsVisible5(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    // Tüm popover butonlarını seç
    const popoverButtons = document.querySelectorAll(
      "[data-bs-toggle='popover']"
    );
    popoverButtons.forEach((button) => {
      // Bootstrap Popover başlat
      new bootstrap.Popover(button, {
        // content: "Hello popover content!", // Popover içeriği
        // title: "Popover Title", // Başlık
        trigger: "click", // Tetikleme türü
      });
    });

    // Temizleme işlemi (componentWillUnmount)
    return () => {
      popoverButtons.forEach((button) => {
        const popoverInstance = bootstrap.Popover.getInstance(button);
        if (popoverInstance) {
          popoverInstance.dispose();
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);
    if (containerRef4.current) observer.observe(containerRef4.current);
    if (containerRef5.current) observer.observe(containerRef5.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
      if (containerRef4.current) observer.unobserve(containerRef4.current);
      if (containerRef5.current) observer.unobserve(containerRef5.current);
    };
  }, [
    containerRef1,
    containerRef2,
    containerRef3,
    containerRef4,
    containerRef5,
    options,
  ]);

  return (
    <div style={{ minHeight: "110vh" }}>
      {/* <pointer-particles
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2, // En arka plana yerleştirir
        }}
      ></pointer-particles> */}
      <div className="container d-flex justify-content-center">
        <div className="pt-5 col-11 text-center" id="summary">
          <div ref={containerRef1} className="row pt-5">
            <div className="col-xl-7">
              <h2
                className={`display-3 text-xl-start ${
                  isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
                }`}
              >
                This Is My Little Journey To Getting Here
              </h2>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-4">
              <div
                className="text-end ffRoboto text-center pt-5"
                style={{ width: "100wv" }}
              >
                <button
                  className={`myButton ${
                    isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
                  }`}
                >
                  <span className="fs-5 fw-200">Download my CV </span>
                  <img
                    src={Darrow}
                    style={{ width: "16px", height: "auto" }}
                    alt="Download my cv"
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div ref={containerRef2} className="col-12">
                <p
                  className={`pt-5 fs-4 text-xl-start ffRoboto mb-0 ${
                    isVisible2 ? "journeyTtitleIn" : "journeyTtitleOut"
                  }`}
                >
                  <span className="opacity-50">
                    I am someone who loves both technology and biology. I am
                    pursuing a career in bioinformatics, where computational
                    approaches are developed for biological systems. I also take
                    pleasure in enhancing my programming abilities, specifically
                    as a hobbyist creating web applications using Django.
                    Additionally, I work on educational projects to stay updated
                    and store them on my GitHub account. I thrive in workflows
                    and enjoy fast-paced evolving processes. I am responsible
                    and well-suited for teamwork.
                  </span>
                </p>
              </div>
              <div id="skills"></div>
            </div>
          </div>
        </div>
      </div>
      <Universe />
      {/* <h2 className="text-center display-3 my-5">Skills</h2> */}
      <hr className="my-0 opacity-25 border-2" />
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible3 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef3}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Frontend Technologies</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto">
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="Bootstrap is a CSS and JavaScript library for responsive web design."
            >
              Bootstrap
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="bootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttbootttboottt"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              ReactJS
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Material UI
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Redux Toolkit
            </button>
          </div>
        </div>
      </div>
      <hr className="my-0 opacity-25 border-2" />
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible4 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef4}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Backend Technologies</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto">
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Flask
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              FastAPI
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Django
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Django REST Framework
            </button>
          </div>
        </div>
      </div>
      <hr className="my-0 opacity-25 border-2" />
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible5 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef5}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Tools & Platforms</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto">
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Git
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Git Hub
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              Figma
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center ffRoboto">
            <button
              className="fs-4 myButton2"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="bottom"
              data-bs-content="Bottom popover"
              data-bs-custom-class="custom-popover"
              data-bs-title="asdf"
            >
              T-SQL
            </button>
          </div>
        </div>
      </div>
      <hr className="my-0 opacity-25 border-2" />
    </div>
  );
};

export default Skills;
