import React from "react";
import "./style.css";
export const TimeWrapper = ({
  // create a list of class names, all are "times"
  classNames = ["time", "time", "time", "time", "time", "time", "time"],
  currentWeatherData,
}) => {
  return (
    // Loop
    <div className="dock-section">
      {classNames.map((item, index) => (
        <div className={`${item}`} key={index}>
          {String((currentWeatherData.time + index) % 24).padStart(2, '0')}:00
        </div>
      ))}
    </div>
  );
};

TimeWrapper.propTypes = {
};
