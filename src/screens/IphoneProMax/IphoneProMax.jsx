import { ElementCloudyClearAt } from "../../components/ElementCloudyClearAt";
import { ElementHeavyRain } from "../../components/ElementHeavyRain";
import { ElementPartlyCloudy } from "../../components/ElementPartlyCloudy";
import { ElementPartlyCloudyWrapper } from "../../components/ElementPartlyCloudyWrapper";
import { ElementSunny } from "../../components/ElementSunny";
import { WeatherIcon } from "../../components/WeatherIcon";
import { DailyWeather } from "../../components/DailyWeather";
import { ConditionsBoxContainer} from "../../components/Conditions/ConditionsBoxContainer";
import { TimeWrapper } from "../../components/TimeWrapper";
import "../../index.css";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      {/*First section*/}
      <div className="header">
        <div className="header-wrapper">
          <div className="location-wrapper">
            <div className="menu">
              <img className="icons-menu" src="/menuIcon.png" alt="menu icon"/>
            </div>
            <div className="location">London</div>
            <div className="location-icon" />
          </div>
          <div className="header-conditions-wrapper">
            <img className="weather-img" src="/sunny-cloudy.png" alt="weather img"/>
            <div className="side-wrapper">
              <div className="degree">25°</div>
              <div className="weather-condition">Sunny</div>
            </div>
          </div>
            
        </div>
        <img className="doctor-img" alt="Doc" src="/doc-icont2-2.png" />
      </div>
      
      {/*Second section*/}
      <div className="weather-hourly">
        <div className="hourly-dock">
          <TimeWrapper />

          <div className="dock-section">
            <ElementPartlyCloudy className="dock-img" color="on" outline="/outline-17.svg" />
            <ElementPartlyCloudy className="dock-img" color="on" outline="/outline-15.svg" />
            <ElementPartlyCloudy className="dock-img" color="on" outline="/outline-13.svg" />
            <ElementPartlyCloudy className="dock-img" color="on" outline="/outline-11.svg" />
            <ElementCloudyClearAt
                className="dock-img"
                color="on"
                img="/union-4.svg"
                union="/union-6.svg"
                union1="/union-2.svg"
                union2="/union.svg"
            />
            <ElementSunny className="dock-img" color="on" outline="/outline-9.svg" />
            <ElementSunny className="dock-img" color="on" outline="/outline-7.svg" />
          </div>
          <div className="dock-section">
            <img className="graph" alt="Vector" src="/vector.svg" />
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
            <div className="temp-text">17%</div>
            <div className="temp-text">12%</div>
            <div className="temp-text">21%</div>
            <div className="temp-text">15%</div>
            <div className="temp-text">7%</div>
            <div className="temp-text">9%</div>
            <div className="temp-text">9%</div>
          </div>
        </div>
      </div>
      
     <DailyWeather />

      {/*Fourth section*/}
      <ConditionsBoxContainer />
      
    </div>
  );
};

