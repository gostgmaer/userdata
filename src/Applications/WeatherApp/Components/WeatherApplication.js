import React, { useCallback, useEffect, useState } from "react";

import SimpleDate from "../../../Components/ComponentBlock/SimpleDate";
import SimpleHeading from "../../../Components/ComponentBlock/SimpleHeading";
import { GET } from "./api";
import Search from "./Search";
import WeatherCard from "./WeatherCard";






const WeatherApplication = () => {
  const [title] = useState("Simple Weather Application");
  const [Weather, setWeather] = useState({});
  const [city, setcity] = useState("");
  const [lat, setlat] = useState("null");
  const [lon, setlon] = useState("null");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((latloon) => {
      setlat(latloon.coords.latitude);
      setlon(latloon.coords.longitude);
    });
    const loadCurrentWeather = async () => {
      const res = await GET("weather", "", `lon=${lon}&lat=${lat}`, "", "");
      setWeather(res);
    };
    loadCurrentWeather();
  
    
      
    
  
  }, [ lat, lon]);

 


  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <Search Weather={Weather} setWeather={setWeather} city={city} setcity={setcity}  ></Search>
      <WeatherCard  Weather={Weather}></WeatherCard>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default WeatherApplication;
