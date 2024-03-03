/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsMenu24Px = ({ color = "white", className }) => {
  return (
    <svg
      className={`icons-menu-24px ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconsMenu24Px.propTypes = {
  color: PropTypes.string,
};
