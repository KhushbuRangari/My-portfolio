import React from "react";
import Card from "./utility/Card";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      {" "}
      <div id="section4" className="container base projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="row">
          <div className="card-group">
            <Link to={"https://portfoliokhushbu.netlify.app"}  target={"_blank"}>
              <Card title={"Portfolio"} imgSrc={"/projects.jpg"} />
            </Link>
            <Link to={"https://countryinformations.netlify.app"}  target={"_blank"}>
              <Card title={"Country Info"} imgSrc={"/projects.jpg"} />
            </Link>
            <Link to={"https://spiffy-klepon-223031.netlify.app"}  target={"_blank"}>
              <Card title={"Ecommerce"} imgSrc={"/projects.jpg"} />
            </Link>
            <Link to={"https://phenomenal-dieffenbachia-eb8d60.netlify.app"}  target={"_blank"}>
              <Card title={"HeroVired Blog"} imgSrc={"/projects.jpg"} />
            </Link>
          </div>
          <div className="card-group">
          <Link to={"https://enchanting-chebakia-163413.netlify.app"}  target={"_blank"}>
              <Card title={"Famous Quotes"} imgSrc={"/projects.jpg"} />
            </Link>
            <Link to={"https://spectacular-sfogliatella-5167cd.netlify.app"}  target={"_blank"}>
              <Card title={"Omunim Website"} imgSrc={"/projects.jpg"} />
            </Link>
            <Link to={"https://weather-cityy.netlify.app"}  target={"_blank"}>
              <Card title={"City Weather"} imgSrc={"/projects.jpg"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
