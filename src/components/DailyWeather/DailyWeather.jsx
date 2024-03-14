import PropTypes from "prop-types";
import React from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
export const DailyWeather = ({
  classNames = ["day", "day", "day", "day", "day", "day", "day"],
  dates = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  today = new Date().getDay(),

  // Lowest temperature, highest temperature ----> call API to change
  lowest_temperature= ["22°", "25°", "26°", "23°", "24°",  "27°", "28°"],
  highest_temperature= ["25°", "28°", "29°", "26°", "27°",  "30°", "31°"],
  
  // weather icon ----> call API to change weather icon
  colorOnWrapperOutline = ["/outline-27.svg", "/outline-25.svg", "/outline-23.svg", 
      "/outline-1.svg", "/outline-19.svg", "/outline-5.svg", "/outline-21.svg"],
}) => {
  return (
    // Loop
    <div className="weather-weekly">
      {classNames.map((item, index) => (
        
        <div className={`weekday ${item}`} key={index}>
          <div className="high-temp-text">High</div>
          <div className="high-temp">{highest_temperature[index]}</div>
          
          <ColorOnWrapper
            className="thirty-two-sunny"
            color="on"
            outline={colorOnWrapperOutline[index]}
            outlineClassName="element-sunny-instance"
          />

          <div className="low-temp">{lowest_temperature[index]}</div>
          <div className="low-temp-text">Low</div>
          <div className="weekday">{dates[(today - 1 + index) % 7]}</div>
        </div>
      ))}
    </div>
  );
};