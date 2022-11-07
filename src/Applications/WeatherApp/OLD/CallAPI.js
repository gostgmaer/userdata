import React, { useEffect } from "react";
import { GET } from "./Network/network";

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
    const cityAPICall= async ()=>{
      const res = await GET()
    }
  }, [lat, lon, setWeather]);

  return <div></div>;
};

export default CallAPI;
