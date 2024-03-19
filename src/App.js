import React from "react";
import Weather from "./Weather";
import { MobileWeather } from "./screens/IphoneProMax";
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
    // location
    const [city, setCity] = useState('London');
    const [lat, setLat] = useState('51.5072');
    const [lon, setLon] = useState('0.1276');
    // current weather data
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    // forecast data
    const [forecastData, setForecastData] = useState(null);

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

    // fetch data for real-time weather, air pollution, and UV index
    const fetchCurrentData = async () => {
        try {
            // fetch weather data for a city (default: London), and get longitude and latitude for other API calls
            const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a484704a1f7fd5d6f7fa69419cdbf252`);
            const { lat, lon } = weatherData.data.coord; // get longitude and latitude for air pollution data (doesn't take city as a parameter, as far as I know)
            // fetch air pollution data for the same location
            const airPollutionData = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=a484704a1f7fd5d6f7fa69419cdbf252`);
            // fetch UV index data for the same location
            const UVIndexData = await axios.get(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=a484704a1f7fd5d6f7fa69419cdbf252`);
            setLat(lat);
            setLon(lon);
            const weatherDataObject = {
                city: weatherData.data.name,
                temperature: Math.round(weatherData.data.main.temp),
                description: weatherData.data.weather[0].description,
                icon: weatherData.data.weather[0].icon,
                humidity: weatherData.data.main.humidity,
                aqi: airPollutionData.data.list[0].main.aqi,
                uvIndex: UVIndexData.data.value
            };
            setCurrentWeatherData(weatherDataObject);
        } catch(error) {
            console.error(error);
        }
    };

    // fetch data for the next 5 days
    const fetchData = async () => {
        try {
            // 7 day weather forecast (hourly temperature and precipitation probability) and current is_day
            const weatherData = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=is_day&hourly=temperature_2m,precipitation_probability,weather_code&&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe/London`);
            console.log('weather data weather code', weatherData.data.daily.weather_code);
            // change weather code to open weather map icon
            const dailyWeatherCode = changeWeatherCodeToIcon(weatherData.data.daily.weather_code);
            const hourlyWeatherCode = changeWeatherCodeToIcon(weatherData.data.hourly.weather_code);
            // create an object for the forecast data
            const forecastDataObject = {
                // daily
                dailyData : {
                    maxTemp: weatherData.data.daily.temperature_2m_max,
                    minTemp: weatherData.data.daily.temperature_2m_min,
                    date: weatherData.data.daily.time,
                    icon: dailyWeatherCode
                },
                hourlyData : {
                    precipitationProbability: weatherData.data.hourly.precipitation_probability,
                    temperature: weatherData.data.hourly.temperature_2m,
                    date: weatherData.data.hourly.time,
                    icon: hourlyWeatherCode
                }
            };
            console.log('forecast data object', forecastDataObject);
            setForecastData(forecastDataObject);
            // add is_day to the current weather data object
            const currentWeatherDataObject = {
                ...currentWeatherData,
                isDay: weatherData.data.current.is_day
            };
            console.log('current weather data object', currentWeatherDataObject);
            setCurrentWeatherData(currentWeatherDataObject);
        }
        catch(error){
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCurrentData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (lat && lon) {
            fetchData();
        }
    }, [lat, lon]); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      <MobileWeather forecastData={forecastData} currentWeatherData={currentWeatherData} />
      {/* show the icon */}
      { currentWeatherData ? <img src={`http://openweathermap.org/img/w/${currentWeatherData.icon}.png`} alt="weather icon" /> : null }
    </div>
  );
};

export default App;
