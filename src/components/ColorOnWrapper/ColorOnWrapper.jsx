import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ColorOnWrapper = ({
  color,
  className,
  outlineClassName,
  outline = "/img/outline-30.svg",
  hasOutline = true,
}) => {
  return (
    <div className={`color-on-wrapper ${className}`}>
      {hasOutline && (
        <img
          className={`outline-3 ${outlineClassName}`}
          alt="Outline"
          src={color === "off" ? "/img/outline-29.svg" : outline}
        />
      )}
    </div>
  );
};

ColorOnWrapper.propTypes = {
  color: PropTypes.oneOf(["off", "on"]),
  outline: PropTypes.string,
  hasOutline: PropTypes.bool,
};
