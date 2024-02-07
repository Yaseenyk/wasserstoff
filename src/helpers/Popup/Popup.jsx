import React from "react";
import "./Popup.scss";

const Popup = () => {
  const data = [
    { name: "Jan" },
    { name: "Feb" },
    { name: "Mar" },
    { name: "Apr" },
    { name: "May" },
    { name: "Jun" },
    { name: "Jul" },
    { name: "Aug" },
    { name: "Sep" },
    { name: "Oct" },
    { name: "Nov" },
    { name: "Dec" },
  ];

  return (
    <>
      <div className="popupDiv">
        <span>Sales Figures</span>
        <div className="DataText">
          {[
            { color: "purple", label: "Sales" },
            { color: "yellow", label: "Users" },
            { color: "red", label: "Product" },
            { color: "blue", label: "Team" },
          ].map(({ color, label }) => (
            <span key={label}>
              <span className={`dot ${color}`}></span>
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="charts">
        <div className="top-bar">
          <div className="numbers">
            {[1000, 800, 600, 400, 200, 0].map((num, index) => (
              <span key={index}>{num}</span>
            ))}
          </div>
          <div className="lines">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="line"></div>
            ))}
            <div className="circle firstCircle"><span>$23647</span><span>August</span></div>
            <div className="circle secondCircle">$23457</div>
            <div className="circle thirdCircle"></div>
            <div className="circle forthCircle"></div>
            <div className="circle fifthCircle"></div>
            <div className="circle sixthCircle"></div>
            <div className="circle seventhCircle"></div>
            <div className="circle eightCircle"></div>
            <div className="circle nineCircle"></div>
            <div className="circle tenCircle">$27632</div>
            <div className="circle elevenCircle"></div>
            <div className="circle tweleCircle"></div>
            <div className="circle thirteenCircle"></div>
            <div className="circle fourteenCircle"></div>
          </div>
        </div>
        <div className="bottom-bar">
          {data.map(({ name }, index) => (
            <span key={index}>{name}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popup;
