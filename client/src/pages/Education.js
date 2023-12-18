import React from 'react'
import { EducationData } from './EducationData'

function Education() {
  return (
    <div className="education">
    {
    EducationData.map((item,index)=>{
          return (
              <div class="card card-body mb-3">
              <p className="">{item.UniversityName} ({item.YearFrom} - {item.YearTo})</p> 
              <p className="fw-bold">{item.Specialization}</p>
              <p className="fst-normal">{item.Description}</p>
            </div>
          )
      })
    }
  </div>
  )
}

export default Education