/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementHeavyRain = ({ className, outlineClassName, outline = "/img/outline-37.svg" }) => {
  return (
    <div className={`element-heavy-rain ${className}`}>
      <img className={`outline-4 ${outlineClassName}`} alt="Outline" src={outline} />
    </div>
  );
};

ElementHeavyRain.propTypes = {
  outline: PropTypes.string,
};
