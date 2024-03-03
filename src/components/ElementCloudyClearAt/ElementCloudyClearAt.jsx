/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementCloudyClearAt = ({
  color,
  className,
  union = "/img/union-11.svg",
  img = "/img/union-10.svg",
  union1 = "/img/union-9.svg",
  union2 = "/img/union-8.svg",
}) => {
  return (
    <div className={`element-cloudy-clear-at ${color} ${className}`}>
      {color === "off" && <img className="img" alt="Outline" src="/img/outline-34.svg" />}

      {color === "on" && (
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="union" alt="Union" src={union} />
              <img className="union-2" alt="Union" src={img} />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="union" alt="Union" src={union1} />
              <img className="union-2" alt="Union" src={union2} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ElementCloudyClearAt.propTypes = {
  color: PropTypes.oneOf(["off", "on"]),
  union: PropTypes.string,
  img: PropTypes.string,
  union1: PropTypes.string,
  union2: PropTypes.string,
};
