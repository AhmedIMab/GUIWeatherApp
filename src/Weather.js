import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('London');
    const [weatherData, setWeatherData] = useState(null);
    const [airPollutionData, setAirPollutionData] = useState(null);
    const fetchData = async () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={YOUR_API_KEY}`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
            .then(response => {
                const weatherData = response.data;
                const { lon, lat } = weatherData.coord; // get longitude and latitude for air pollution data (doesn't take city as a parameter, as far as I know)
                return axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid={YOUR_API_KEY}`) // replace {YOUR_API_KEY} with your OpenWeatherMap API key
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
    useEffect(() => {
        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
            />
            <button type="submit">Get Weather</button>
        </form>
        {weatherData ? (
        <>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like : {weatherData.main.feels_like}°C</p>
            <p>Humidity : {weatherData.main.humidity}%</p>
            <p>Pressure : {weatherData.main.pressure}</p>
            <p>Wind Speed : {weatherData.wind.speed}m/s</p>
            <p>AQI : {airPollutionData.list[0].main.aqi}</p>
        </>
        ) : (
        <p>Loading weather data...</p>
        )}
    </div>
    );
};

export default Weather;
