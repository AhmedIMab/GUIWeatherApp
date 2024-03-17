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
  const [forecastData, setForecastData] = useState(null); // all data combined

  // each data weathre
  const[lowest_temperature, set_lowest_temperature] = useState(["22", "25", "26", "23", "24",  "27", "28"]);
  const[highest_temperature, set_highest_temperature] = useState(["25", "28", "29", "26", "27",  "30", "31"]);

  // according to the selectedDay, call weather API to change the following data
  // 1.prop
  const [prop, setProp] = useState([17, 12, 21, 15, 7, 9, 9]);
  // 2.weather icon
  const [weatherIcon, setWeatherIcon] = useState(["/outline-17.svg", "/outline-15.svg", "/outline-13.svg", "/outline-11.svg", "/union-4.svg", "/outline-9.svg", "/outline-7.svg"]);
  // 3.temperature svg
  const temperature = "/vector.svg";

  // choose the day index(selectDay)
  const [selectedDay, setSelectedDay] = useState(0);

  // forecastDataObject
  const [forecastDataObject, setForecastDataObject] = useState(null);

  const fetchCurData = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a484704a1f7fd5d6f7fa69419cdbf252`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
      .then(response => {
        const weatherData = response.data;
        const { lon, lat } = weatherData.coord; // get longitude and latitude for air pollution data (doesn't take city as a parameter, as far as I know)
        fetchData();
        return axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=a484704a1f7fd5d6f7fa69419cdbf252`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
          .then(response => {
            return { weatherData, airPollutionData: response.data };
          });
      })
      .then(({ weatherData, airPollutionData }) => {
        console.log(weatherData); // Weather data
        console.log(airPollutionData); // Air pollution data
        setWeatherData(weatherData);
        setAirPollutionData(airPollutionData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // fetch data for the next 5 days
  const fetchData = async () => {
    try {
      // 7 day weather forecast (hourly temperature and precipitation probability) and current is_day
      const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=is_day&hourly=temperature_2m,precipitation_probability&&daily=temperature_2m_max,temperature_2m_min&timezone=Europe/London`);
      const forecastDataObjectTmp = {
        // daily
        dailyData: {
          maxTemp: weatherData.data.daily.temperature_2m_max,
          minTemp: weatherData.data.daily.temperature_2m_min,
          date: weatherData.data.daily.time
        },
        hourlyData: {
          precipitationProbability: weatherData.data.hourly.precipitation_probability,
          temperature: weatherData.data.hourly.temperature_2m,
          date: weatherData.data.hourly.time
        }
      };
      setForecastDataObject(forecastDataObjectTmp);
      set_lowest_temperature(forecastDataObjectTmp.dailyData.minTemp);
      set_highest_temperature(forecastDataObjectTmp.dailyData.maxTemp);

      console.log('forecast data object', forecastDataObject);
      // setForecastData(forecastDataObject);
      // add is_day to the current weather data object
      const currentWeatherDataObject = {
        ...currentWeatherData,
        isDay: weatherData.data.current.is_day
      };
      console.log('current weather data object', currentWeatherDataObject);
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
    console.log(forecastDataObject)
    // if forecastDataObject is not null, then update the prop and weatherIcon
    if (forecastDataObject) {
      // 获取当前小时数
      const currentHour = new Date().getHours();
      setProp(forecastDataObject.hourlyData.precipitationProbability.slice(selectedDay * 24 + currentHour, selectedDay * 24 + currentHour + 7));
    } else {
      console.log('forecastDataObject is null');
    }


    // // *********** To delete ***********
    // // Now, to show the change, we random set above data
    // for (let i = 0; i < 7; i++) {
    //   prop[i] = Math.floor(Math.random() * 100);
    //   const tmp = [17, 15, 13, 7, 11, 9, 9]
    //   weatherIcon[i] = "/outline-" + tmp[Math.floor(Math.random() * 7)] + ".svg";
    // }
    // setprop([...prop]);
    // setWeatherIcon([...weatherIcon]);
    // // *********** To delete ***********
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
            <div className="temp-text">{prop[0]}%</div>
            <div className="temp-text">{prop[1]}%</div>
            <div className="temp-text">{prop[2]}%</div>
            <div className="temp-text">{prop[3]}%</div>
            <div className="temp-text">{prop[4]}%</div>
            <div className="temp-text">{prop[5]}%</div>
            <div className="temp-text">{prop[6]}%</div>
          </div>

        </div>
      </div>
    <DailyWeather setSelectedDay={updateDay} selectedDay={selectedDay} lowest_temperature={lowest_temperature} highest_temperature={highest_temperature}/>
    </>

  );
}