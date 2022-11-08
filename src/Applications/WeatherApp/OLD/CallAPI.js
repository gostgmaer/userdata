import React, { useEffect } from "react";
import { GET } from "./Network/network";

const CallAPI = ({ lat,
  setlat,
  lon,
  setlon, setWeather }) => {
  useEffect(() => {
    
    const currentWeatherres = async () => {
      const data = await GET("weather", "", `lon=${lon}&lat=${lat}`, "", "");
      setWeather(data);
    };
    if (lat && lon) {
      currentWeatherres();
    }
    
  }, [lat, lon]);



  return <div></div>;
};

export default CallAPI;
