import React, {useState} from "react";
import "./style.css";

export const ConditionsBoxContainer = () => {
    // Thx conditionSelected variable is what is the current state
    // The setSelectedCondition is set to null because that is the useState parameter
    // By changing the setSelectedCondition we can track the correct condition to open the box for
    const [conditionSelected, setSelectedCondition] = useState(null);

    function conditionClicked(condition) {
        setSelectedCondition(condition);
    }

    function closeBox() {
        setSelectedCondition(null);
    }

    return (
        <div className="conditions-box-container">
            <Condition Name="Humidity" className="humidity" onClick={() => conditionClicked({Name: "Humidity", className: "humidity"})}/>
            <Condition Name="Pollen" className="pollen" onClick={() => conditionClicked({Name: "Pollen", className: "pollen"})} />
            <Condition Name="AQI" className="aqi" onClick={() => conditionClicked({Name: "AQI", className: "aqi"})}/>
            <Condition Name="UVI" className="uvi" onClick={() => conditionClicked({Name: "UVI", className: "uvi"})} />

            {conditionSelected && <ConditionDataBox Name={conditionSelected.Name} className={conditionSelected.className} onClick={closeBox}/>
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
    const [symptoms, risks] = ConditionXSymptoms(props)

    return (
        <div className="symptoms-data-box">
            <div className="symptom-data-heading">
                <img className="symptom-checker" src="/SymptomIcon.png" alt="an icon displaying a magnifying glass"/>
                {/* Here add api call for determining condition*/}
                <h2>{props.Name} - <span className="condition-severity">High</span></h2>
                <button className="close-button" onClick={props.onClick}></button>
            </div>

            <div className="symptoms-risks-area">
                <div className="symptoms-data">
                    <h2 className="symptomrisk-title">Symptoms:</h2>
                    {/* The map function will create a symptom for each one in the array*/}
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

        </div>
    )
}

function ConditionXSymptoms(props) {
    let condition = props.Name;
    if (condition === "Humidity") {
        const symptoms = ['Overheating - Excessive Sweating', 'Heat rashes', 'Dehydration']
        const risks = ['Heart Attack']
        return ([symptoms, risks])
    }
    else if (condition === "Pollen") {
        const symptoms = ['Sneezing', 'Blocked Nose', 'Red/Watery Eyes']
        const risks = ['Asthma']
        return ([symptoms, risks])
    }
    else if (condition === "UVI") {
        const symptoms = ['Bumps', 'Red Blotchy Areas', 'Fever'];
        const risks = ['Skin Cancer']
        return ([symptoms, risks])
    }
    else if (condition === "AQI") {
        const symptoms = ['Shortness of breath', 'Wheezing', 'Chest Tightness   ']
        const risks = ['Strokes']
        return ([symptoms, risks])
    }
}


const ConditionGraphBox = (props) => {

}
