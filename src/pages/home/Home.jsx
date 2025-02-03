import React from "react";
import "./Home.scss";
import Hello from "./components/Hello";
import Lines from "../../animations/animated-lines/Animatedlines";
import Rlines from "../../animations/animated-rlines/Animatedrlines";
import Banner from "./components/Banner";
import Skills from "./components/Skills";

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
    </div>
  );
};

export default Home;
