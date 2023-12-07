// Layout.js
import React, { useState, useEffect } from "react";
// import Sidebar from "../../pages/Sidebar";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useNavigate } from "react-router-dom";
import { SideBarData } from "../../pages/SideBarData";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const StyledLi = styled.li`
  list-style: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.selectedColor};
    color: white;
  }
`;

const StyledLink = styled(ScrollLink)`
  color: gray;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background-color: ${(props) => props.selectedColor};
    color: white;
  }

  &.active {
    background-color: ${(props) => props.selectedColor};
    color: white;
  }
`;
function Layout({ children }) {
  // const [clicked, setClicked] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  // const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [color, setColor] = useColor("#000000");

  
  const handleChange = (value) => {

    console.log(value,"value");
    const sectionId = value.replace("/", ""); 
    const targetSection = sectionId; 
    const sectionElement = document.getElementById(targetSection);
  
    if (sectionElement) {
      sectionElement.scrollIntoView();
      console.log(`Scrolling to ${targetSection}`);
    } else {
      console.error(`Element with id ${targetSection} not found`);
    }
  };
  const handleToggleSidebar = () => {
    setToggleSidebar((toggle) => {
      return !toggle;
    });
  };

  const handleToggle = () => {
    setToggle((toggle) => {
      return !toggle;
    });
  };

  // *********************************
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    const sectionHeight = 500;
    const activeSection = Math.floor(currentPosition / sectionHeight) + 1;
    setActiveLink(`/section${activeSection}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run this effect only once on component mount

  // ************************************
  return (
    <>
      <div className={`container-fluid layout  `}>
        <div className="row">
          <div className={`col-4 ${!toggleSidebar ? "collapsed" : ""}`}>
            <main style={{ minHeight: "75vh", display: "flex" }}>
              <div
                className={`toggle-sidebar ${!toggleSidebar ? "toggled" : ""}`}
              >
                <div className={`btn2 ${!toggleSidebar ? "toggled-btn" : ""}`}>
                  <button
                    to=""
                    className="btn4"
                    style={{ background: `${color.hex}` }}
                    onClick={handleToggleSidebar}
                  >
                    <i
                      className="fa-solid fa-arrow-left"
                      style={{ width: "90%", height: "70%" }}
                    ></i>
                  </button>
                  <div className="sidebar-line "> </div>
                </div>

                <div className="sidebar ">
                  {/* <Sidebar setClicked={setClicked} selectedColor={color.hex} activeLink={activeLink} /> */}
                  <div className="sidebar">
                    <h3
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: "700",
                        fontSize: "40px",
                        color: color.hex,
                        textDecoration: "underline",
                        textAlign: "center",
                      }}
                    >
                      Khushbu
                    </h3>
                    <ul className="sidebar-list">
                      {SideBarData.map((item, key) => (
                        <StyledLi key={key} selectedColor={color.hex}>
                          <StyledLink
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={`/homepage/${item.link}`} // Make sure this matches the ID format
                            onClick={() => handleChange(item.link)}
                            className={`${
                              `/homepage/${item.link}` === activeLink
                                ? "active"
                                : ""
                            }`}
                          >
                            {item.title}
                          </StyledLink>
                        </StyledLi>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button className="colorButton" onClick={handleToggle}>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </button>

              {toggle ? (
                <>
                  <div
                    className="toggle"
                    style={{
                      display: "block",
                      position: "absolute",
                      top: "30px",
                      right: "20px",
                      marginLeft: "200px",
                      padding: "20px",
                      backgroundColor: color,
                    }}
                  >
                    <div width={100} height={100}>
                      {" "}
                      <ColorPicker
                        hideInput={["rgb", "hsv"]}
                        color={color}
                        onChange={setColor}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="toggle"
                    style={{
                      display: "none",
                      transition: "opacity 0.5s ease-out",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      marginLeft: "200px",
                      padding: "20px",
                      backgroundColor: color,
                    }}
                  >
                    <div width={100} height={100}>
                      {" "}
                      <ColorPicker
                        hideInput={["rgb", "hsv"]}
                        color={color}
                        onChange={setColor}
                      />
                    </div>
                  </div>
                </>
              )}
            </main>
          </div>
          <div className={`col-8 ${!toggleSidebar ? "expand-main" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
