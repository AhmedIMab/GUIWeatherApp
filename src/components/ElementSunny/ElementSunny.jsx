/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementSunny = ({ color, className, outline = "/img/outline-36.svg" }) => {
  return (
    <div className={`element-sunny ${className}`}>
      <img className="outline-2" alt="Outline" src={color === "off" ? "/img/outline-29.svg" : outline} />
    </div>
  );
};

ElementSunny.propTypes = {
  color: PropTypes.oneOf(["off", "on"]),
  outline: PropTypes.string,
};
