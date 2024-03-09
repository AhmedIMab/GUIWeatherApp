/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, {useState} from "react";
import "./style.css";

export const Condition = (props) => {
    // The showDataBox variable is what is the current state
    // The setShowDataBox is set to false because that is the useState parameter
    const [showDataBox, setShowDataBox] = useState(false);

    function conditionClicked (Symptom) {
        setShowDataBox(true);
    }

    return (
        <div className={`condition ${props.className}`}>
            {/*This happens because onClick={SymptomClicked(props)} directly invokes SymptomClicked(props) and
            assigns its return value as the event handler, rather than assigning
            SymptomClicked itself as the event handler and so the function is called instantly .*/}
            <button className="text-wrapper-symptom-button" onClick={() => conditionClicked(props)}>{props.Name}</button>
            {showDataBox === true && <SymptomDataBox Name={props.Name} className={props.className} />}
        </div>
    );
};

const SymptomDataBox = (props) => {
    const [symptoms, risks] = ConditionXSymptoms(props)

    return (
        <div className="condition-symptoms-data-box">
            <div className="symptom-data-heading">
                <img className="symptom-checker" src="/SymptomIcon.png" alt="an icon displaying a magnifying glass"/>
                {/* Here add api call for determining condition*/}
                <h2>{props.Name} - <span className="condition-severity">High</span></h2>
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
                    <h2 className="symptomrisk-title">Risks:</h2>
                    {risks.map((risk,index) =>(
                        <div className="symptomriskX-text">
                            <img src="/red-circle.svg" alt=""/>
                            <p>{risk}</p>
                        </div>
                    ))}
                </div>
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
        const symptoms = ['', '', ''];
        const risks = ['']
        return ([symptoms, risks])
    }
    else if (condition === "AQI") {
        const symptoms = ['Shortness of breath', 'Wheezing', 'Chest Tightness   ']
        const risks = ['Strokes']
        return ([symptoms, risks])
    }
}
