/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Symptom = (props) => {
  return (
    <div className={`symptom ${props.className}`}>
{/*
        <button className="text-wrapper">{props.className}</button>
*/}
        <div className={`text-wrapper ${props.className}`}>{props.name}</div>
    </div>
  );
};
