import React, {useState} from "react";
import ConditionsChart from "./ConditionsChart.js";
import "./style.css";


export const ConditionsBoxContainer = ({ forecastData, currentWeatherData }) => {
    // The conditionSelected variable is what is the current state
    // The setSelectedCondition is set to null because that is the useState parameter
    // By changing the setSelectedCondition we can track the correct condition to open the box for
    const [conditionSelected, setSelectedCondition] = useState(null);

    // Here box: 1 is the main symptoms box
    // box: 2 is the graph condition
    const [currentBox, setBox] = useState(1)

    function changeBox () {
        if (currentBox === 1) {
            setBox(2)
        }
        else {
            setBox(1)
        }
    }

    let arrow;
    if (currentBox === 1) {
        arrow = "arrow-right"
    }
    else {
        arrow = "arrow-left"
    }

    function conditionClicked(condition) {
        setSelectedCondition(condition);
    }

    function closeBox() {
        setSelectedCondition(null);
        /* Also make sure the next time it's opened, it'll open the symptoms first */
        setBox(1)
    }

    return (
        <div className="conditions-box-container">
            {/* This will display the 4 condition buttons if nothing has been selected */}
            {conditionSelected === null &&
                (<div>
                    <Condition Name="Humidity" className="humidity" onClick={() => conditionClicked({Name: "Humidity", className: "humidity"})}/>
                    <Condition Name="Pollen" className="pollen" onClick={() => conditionClicked({Name: "Pollen", className: "pollen"})} />
                    <Condition Name="AQI" className="aqi" onClick={() => conditionClicked({Name: "AQI", className: "aqi"})}/>
                    <Condition Name="UVI" className="uvi" onClick={() => conditionClicked({Name: "UVI", className: "uvi"})} />
                </div>)
            }

            {/* The ternary operator below mimics an if, else if, else statement
                If a condition has been selected and the current box is 1, the ? will evaluate and render the
                ConditionDataBox
                Else if a condition has been selected and the current box is 2, it will render ConditionGraphBox
                Else nothing will happen
            */}
            {(conditionSelected && currentBox === 1) ? (
                <ConditionDataBox Name={conditionSelected.Name}
                                  className={conditionSelected.className}
                                  onClick={closeBox}
                                  switchButton={changeBox}
                                  arrow={arrow}
                                  currentWeatherData={currentWeatherData}
                                  forecastData={forecastData}/>
            ) : (conditionSelected && currentBox === 2) ? (
                <ConditionGraphBox Name={conditionSelected.Name}
                                   className={conditionSelected.className}
                                   onClick={closeBox}
                                   switchButton={changeBox}
                                   arrow={arrow}
                                   currentWeatherData={currentWeatherData}
                                   forecastData={forecastData}/>
            ) : null
            }

        </div>
    );
};

const Condition = (props) => {
    return (
        <div className={`condition ${props.className}`}>
            {/*This happens because onClick={SymptomClicked(props)} directly invokes SymptomClicked(props) and
            assigns its return value as the event handler, rather than assigning
            SymptomClicked itself as the event handler and so the function is called instantly .*/}
            <button className="text-wrapper-symptom-button" onClick={() => props.onClick(props.Name)}>{props.Name}</button>
        </div>
    );
};

const ConditionDataBox = (props) => {
    const [symptoms, risks, levelValue, levelState] = ConditionXSymptoms(props)
    let color = "black";

    if (levelState === "High") {
        color = "red";
    }
    else if (levelState === "Moderate") {
        color = "orange";
    }
    else if (levelState === "Low") {
        color = "green";
    }

    return (
        <div className="symptoms-data-box">
            <div className="symptom-data-heading">
                <img className="symptom-checker" src="/SymptomIcon.png" alt="an icon displaying a magnifying glass"/>
                <h2>{props.Name} - <span className="condition-severity" style={{ color: color}}>{levelValue} ({levelState})</span> </h2>
                <button className="close-button" onClick={props.onClick}></button>
            </div>

            <div className="symptoms-risks-area">
                <div className="symptoms-data">
                    <h2 className="symptomrisk-title">Symptoms:</h2>
                    {/* The map function will create a symptom for each one in the array */}
                    {symptoms.map((symptom,index) =>(
                        <div className="symptomriskX-text">
                            <img src="/green-circle.svg" alt=""/>
                            <p>{symptom}</p>
                        </div>
                    ))}
                </div>
                <div className="risks-data">
                    <h2 className="symptomrisk-title risk-title">Risks:</h2>
                    {risks.map((risk,index) =>(
                        <div className="symptomriskX-text">
                            <img src="/red-circle.svg" alt=""/>
                            <p>{risk}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="page-control-image">
                <img src="/Page%20Control.png" alt=""/>
            </div>
            <button className={props.arrow} onClick={props.switchButton}></button>
        </div>
    )
}

function ConditionXSymptoms(props) {
    let condition = props.Name;
    // https://iaq.works/humidity/indoor-humidity-level-why-is-the-40-60-range-ideal/#:~:text=When%20your%20home's%20humidity%20falls,experience%20freezing%20temperatures%20and%20snowfall.
    // Low humidity: < 40%
    // High humidity: > 60%
    if (condition === "Humidity") {
        let condition_level = props.currentWeatherData.humidity;
        console.log(condition_level);
        if (condition_level < 40) {
            // Low
            const symptoms = ['Dry Skin', 'Bloody nose', 'Scratchy Throat']
            const risks = ['Allergic Reactions']
            return ([symptoms, risks, condition_level, "Low"])
        }
        else if (condition_level >= 40 && condition_level <= 60) {
            const symptoms = ['Dry Skin', 'Excessive Sweating', 'Dehydration'];
            const risks = ['Asthma'];
            return ([symptoms, risks, condition_level, "Moderate"])
        }
        else {
            // High
            const symptoms = ['Overheating - Excessive Sweating', 'Heat rashes', 'Dehydration']
            const risks = ['Heart Attack']
            return ([symptoms, risks, condition_level, "High"])
        }

    }
    else if (condition === "Pollen") {
        // When pollen is added, uncomment
        // let condition_level = props.currentWeatherData.pollen;
        // console.log(condition_level);
        const symptoms = ['Sneezing', 'Blocked Nose', 'Red/Watery Eyes']
        const risks = ['Asthma']
        return ([symptoms, risks, 0, "Undetermined"])
    }
    else if (condition === "UVI") {
        let condition_level = props.currentWeatherData.uvIndex;
        let condition_state = "Undetermined";
        // console.log(condition_level);
        if (condition_level >= 5) {
            condition_state = "High";
        }
        else if (condition_level < 5){
            condition_state = "Low";
        }
        const symptoms = ['Bumps', 'Red Blotchy Areas', 'Fever'];
        const risks = ['Skin Cancer']
        return ([symptoms, risks, condition_level, condition_state])
    }
    else if (condition === "AQI") {
        let condition_level = props.currentWeatherData.aqi;
        let condition_state = "Undetermined";
        // Determined level here:
        // https://openweathermap.org/api/air-pollution
        if (condition_level >= 4) {
            condition_state = "High";
        }
        else if (condition_level === 3) {
            condition_state = "Moderate";
        }
        else if (condition_level <= 5){
            condition_state = "Low";
        }
        const symptoms = ['Shortness of breath', 'Wheezing', 'Chest Tightness   ']
        const risks = ['Strokes']
        return ([symptoms, risks, condition_level, condition_state])
    }
}


const ConditionGraphBox = (props) => {
    return (
        <div className="symptoms-data-box">
            <div className="conditions-data-heading">
                {/* Here add API call for determining condition*/}
                <h2>Future {props.Name}</h2>
                <button className="close-button" onClick={props.onClick}></button>
            </div>
            <ConditionsChart Name={props.Name}
                             className={props.className}/>
            <button className={props.arrow} onClick={props.switchButton}></button>
        </div>
    )
}
