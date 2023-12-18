import React from "react";
import { ExperienceData } from "./ExperienceData";

function Experience() {
  return (
    <div className="experience">
      {
        ExperienceData.map((item,index)=>{
            return (
                <div class="card card-body mb-3">
                <p className="">{item.CompanyName} ({item.YearFrom} - {item.YearTo})</p> 
                <p className="fw-bold">{item.Position}</p>
                <p className="fst-normal">{item.JobDescription}</p>
              </div>
            )
        })
      }
    </div>
  );
}

export default Experience;
