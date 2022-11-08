import React, { useEffect } from "react";
import { GET,GETCITY } from "./Network/network";

const CallAPI = ({ lat, lon, setWeather }) => {
  // console.log(lat,loon);
  useEffect(() => {
    const currentWeatherres = async () => {
      const data = await GET("weather", "", `lon=${lon}&lat=${lat}`, "", "");
      setWeather(data);
    };
    if (lat && lon) {
      currentWeatherres();
    }
   
  }, [lat, lon, setWeather]);



  return <div></div>;
};

export default CallAPI;
