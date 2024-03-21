import { ConditionsBoxContainer } from "./components/Conditions/ConditionsBoxContainer";
import { WeatherTotal } from "./components/WeatherTotal";
import "./index.css";
import { useState } from "react";

export const MobileWeather = ({
  forecastData,
  currentWeatherData,
  lat,
  lon,
  handleInputChange,
  handleSubmit,
  city,
}) => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  // check if the data is loaded
  if (
    !forecastData ||
    !currentWeatherData ||
    !lat ||
    !lon
  ) {
    return <div>Loading...</div>;
  }

  if (currentWeatherData) {
    if (
      currentWeatherData.city === undefined ||
      currentWeatherData.icon === undefined
    ) {
      return <div>Loading...</div>;
    }
  }

  // Function to toggle search bar visibility
  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <div className="mobile-weather">
      {/*First section*/}
      <div className="header">
        <div className="header-wrapper">
          <div className="location-wrapper">
            <div className="location-icon" onClick={toggleSearchBar} />
            {!isSearchBarVisible && (
              <div className="location">{currentWeatherData.city}</div>
            )}
            {isSearchBarVisible && (
              <div>
                <form onSubmit={(e) => handleSubmit(e, setSearchBarVisible)}>
                  <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Search for a city"
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <img src="/icons-search.svg" alt="Search" />
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="header-conditions-wrapper">
            <img
              src={`http://openweathermap.org/img/w/${currentWeatherData.icon}.png`}
              alt="weather icon"
              style={{ width: 105, height: 105, marginTop: 10 }}
            />
            <div className="side-wrapper">
              <div className="degree" style={{ fontSize: 60 }}>
                {currentWeatherData.temperature}°
              </div>
              <div className="weather-condition" style={{ fontSize: 20 }}>
                {currentWeatherData.description}
              </div>
            </div>
          </div>
        </div>
        <img className="doctor-img" alt="Doc" src="/doc-icont2-2.png" />
      </div>

      {/*Second & Third section*/}
      <WeatherTotal
        forecastData={forecastData}
        currentWeatherData={currentWeatherData}
      />

      {/*Fourth section*/}
      <ConditionsBoxContainer
        forecastData={forecastData}
        currentWeatherData={currentWeatherData}
      />
    </div>
  );
};