/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({ className, subtract = "/img/subtract-16.svg" }) => {
  return (
    <div className={`group ${className}`}>
      <img className="subtract" alt="Subtract" src={subtract} />
    </div>
  );
};

Group.propTypes = {
  subtract: PropTypes.string,
};
