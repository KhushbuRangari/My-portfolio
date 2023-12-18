import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
// import Biography from "./pages/Biography";
// import Portfolio from "./pages/Portfolio";
// import Projects from "./pages/Projects";
// import GitHubProfile from "./pages/GitHubProfile";
// import Sidebar from "./pages/Sidebar";

import { ColorPicker, useColor } from "react-color-palette";

function App() {
  const [color, setColor] = useColor("#dfabf1");
  const [toggle, setToggle] = useState(false);

  document.documentElement.style.setProperty('--main-color',color.hex);
  useEffect(()=>{},[])
  const handleToggle = () => {
    setToggle((toggle) => {
      return !toggle;
    });
  
  };
  return (
    <BrowserRouter>
      <button className="colorButton" onClick={handleToggle} style={{ zIndex: 2 }}>
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </button>

      {toggle ? (
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
            zIndex: 1, // Ensure color picker is rendered below the button
          }}
        >
          <div style={{ width: "250px",position:"sticky"}}>
            <ColorPicker
              hideInput={["rgb", "hsv"]}
              color={color}
              onChange={(v) => { setColor(v);
              }}
            />
          </div>
        </div>
      ) : null}

      <Routes>
        <Route path="/" element={<Layout color={color.hex} />} />

        <Route index element={<Homepage color={color.hex} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
