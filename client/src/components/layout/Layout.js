// Layout.js
import React, { useState, useEffect } from "react";
import "react-color-palette/css";
import { SideBarData } from "../../pages/SideBarData";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";


const StyledLi = styled.li`
  list-style: none;
  transition: background-color 0.3s ease;

  " &:hover": {
    background-color: ${(props) => props.x};
    color: white;
  }
`;

const StyledLink = styled(ScrollLink)`
  color: gray;
  text-decoration: none;

  "&:hover": {
    text-decoration: none;
    background-color: ${(props) => props.x};
    color: white;
  }

  &.active {
    background-color: ${(props) => props.x};
    color: white;
  }
`;

function Layout({ children, color }) {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  // const [isHovering, setIsHovering] = useState(false);

  
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  const handleChange = (value) => {
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
          <div className={` ${!toggleSidebar ? "collapsedd" : "col-sm-4 .d-none .d-sm-block"}`}>
            <div >
              <div
                className={`toggle-sidebar ${!toggleSidebar ? "toggled" : ""}`}
              >
                <div className={`btn2 ${!toggleSidebar ? "toggled-btn" : ""}`} style={{ position:"fixed"}}>
                  <button
                    to=""
                    className="btn4"
                    style={{ background: `${color}` }}
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
                  <div className="sidebar" style={{ position:"fixed"}}>
                    <h3
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: "700",
                        fontSize: "40px",
                        color: `${color}`,
                        textDecoration: "underline",
                        textAlign: "center",
                       
                      }}
                    >
                      Khushbu
                    </h3>
                    <ul className="sidebar-list">
                      {SideBarData.map((item,key) => (
                        <StyledLi key={key} >
                          <StyledLink
                          
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to={`/homepage/${item.link}`}
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
            </div>
          </div>
          <div className={`col-sm-8 ${!toggleSidebar ? "expand-main" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
