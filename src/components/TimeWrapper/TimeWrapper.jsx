/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./style.css";
export const TimeWrapper = ({
  // create a list of class names, all are "times"
  classNames = ["time", "time", "time", "time", "time", "time", "time"],
  currentHour = new Date().getHours(),
  
}) => {
  return (
    // Loop
    <div className="dock-section">
      {classNames.map((item, index) => (
        
        <div className={`${item}`} key={index}>
          {String((currentHour + index) % 24).padStart(2, '0')}:00
        </div>
      ))}
    </div>
  );
};

TimeWrapper.propTypes = {
};
