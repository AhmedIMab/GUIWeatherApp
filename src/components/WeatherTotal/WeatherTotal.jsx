import PropTypes from "prop-types";
import React, { createContext, useState, useContext, useEffect } from "react";
import { ColorOnWrapper } from "../ColorOnWrapper";
import "./WeatherTotal.css";
import { DailyWeather } from "../DailyWeather";
import { TimeWrapper } from "../TimeWrapper";
import { WeatherIcon } from "../WeatherIcon";
import { ElementPartlyCloudy } from "../ElementPartlyCloudy";
import { ElementCloudyClearAt } from "../ElementCloudyClearAt";
import { ElementSunny } from "../ElementSunny";
import ReactDOM from 'react-dom';
import axios from 'axios';

export function WeatherTotal({ forecastData, currentWeatherData }) {

  // hourly data weather icon
  const [lowest_temperature, set_lowest_temperature] = useState(["22", "25", "26", "23", "24", "27", "28"]);
  const [highest_temperature, set_highest_temperature] = useState(["25", "28", "29", "26", "27", "30", "31"]);

  // 1.prop
  const [prop, setProp] = useState([17, 12, 21, 15, 7, 9, 9]);
  // 2.weather icon
  const [weatherIcon, setWeatherIcon] = useState(["09d", "09d", "09d", "09d", "09d", "09d", "09d"]);
  const [weatherIconDaily, setWeatherIconDaily] = useState(["09d", "09d", "09d", "09d", "09d", "09d", "09d"]);

  // 3.temperature svg
  const temperature = "/vector.svg";

  // choose the day index(selectDay)
  const [selectedDay, setSelectedDay] = useState(0);

  // forecastDataObject
  const [forecastDataObject, setForecastDataObject] = useState(null);
  
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  // fetch data for the next 5 days
  const setData = async () => {
    setForecastDataObject(forecastData);
    set_lowest_temperature(forecastData.dailyData.minTemp);
    set_highest_temperature(forecastData.dailyData.maxTemp);
    setWeatherIconDaily(forecastData.dailyData.icon);
    setWeatherIcon(forecastData.hourlyData.icon);
  };

  useEffect(() => {
    setData();
  }, [forecastData, currentWeatherData]);

  function updateDay(newDay) {
    setSelectedDay(newDay);
    // if forecastDataObject is not null, then update the prop and weatherIcon
    if (forecastDataObject) {
      const currentHour = new Date().getHours();
      setProp(forecastDataObject.hourlyData.precipitationProbability.slice(newDay * 24 + currentHour, newDay * 24 + currentHour + 7));
    } else {
      console.log('forecastDataObject is null');
    }
  }

  return (
    <>
      {/* hourly weather ---- section 3  */}
      <div className="weather-hourly">
        <div className="hourly-dock">

          {/* current hour*/}
          <TimeWrapper />

          {/* weather icon */}
          <div className="dock-section">
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[selectedDay * 24 + currentHour]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 1) <= 167 ? (selectedDay * 24 + currentHour + 1) : 167]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 2) <= 167 ? (selectedDay * 24 + currentHour + 2) : 167]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 3) <= 167 ? (selectedDay * 24 + currentHour + 3) : 167]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 4) <= 167 ? (selectedDay * 24 + currentHour + 4) : 167]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 5) <= 167 ? (selectedDay * 24 + currentHour + 5) : 167]} />
            <ElementPartlyCloudy className="dock-img" color="on" outline={weatherIcon[(selectedDay * 24 + currentHour + 6) <= 167 ? (selectedDay * 24 + currentHour + 6) : 167]} />
          </div>

          {/* rainfall graph --- TODO */}
          <div className="dock-section">
            <img className="graph" alt="Vector" src={temperature} />
          </div>

          {/* rainfall logo */}
          <div className="dock-section">
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
            <WeatherIcon className="icon-wrapper" subtract="/subtract.svg" />
          </div>

          {/* Rainfall probability */}
          <div className="dock-section">
            <div className="temp-text">{prop[0]}%</div>
            <div className="temp-text">{prop[1] == null ? prop[0] : prop[1]}%</div>
            <div className="temp-text">{prop[2] == null ? prop[0] : prop[2]}%</div>
            <div className="temp-text">{prop[3] == null ? prop[0] : prop[3]}%</div>
            <div className="temp-text">{prop[4] == null ? prop[0] : prop[4]}%</div>
            <div className="temp-text">{prop[5] == null ? prop[0] : prop[5]}%</div>
            <div className="temp-text">{prop[6] == null ? prop[0] : prop[6]}%</div>
          </div>

        </div>
      </div>

      {/* Daily weather ------ section 4*/}
      <DailyWeather setSelectedDay={updateDay}
        selectedDay={selectedDay}
        lowest_temperature={lowest_temperature}
        highest_temperature={highest_temperature}
        weatherIconDaily={weatherIconDaily} />
    </>

  );
}
