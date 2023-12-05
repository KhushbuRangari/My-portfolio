// Layout.js
import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const [clicked, setClicked] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const navigate = useNavigate();

  const [color, setColor] = useColor("#000000");

  const handleToggleSidebar = () => {
    setToggleSidebar((toggle) => {
      return !toggle;
    });
  };

  console.log(color.hex, "selected color");

  const handleToggle = () => {
    setToggle((toggle) => {
      return !toggle;
    });
  };

  return (
    <>
     <div className={`container-fluid layout  `}>
        <div className="row" >
          <div className={`col-4 ${!toggleSidebar?"collapsed":""}`} >
            <main style={{ minHeight: "75vh", display: "flex" }}>
              <div
                className={`toggle-sidebar ${!toggleSidebar ? "toggled" : ""}`}
              >
                <div className={`btn2 ${!toggleSidebar ? "toggled-btn" : ""}`}>
                  <Link
                    to=""
                    className="btn4"
                    style={{ background: `${color.hex}` }}
                    onClick={handleToggleSidebar}
                  >
                    <i
                      class="fa-solid fa-arrow-left"
                      style={{ width: "90%", height: "70%" }}
                    ></i>
                  </Link>
                  <div className="sidebar-line "> </div>  
                </div>

                <div className="sidebar ">
                  <Sidebar setClicked={setClicked} selectedColor={color.hex} />
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
          <div className={`col-8 ${!toggleSidebar?"expand-main":""}`} >{children}</div>
        </div>
      </div> 


   
    </>
  );
}

export default Layout;
