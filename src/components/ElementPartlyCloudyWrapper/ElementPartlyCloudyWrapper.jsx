/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementPartlyCloudyWrapper = ({
  className,
  overlapGroupClassName,
  outlineClassName,
  outline = "/img/outline-38.svg",
}) => {
  return (
    <div className={`element-partly-cloudy-wrapper ${className}`}>
      <div className={`outline-wrapper ${overlapGroupClassName}`}>
        <img className={`outline-5 ${outlineClassName}`} alt="Outline" src={outline} />
      </div>
    </div>
  );
};

ElementPartlyCloudyWrapper.propTypes = {
  outline: PropTypes.string,
};
