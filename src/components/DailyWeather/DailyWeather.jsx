import PropTypes from "prop-types";
import React, { useState } from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./DailyWeather.css";

export const DailyWeather = ({
  classNames = ["day", "day", "day", "day", "day", "day", "day"],
  dates = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  today = new Date().getDay(),

  // Lowest temperature, highest temperature, weather icon ----> call API to change
  lowest_temperature,
  highest_temperature,
  weatherIconDaily,
  colorOnWrapperHasOutline,

  // choose Day
  setSelectedDay,
  selectedDay
}) => {
  const handleDayClick = (index) => {
    setSelectedDay(index);
  };
  
  return (
    <div className="weather-weekly">
      {classNames.map((item, index) => (
        
        <div className={`weekday ${item} ${selectedDay === index ? "selected" : ""} `} 
          key={index}
          onClick={() => handleDayClick(index)}>
          <div className="high-temp-text">High </div>
          <div className="high-temp">{Math.round(highest_temperature[index])}°</div>

          {/* Weather Icon */}
          <ColorOnWrapper
            className="sunny-img"
            color="on"
            outline={`http://openweathermap.org/img/w/${weatherIconDaily[index]}.png`} 
            hasOutline={colorOnWrapperHasOutline}
            outlineClassName="element-sunny-instance"
          />

          <div className="low-temp">{Math.round(lowest_temperature[index])}°</div>
          <div className="low-temp-text">Low</div>

          {/* weekday */}
          <div className={`weekday  ${selectedDay === index ? "selected" : ""} `}>{dates[(today + 6 + index) % 7]}</div>
        </div>
      ))}
    </div>
  );
};