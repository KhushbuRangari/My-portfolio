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

  console.log(toggleSidebar, "togglesidebar");

  const handleToggle = () => {
    setToggle((toggle) => {
      return !toggle;
    });
  };

  return (
    <>
      <div className={`container-fluid layout  `}>
        <div className="row ">
          <div className={`col-md-2 ${toggleSidebar ? "" : "hidden-column"}`}>
            dd
          </div>
          <div className="col-2">ss</div>
          <div className={`col-8 ${!toggleSidebar ? "expand-main" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
