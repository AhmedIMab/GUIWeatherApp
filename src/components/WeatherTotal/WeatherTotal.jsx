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

export function WeatherTotal() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [airPollutionData, setAirPollutionData] = useState(null);
  const [lat, setLat] = useState(51.5085);
  const [lon, setLon] = useState(-0.1257);

  // current weather data
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  // forecast data
  const [forecastData, setForecastData] = useState(null);

  // hourly data weather icon
  const [lowest_temperature, set_lowest_temperature] = useState(["22", "25", "26", "23", "24", "27", "28"]);
  const [highest_temperature, set_highest_temperature] = useState(["25", "28", "29", "26", "27", "30", "31"]);

  // according to the selectedDay, call weather API to change the following data
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

  const fetchCurData = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a484704a1f7fd5d6f7fa69419cdbf252`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
      .then(response => {
        const weatherData = response.data;
        const { lon, lat } = weatherData.coord; // get longitude and latitude for air pollution data (doesn't take city as a parameter, as far as I know)
        return axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=a484704a1f7fd5d6f7fa69419cdbf252`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
          .then(response => {
            return { weatherData, airPollutionData: response.data };
          });
      })
      .then(({ weatherData, airPollutionData }) => {
        setWeatherData(weatherData);
        setAirPollutionData(airPollutionData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // function for changing the weather code to the icon
  const changeWeatherCodeToIcon = (weatherCode) => {
    for (let i = 0; i < weatherCode.length; i++) {
      if (weatherCode[i] === 0) {
        weatherCode[i] = '01d';
      }
      else if (weatherCode[i] === 1) {
        weatherCode[i] = '02d';
      }
      else if (weatherCode[i] === 2) {
        weatherCode[i] = '03d';
      }
      else if (weatherCode[i] === 3) {
        weatherCode[i] = '04d';
      }
      else if (weatherCode[i] === 45 || weatherCode[i] === 48) {
        weatherCode[i] = '50d';
      }
      else if (50 < weatherCode[i] < 66) {
        weatherCode[i] = '09d';
      }
      else if (70 < weatherCode[i] < 80) {
        weatherCode[i] = '13d';
      }
      else if (79 < weatherCode[i] < 90) {
        weatherCode[i] = '10d';
      }
      else if (90 < weatherCode[i] < 100) {
        weatherCode[i] = '11d';
      }
    }
    return weatherCode;
  };

  // fetch data for the next 5 days
  const fetchData = async () => {
    try {
      // 7 day weather forecast (hourly temperature and precipitation probability) and current is_day
      const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=is_day&hourly=temperature_2m,precipitation_probability,weather_code&&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe/London`);
      const dailyWeatherCode = changeWeatherCodeToIcon(weatherData.data.daily.weather_code);
      const hourlyWeatherCode = changeWeatherCodeToIcon(weatherData.data.hourly.weather_code);
      
      const forecastDataObjectTmp = {
        // daily
        dailyData: {
          maxTemp: weatherData.data.daily.temperature_2m_max,
          minTemp: weatherData.data.daily.temperature_2m_min,
          date: weatherData.data.daily.time,
          icon: dailyWeatherCode
        },
        hourlyData: {
          precipitationProbability: weatherData.data.hourly.precipitation_probability,
          temperature: weatherData.data.hourly.temperature_2m,
          date: weatherData.data.hourly.time,
          icon: hourlyWeatherCode
        }
      };
      setForecastDataObject(forecastDataObjectTmp);
      set_lowest_temperature(forecastDataObjectTmp.dailyData.minTemp);
      set_highest_temperature(forecastDataObjectTmp.dailyData.maxTemp);
      setWeatherIconDaily(forecastDataObjectTmp.dailyData.icon);
      setWeatherIcon(forecastDataObjectTmp.hourlyData.icon);
      // console.log(forecastDataObjectTmp.hourlyData.icon)
      // add is_day to the current weather data object
      const currentWeatherDataObject = {
        ...currentWeatherData,
        isDay: weatherData.data.current.is_day
      };
      setCurrentWeatherData(currentWeatherDataObject);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  function updateDay(newDay) {
    setSelectedDay(newDay);
    // if forecastDataObject is not null, then update the prop and weatherIcon
    if (forecastDataObject) {
      const currentHour = new Date().getHours();
      setProp(forecastDataObject.hourlyData.precipitationProbability.slice(selectedDay * 24 + currentHour, selectedDay * 24 + currentHour + 7));
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
