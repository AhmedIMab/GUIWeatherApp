/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./style.css";
export const GroupWrapper = ({
  className,
  colorOnWrapperOutline = "/img/outline-31.svg",
  text = "MON",
  text1 = "22°",
  text2 = "27°",
  colorOnWrapperHasOutline,
}) => {
  return (
    <div className={`group-wrapper ${className}`}>
      <ColorOnWrapper
        className="thirty-two-sunny"
        color="on"
        hasOutline={colorOnWrapperHasOutline}
        outline={colorOnWrapperOutline}
        outlineClassName="element-sunny-instance"
      />
      <div className="MON">{text}</div>
      <div className="element">{text1}</div>
      <div className="div">{text2}</div>
      <div className="text-wrapper-2">High</div>
      <div className="text-wrapper-3">Low</div>
    </div>
  );
};

GroupWrapper.propTypes = {
  colorOnWrapperOutline: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  colorOnWrapperHasOutline: PropTypes.bool,
};
