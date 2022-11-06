import React, { useEffect, useState } from "react";
import CallAPI from "./CallAPI";
import { GET } from "./Network/network";

export const FetchCurrentLocation = ({
  lat,
  setlat,
  loon,
  setloon,
  Weather,
  setWeather,
}) => {
  //     const [lat, setlat] = useState("null");
  // const [loon, setloon] = useState("null");
  useEffect(() => {
    
      navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position);
        setlat(position.coords.latitude);
        setloon(position.coords.longitude);})
       
     
   
  }, []);

  return <div>
    
    <CallAPI lat={lat}  loon={loon} Weather={Weather} setWeather={setWeather} ></CallAPI>
  </div>;
};

export default FetchCurrentLocation;
