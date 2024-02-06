import React from "react";
import { circlesData } from "./CircleData";
import './Circle.scss';
const CirclePositions = () => {
  return (
    <>
      {circlesData.map((circle, index) => (
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
