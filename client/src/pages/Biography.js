import React, { useState } from "react";
import { PersonalData } from "./PersonalData";
import DecorLines from "./DecorLines";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

function Biography({ color }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  console.log(isHovering, "biogr");
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div id="section2" className=" base biography">
        <h1 className="text-center">BIOGRAPHY</h1>
        <p>
          I'm a Freelancer Front-end Developer with over 12 years of experience.
          I'm from London, UK. I code and create web elements for amazing people
          around the world. I like work with new people. New people are new
          experiences.
        </p>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                {PersonalData.map((item, index) => {
                  return (
                    <>
                      <p>Name: {item.Name}</p>
                      <p>Birthday: {item.Birthday}</p>
                      <p>Age: {item.Age}</p>
                      <p>Address: {item.Address}</p>
                      <p>Phone: {item.Phone}</p>
                      <p>Email: {item.Email}</p>
                    </>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>

        <div className="container ">
          <div className="row cv justify-content-center">
            <DecorLines color={color} isHovering={isHovering} />
            <div
              className={`download text-center mb-2 `}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{ backgroundColor: color }}
            >
              <span style={{ color: "black" }}>
                <i
                  className="fa-solid fa-download fa-lg"
                  style={{ transform: isHovering ? " scale(0.7)" : "" }}
                />
              </span>
              <p>Download Resume</p>
            </div>
            <DecorLines color={color} isHovering={isHovering} />
          </div>
        </div>

        <div className="container exp">
          <div className="row text-center">
            <div>
              <p>
                <button
                  className="btn exp-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExp"
                  onClick={() => {
                    document
                      .getElementById("collapseEdu")
                      .classList.remove("show");

                    document
                      .getElementById("collapseSkill")
                      .classList.remove("show");
                  }}
                  aria-expanded="false"
                  aria-controls="#collapseExp"
                >
                  EXPERIENCE
                </button>
                <button
                  className="btn exp-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEdu"
                  onClick={() => {
                    document
                      .getElementById("collapseSkill")
                      .classList.remove("show") ;
                      document
                        .getElementById("collapseExp")
                        .classList.remove("show");
                  }}
                  aria-expanded="false"
                  aria-controls="#collapseEdu"
                >
                  EDUCATION
                </button>
                <button
                  className="btn exp-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSkill"
                  onClick={() => {
                    document
                      .getElementById("collapseEdu")
                      .classList.remove("show");
                      document
                        .getElementById("collapseExp")
                        .classList.remove("show");
                  }}
                >
                  SKILLS
                </button>
              </p>

              <div className="collapse" id="collapseExp">
                <Experience />
              </div>
              <div className="collapse" id="collapseEdu">
                <Education />
              </div>
              <div className="collapse" id="collapseSkill">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Biography;
