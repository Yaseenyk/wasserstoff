import React, { useEffect, useState } from "react";
import { circlesData,circlesTabletData } from "./CircleData";
import './Circle.scss';
import { useView } from "../../context/ViewContext";
const CirclePositions = () => {
  const[circleData,setCircleData]=useState([])
  const {view}= useView();
  useEffect(()=>{
    console.log(view)
    if(view==='tablet'){
      setCircleData(circlesTabletData)
    }else if(view==='desktop'){
      setCircleData(circlesData)
    }
  },[view])
  return (
    <>
      {circleData.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            top: circle.top,
            left: circle.left,
            backgroundColor: circle.backgroundColor,
            width: circle.width,
            height: circle.height,
            position: "absolute",
            borderRadius: "50%",
            background: circle.style.background,
            boxShadow: circle.style.boxShadow,
          }}
        >
          {circle.content && (
            <div
              className="circle-content"
              style={{
                color:"white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // gap: "2px",
              }}
            >
              {circle.content.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CirclePositions;
