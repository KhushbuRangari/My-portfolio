import React from "react";
import Layout from "../components/layout/Layout";

function Homepage() {
  return (
    <Layout>
      <div className=" homepage d-flex flex-row ">
        <div className="effect">
          <div className="background"></div>
          <img src="/myPic.jpg" width={"250px"} alt="" />
        </div>

        <p className="data">
          <h1>WEBSITE DEVELOPER</h1>
          <hr
            style={{ width: "150px", height: "1px", border: "2px solid black" }}
          />
          Professional Full Stack Developer based on Pune. Developing my skills
          and building a road-map for future.
        </p>
      </div>
    </Layout>
  );
}

export default Homepage;
