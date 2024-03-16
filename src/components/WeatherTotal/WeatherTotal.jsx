import PropTypes from "prop-types";
import React, { createContext, useState, useContext } from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./WeatherTotal.css";
import { DailyWeather } from "../DailyWeather";
import { TimeWrapper } from "../TimeWrapper";
import { WeatherIcon } from "../WeatherIcon";
import { ElementPartlyCloudy } from "../ElementPartlyCloudy";
import { ElementCloudyClearAt } from "../ElementCloudyClearAt";
import { ElementSunny } from "../ElementSunny";

import ReactDOM from 'react-dom';


export function WeatherTotal() {
  // according to the selectedDay, call weather API to change the following data
  // 1.humidity
  const [humidity, setHumidity] = useState([17, 12, 21, 15, 7, 9, 9]);
  // 2.weather icon
  const [weatherIcon, setWeatherIcon] = useState(["/outline-17.svg", "/outline-15.svg", "/outline-13.svg", "/outline-11.svg", "/union-4.svg", "/outline-9.svg", "/outline-7.svg"]);
  // 3.temperature svg
  const temperature = "/vector.svg";

  // choose the day index(selectDay)
  const [selectedDay, setSelectedDay] = useState(0);
  
  function updateDay(newDay) {
    setSelectedDay(newDay);

    // *********** To delete ***********
    // Now, to show the change, we random set above data
    for (let i = 0; i < 7; i++) {
      humidity[i] = Math.floor(Math.random() * 100);
      const tmp = [17, 15, 13, 7, 11, 9, 9]
      weatherIcon[i] = "/outline-" + tmp[Math.floor(Math.random() * 7)] + ".svg";
    }
    setHumidity([...humidity]);
    setWeatherIcon([...weatherIcon]);
    // *********** To delete ***********
  }




  return (
    <>
    <div className="weather-hourly">
      <div className="hourly-dock">
        <TimeWrapper />

        <div className="dock-section">
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[0]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[1]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[2]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[3]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[4]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[5]} />
          <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[6]} />
        </div>
        <div className="dock-section">
          <img className="graph" alt="Vector" src={temperature} />
        </div>
        <div className="dock-section">
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
        </div>
        <div className="dock-section">
          <div className="temp-text">{humidity[0]}%</div>
          <div className="temp-text">{humidity[1]}%</div>
          <div className="temp-text">{humidity[2]}%</div>
          <div className="temp-text">{humidity[3]}%</div>
          <div className="temp-text">{humidity[4]}%</div>
          <div className="temp-text">{humidity[5]}%</div>
          <div className="temp-text">{humidity[6]}%</div>
        </div>
      
      </div>
    </div>
    <DailyWeather setSelectedDay={updateDay} selectedDay={selectedDay}/>
    </>

  );
}
