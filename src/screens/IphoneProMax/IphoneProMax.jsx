import { ElementCloudyClearAt } from "../../components/ElementCloudyClearAt";
import { ElementHeavyRain } from "../../components/ElementHeavyRain";
import { ElementPartlyCloudy } from "../../components/ElementPartlyCloudy";
import { ElementPartlyCloudyWrapper } from "../../components/ElementPartlyCloudyWrapper";
import { ElementSunny } from "../../components/ElementSunny";
import { WeatherIcon } from "../../components/WeatherIcon";
import { DailyWeather } from "../../components/DailyWeather";
import { ConditionsBoxContainer} from "../../components/Conditions/ConditionsBoxContainer";
import { TimeWrapper } from "../../components/TimeWrapper";
import { WeatherTotal } from "../../components/WeatherTotal";
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
      
      {/*Second & Three section*/}
      <WeatherTotal />

      {/*Fourth section*/}
      <ConditionsBoxContainer />
      
    </div>
  );
};

