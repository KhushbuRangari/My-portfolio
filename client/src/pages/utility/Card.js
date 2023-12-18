import React from "react";

function card({title,imgSrc}) {
  return (
    <div className="card mx-3 mb-3">
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">
          <img src="/projects.jpg" alt="" />
        </p>
       
      </div>
    </div>
  );
}

export default card;
