import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Biography from "./Biography";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import GitHubProfile from "./GitHubProfile";
import Divider from "./Divider";

function Homepage({color}) {

  const [contentStyle, setContentStyle] = useState({});

  function handleMouse(e) {
    let x = e.clientX;
    let y = e.clientY;

    setContentStyle({
      transform: `translate3d(${(x - window.innerWidth / 2) / 25}px, ${
        (y - window.innerHeight / 2) / 15
      }px, 0px)`,
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    });
  }
//for otpless login 
const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
  // Dynamically load OTPLESS SDK script
  const script = document.createElement("script");
  script.id = "otpless-sdk";
  script.type = "text/javascript";
  script.src = "https://otpless.com/v2/auth.js";
  script.setAttribute("data-appid", "RM2I31PAOMTTAJ0UGFLP"); // Replace YOUR_APP_ID with your actual app ID
  document.head.appendChild(script);

  // Initialize OTPLESS callback function
  window.otpless = (otplessUser) => {
    // Set user information state
    setUserInfo(otplessUser);

  };
}, []);

  return (
    <Layout color={color}>
      <div className="homepage" id="section1"  onMouseMove={handleMouse}>
        <div className="content d-flex d-flex-row">
          <div className="effect" style={contentStyle}>
            <div className="background" style={{ backgroundColor:color}}></div>
            <img src="/mypic.jpg" alt="" />
          </div>
           <div id="otpless-login-page"></div>
          <div className="data">
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
          </div>
        </div>
      </div>
     <Divider/>

     
      <Biography id="section2" color={color} />
      < Divider/>
      <Portfolio id="section3" />
      < Divider/>
      <Projects id="section4" />
      < Divider/>
      <GitHubProfile id="section5" />
      
    </Layout>
  );
}

export default Homepage;
