/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Symptom = (props) => {
  return (
    <div className={`symptom ${props.className}`}>
        {/*This happens because onClick={SymptomClicked(props)} directly invokes SymptomClicked(props) and
        assigns its return value as the event handler, rather than assigning
        SymptomClicked itself as the event handler and so the function is called instantly .*/}
        <button className="text-wrapper-symptom-button" onClick={() => SymptomClicked(props)}>{props.name}</button>
    </div>
  );
};

function SymptomClicked (Symptom) {
    console.log("Well clicked " + Symptom.className);
}
