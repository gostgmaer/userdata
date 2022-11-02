import React, { useEffect, useState } from "react";

const SimpleTime = () => {
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

  return <React.Fragment>
    
    <span className=' text-end col pe-5'> {time.toLocaleTimeString()}</span>
   </React.Fragment>;
};

export default SimpleTime;
