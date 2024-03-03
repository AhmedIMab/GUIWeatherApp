/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementPartlyCloudy = ({ color, className, outline = "/img/outline-32.svg" }) => {
  return (
    <div className={`element-partly-cloudy ${className}`}>
      <img className="outline" alt="Outline" src={color === "on" ? outline : "/img/outline-33.svg"} />
    </div>
  );
};

ElementPartlyCloudy.propTypes = {
  color: PropTypes.oneOf(["off", "on"]),
  outline: PropTypes.string,
};
