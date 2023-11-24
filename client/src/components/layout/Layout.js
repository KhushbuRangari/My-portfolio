// Layout.js
import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function Layout({ children }) {
  const [clicked, setClicked] = useState("");
  const [toggle, setToggle] = useState(false);

  const [color, setColor] = useColor("#561ecb");

  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    console.log(toggle);
  };

  return (
    <>
      <main style={{ minHeight: "75vh", display: "flex" }}>
        <Sidebar setClicked={setClicked} selectedColor={color} />
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
                top: "20px",
                right: "10px",
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
        {clicked}
      </main>
    </>
  );
}

export default Layout;
