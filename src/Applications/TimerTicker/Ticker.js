import React, { useEffect, useState } from "react";

function Ticker() {
  const [time, setTime] = useState(new Date());
  function tick() {
    setTime(new Date());
  }
  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  
  return <div >{time.toLocaleTimeString()}</div>;
}

export default Ticker;
