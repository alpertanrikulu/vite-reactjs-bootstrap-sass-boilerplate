import React from "react";
import "./Home.scss";
import Hello from "./components/Hello";
import Lines from "../../animations/animated-lines/Animatedlines";
import Rlines from "../../animations/animated-rlines/Animatedrlines";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

const Home = () => {
  return (
    <div>
      <div style={{ height: "120px", width: "100wv" }}></div>
      <Hello />
      <Lines />
      <Rlines />
      <hr className="opacity-25 my-0" />
      <Banner />
      <Skills />
      <hr className="opacity-25 my-0" />
      <Education />
      {/* <hr className="opacity-25 my-0" /> */}
    </div>
  );
};

export default Home;
