import React from "react";
import { useState, useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state > 0) {
        return state - 1;
      } else {
        return initialState;
      }
      
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className=" m-5">
        {" "}
        <p>Counter Value is: {count} </p>{" "}
      </div>
      <div className=" ">
        <button
          type="button"
          onClick={() => dispatch("increase")}
          className="btn btn-primary m-1"
        >
          Increase{" "}
        </button>
        <button
          type="button"
          onClick={() => dispatch("reset")}
          className="btn btn-danger m-1"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => dispatch("decrease")}
          className="btn btn-secondary m-1"
        >
          Decress
        </button>
      </div>
    </div>
  );
}

export default Counter;
