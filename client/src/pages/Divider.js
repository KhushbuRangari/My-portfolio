import React from 'react'
import { Link } from 'react-router-dom'

function Divider() {

  return (
    <>
       <span className="arrow d-flex d-flex-row">
        <div className="divider"></div>
        <Link to="#top" className="upArrow" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
          <i
            className="fa-solid fa-arrow-up"
            style={{ width: "90%", height: "70%" }}
          ></i>
        </Link>
      </span></>
  )
}

export default Divider