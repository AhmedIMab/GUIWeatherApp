import PropTypes from "prop-types";
import React from "react";

export const WeatherIcon = ({ className, subtract = "/img/subtract-16.svg" }) => {
  return (
    <div className={`${className}`}>
      <img className="weathericon" alt="drop" src={subtract} />
    </div>
  );
};

WeatherIcon.propTypes = {
  subtract: PropTypes.string,
};
