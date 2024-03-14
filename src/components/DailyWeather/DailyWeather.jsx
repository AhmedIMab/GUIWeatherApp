import PropTypes from "prop-types";
import React from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
export const DailyWeather = ({
  className,
  colorOnWrapperOutline,
  day,
  lowTemp,
  highTemp,
  colorOnWrapperHasOutline,
}) => {
  return (
    <div className={`weekday ${className}`}>
      <div className="high-temp-text">High</div>
      <div className="high-temp">{highTemp}</div>
      <ColorOnWrapper
        className="sunny-img"
        color="on"
        hasOutline={colorOnWrapperHasOutline}
        outline={colorOnWrapperOutline}
        outlineClassName="element-sunny-instance"
      />
      <div className="low-temp">{lowTemp}</div>
      <div className="low-temp-text">Low</div>
      <div className="weekday">{day}</div>
    </div>
  );
};

DailyWeather.propTypes = {
  colorOnWrapperOutline: PropTypes.string,
  day: PropTypes.string,
  lowTemp: PropTypes.string,
  highTemp: PropTypes.string,
  colorOnWrapperHasOutline: PropTypes.bool,
};
