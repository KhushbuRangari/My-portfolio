import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Biography from "./Biography";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Services from "./Services";
import { Link } from "react-router-dom";

function Homepage() {
  const [contentStyle, setContentStyle] = useState({});

  function handleMouse(e) {
    let x = e.clientX;
    let y = e.clientY;

    setContentStyle({
      transform: `translate3d(${(x - window.innerWidth / 2) / 25}px, ${
        (y - window.innerHeight / 2) / 25
      }px, 0px)`,
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    });
  }
  function handleToggleSidebar() {}
  return (
    <Layout>
      <div className="homepage" id="section1"  onMouseMove={handleMouse}>
        <div className="content d-flex d-flex-row">
          <div className="effect" style={contentStyle}>
            <div className="background"></div>
            <img src="/mypic.jpg" width={"250px"} alt="" />
          </div>

          <p className="data">
            <h1>WEBSITE DEVELOPER</h1>
            <hr
              style={{
                width: "150px",
                height: "1px",
                border: "2px solid black",
              }}
            />
            Professional Full Stack Developer based on Pune. Developing my
            skills and building a road-map for the future.
          </p>
        </div>
      </div>
      <span className="arrow d-flex d-flex-row">
        <div className="divider"></div>
        <Link to="/homepage" className="upArrow" onClick={handleToggleSidebar}>
          <i
            class="fa-solid fa-arrow-up"
            style={{ width: "90%", height: "70%" }}
          ></i>
        </Link>
      </span>
      <Biography id="section2" />
      <Portfolio id="section3" />
      <Projects id="section4" />
      <Services id="section5" />
    </Layout>
  );
}

export default Homepage;
