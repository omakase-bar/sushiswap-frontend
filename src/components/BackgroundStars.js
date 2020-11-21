import React from "react";
import "../assets/css/stars.css";

const BackgroundStars = ({ children }) => {
  return (
    <>
      <div className="stars-container">
        <div className="stars-00"></div>
        <div className="stars-01"></div>
        <div className="stars-02"></div>
        {children}
      </div>
    </>
  );
};

export default BackgroundStars;
