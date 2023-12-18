import React from "react";
import { SkillsData } from "./SkillsData";

function Skills() {
  return (
    <div>
      {SkillsData.map((item, index) => (
        <div className="progress mb-3" style={{height: "50px"}} key={index}>
          <div
            className="progress-bar text-start fw-bold"
            role="progressbar"
            style={{ width: `${item.percentage}` }}
            aria-valuenow={item.percentage}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {item.title} - {item.percentage}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
