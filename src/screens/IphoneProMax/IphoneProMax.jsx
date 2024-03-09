import React from "react";
import { ElementCloudyClearAt } from "../../components/ElementCloudyClearAt";
import { ElementHeavyRain } from "../../components/ElementHeavyRain";
import { ElementPartlyCloudy } from "../../components/ElementPartlyCloudy";
import { ElementPartlyCloudyWrapper } from "../../components/ElementPartlyCloudyWrapper";
import { ElementSunny } from "../../components/ElementSunny";
import { Group } from "../../components/Group";
import { GroupWrapper } from "../../components/GroupWrapper";
import { Condition } from "../../components/Symptoms";
import { Clouds } from "../../icons/Clouds";
import { IconsMenu24Px } from "../../icons/IconsMenu24Px";
import "../../index.css";

export const IphoneProMax = () => {
  return (
      <div className="iphone-pro-max">
        <div className="overlap-3">
          <div className="overlap-3">
            <div className="overlap-4">
              <div className="text-wrapper-8">London</div>
              <div className="container">
                <div className="state-layer">
                  <IconsMenu24Px className="icons-menu" color="white" />
                </div>
              </div>
              <div className="text-wrapper-9">25°</div>
            </div>
            <div className="group-3" />
            <div className="element-2">
              <div className="overlap-group-2">
                <div className="element-3" />
                <img className="element-4" alt="Element" src="/1.svg" />
                <Clouds className="clouds-instance" />
              </div>
            </div>
          </div>
          <div className="text-wrapper-10">Sunny</div>
        </div>
        <div className="overlap-5">
          <div className="frame">
            <div className="text-wrapper-11">11:00</div>
          </div>
          <div className="group-4">
            <img className="vector" alt="Vector" src="/vector.svg" />
            <div className="text-wrapper-12">11:00</div>
            <div className="text-wrapper-13">12:00</div>
            <div className="text-wrapper-14">13:00</div>
            <div className="text-wrapper-15">14:00</div>
            <div className="text-wrapper-16">15:00</div>
            <div className="text-wrapper-17">16:00</div>
            <div className="text-wrapper-18">17:00</div>
            <ElementPartlyCloudy className="thirty-two-partly-cloudy" color="on" outline="/outline-17.svg" />
            <ElementPartlyCloudy className="element-partly-cloudy-instance" color="on" outline="/outline-15.svg" />
            <ElementPartlyCloudy className="thirty-two-partly-cloudy-instance" color="on" outline="/outline-13.svg" />
            <ElementPartlyCloudy className="design-component-instance-node" color="on" outline="/outline-11.svg" />
            <ElementCloudyClearAt
                className="thirty-two-cloudy-clear-at-times"
                color="on"
                img="/union-4.svg"
                union="/union-6.svg"
                union1="/union-2.svg"
                union2="/union.svg"
            />
            <ElementSunny className="thirty-two-sunny-instance" color="on" outline="/outline-9.svg" />
            <ElementSunny className="element-sunny-2" color="on" outline="/outline-7.svg" />
            <div className="text-wrapper-19">17%</div>
            <div className="text-wrapper-20">12%</div>
            <div className="text-wrapper-21">21%</div>
            <div className="text-wrapper-22">15%</div>
            <div className="text-wrapper-23">7%</div>
            <div className="text-wrapper-24">9%</div>
            <div className="subtract-wrapper">
              <img className="subtract-2" alt="Subtract" src="/subtract.svg" />
            </div>
            <div className="text-wrapper-25">9%</div>
            <Group className="group-172" subtract="/subtract.svg" />
            <Group className="group-instance" subtract="/subtract-16.svg" />
            <Group className="group-172-instance" subtract="/subtract.svg" />
            <Group className="group-5" subtract="/subtract-16.svg" />
            <Group className="group-6" subtract="/subtract.svg" />
            <Group className="group-7" subtract="/subtract.svg" />
          </div>
        </div>
        <GroupWrapper className="group-157" colorOnWrapperOutline="/outline-27.svg" />
        <GroupWrapper
            className="group-157-instance"
            colorOnWrapperOutline="/outline-25.svg"
            text="TUE"
            text1="17°"
            text2="23°"
        />
        <GroupWrapper
            className="group-8"
            colorOnWrapperOutline="/outline-23.svg"
            text="WED"
            text1="20°"
            text2="25°"
        />
        <GroupWrapper
            className="group-9"
            colorOnWrapperOutline="/outline-21.svg"
            text="SUN"
            text1="15°"
            text2="22°"
        />
        <div className="overlap-6">
          <div className="group-10">
            <div className="MON-2">SAT</div>
            <div className="element-5">13°</div>
            <div className="element-6">19°</div>
            <div className="text-wrapper-26">High</div>
            <div className="text-wrapper-27">Low</div>
          </div>
          <ElementHeavyRain
              className="thirty-two-heavy-rain-32-heavy-rain-color3"
              outline="/outline-5.svg"
              outlineClassName="element-heavy-rain-instance"
          />
        </div>
        <div className="overlap-7">
          <div className="group-10">
            <div className="MON-2">THU</div>
            <div className="element-5">16°</div>
            <div className="element-6">24°</div>
            <div className="text-wrapper-26">High</div>
            <div className="text-wrapper-27">Low</div>
          </div>
          <ElementPartlyCloudyWrapper
              className="thirty-two-partly-cloudy-color3"
              outline="/outline-1.svg"
              outlineClassName="element-partly-cloudy-2"
              overlapGroupClassName="thirty-two-partly-cloudy-color3-instance"
          />
        </div>
        <GroupWrapper
            className="group-11"
            colorOnWrapperOutline="/outline-19.svg"
            text="FRI"
            text1="21°"
            text2="29°"
        />
        <img className="doc" alt="Doc" src="/doc-icont2-2.png" />
        <div className="symptoms-box-container">
          <Condition Name="Humidity" className="humidity" />
          <Condition Name="Pollen" className="pollen" />
          <Condition Name="AQI" className="aqi" />
          <Condition Name="UVI" className="uvi" />
        </div>
    </div>
  );
};
