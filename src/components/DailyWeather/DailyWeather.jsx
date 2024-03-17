import PropTypes from "prop-types";
import React, { useState } from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./DailyWeather.css";

export const DailyWeather = ({
  classNames = ["day", "day", "day", "day", "day", "day", "day"],
  dates = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  today = new Date().getDay(),

  // Lowest temperature, highest temperature ----> call API to change
  lowest_temperature,
  highest_temperature,
  
  // weather icon ----> call API to change weather icon
  colorOnWrapperOutline = ["/outline-27.svg", "/outline-25.svg", "/outline-23.svg", 
      "/outline-1.svg", "/outline-19.svg", "/outline-5.svg", "/outline-21.svg"],
    
  colorOnWrapperHasOutline,

  // choose Day
  setSelectedDay,
  selectedDay
}) => {
  const handleDayClick = (index) => {
    setSelectedDay(index);
    console.log("Selected day: ", selectedDay, dates[(today - 1 + index) % 7])
  };
  
  return (
    // Loop
    <div className="weather-weekly">
      {classNames.map((item, index) => (
        
        <div className={`weekday ${item} ${selectedDay === index ? "selected" : ""} `} 
          key={index}
          onClick={() => handleDayClick(index)}>
          <div className="high-temp-text">High</div>
          <div className="high-temp">{highest_temperature[index]}°</div>
          <ColorOnWrapper
            className="sunny-img"
            color="on"
            outline={colorOnWrapperOutline[index]}
            hasOutline={colorOnWrapperHasOutline}
            outlineClassName="element-sunny-instance"
          />

          <div className="low-temp">{lowest_temperature[index]}°</div>
          <div className="low-temp-text">Low</div>
          <div className={`weekday  ${selectedDay === index ? "selected" : ""} `}>{dates[(today - 1 + index) % 7]}</div>
        </div>
      ))}
    </div>
  );
};