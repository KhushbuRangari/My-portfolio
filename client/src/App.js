import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Biography from "./pages/Biography";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Sidebar />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
