import React from "react";

function DecorLines({color,isHovering}) {
  return (
    <div className={`container-fluid  ${isHovering?"hovered":""}`}>
      <div className="row  ">
        <div className="decorLine d-flex d-flex-row justify-content-center">
          <div className="small p-1 my-4" style={{borderLeft:isHovering?`2px solid ${color}`:"2px solid black"}}></div>
          <div className="long p-1" style={{borderLeft:isHovering?`2px solid ${color}`:"2px solid black"}}></div>
          <div className="small p-1 my-4" style={{borderLeft:isHovering?`2px solid ${color}`:"2px solid black"}}></div>
        </div>
      </div>
    </div>
  );
}

export default DecorLines;
