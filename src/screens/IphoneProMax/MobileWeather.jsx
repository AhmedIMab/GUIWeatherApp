import { ConditionsBoxContainer} from "../../components/Conditions/ConditionsBoxContainer";
import { WeatherTotal } from "../../components/WeatherTotal";
import "../../index.css";
// import { useEffect, useState } from "react";

export const MobileWeather = ({ forecastData, currentWeatherData, lat, lon }) => {
  // check if the data is loaded
  if (!forecastData || !currentWeatherData || !lat || !lon) {
    return <div>Loading...</div>;
  }

  if (currentWeatherData) {
    if (currentWeatherData.city === undefined || currentWeatherData.icon === undefined) {
      return <div>Loading...</div>;
    }
  }

  return (
    <div className="iphone-pro-max">
      {/*First section*/}
      <div className="header">
        <div className="header-wrapper">
          <div className="location-wrapper">
            <div className="menu">
              <img className="icons-menu" src="/menuIcon.png" alt="menu icon"/>
            </div>
              <div className="location">{currentWeatherData.city}</div>
            <div className="location-icon" />
          </div>
          <div className="header-conditions-wrapper">
            <img
              src={`http://openweathermap.org/img/w/${currentWeatherData.icon}.png`}
              alt="weather icon"
              style={{width: 105, height: 105, marginTop: 10}} 
            />
            <div className="side-wrapper">
              <div className="degree" style={{fontSize: 60}} >{currentWeatherData.temperature}°</div>
              <div className="weather-condition" style={{fontSize: 20}}>{currentWeatherData.description}</div>
            </div>
          </div>
            
        </div>
        <img className="doctor-img" alt="Doc" src="/doc-icont2-2.png" />
      </div>
      
      {/*Second & Three section*/}
      <WeatherTotal forecastData={forecastData} currentWeatherData={currentWeatherData} />

      {/*Fourth section*/}
      <ConditionsBoxContainer forecastData={forecastData} currentWeatherData={currentWeatherData} />
    </div>
  );
};

