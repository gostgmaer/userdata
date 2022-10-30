import React, { useReducer, useState } from "react";
import "./Styles.scss";
const initialTemp = 10;
let initialColor = "neutral";
const reducer = (state, action) => {

  switch (action) {
    case "increase":
        state = state+1
        colors(state);
      return state

    case "decrease":
        state = state-1
        colors(state);
      return state

    default:
      return state;
  }
 
};
let colors =(state)=>{
    if (state < 15) {
        initialColor = "cold";
      }else if (state>24 ) {
        initialColor = "hot";
      }else if (state<25 ) {
        initialColor = "neutral";
      }
  }
function TempratureControl() {
  const [temp, tempDispatch] = useReducer(reducer, initialTemp);
  const [color, setColor] = useState("cold");

  const date = new Date().toDateString();
  return (
    <div className=" col-4  m-auto">
      <div className=" m-5 rounded-3 card text-center">
        <div className="card-header bg-light">
          Temprature Control With Color
        </div>
        <div className="card-body">
          <p className={`${initialColor} card p-4`} id="content">
            <span className="">{temp} &deg; C</span>
          </p>
          <button
            onClick={() => tempDispatch("increase")}
            className="btn btn-primary m-1"
          >
            +
          </button>
          <button
            onClick={() => tempDispatch("decrease")}
            className="btn btn-warning m-1"
          >
            -
          </button>
        </div>
        <div className="card-footer text-muted">{date}</div>
      </div>
    </div>
  );
}

export default TempratureControl;
