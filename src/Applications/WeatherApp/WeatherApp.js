import React, { useEffect, useState } from "react";
import SimpleHeading from "../../Components/ComponentBlock/SimpleHeading";
import SimpleDate from "./../../Components/ComponentBlock/SimpleDate";
import FetchCurrentLocation from "./FetchCurrentLocation";
import { GET } from "./Network/network.js";
import SearchLocation from "./SearchLocation";
import ShowWeather from "./ShowWeather";


const WeatherApp = () => {
  const [title] = useState("Simple Weather Application");

  const [param, setParam] = useState({});
  const [Weather, setWeather] = useState({});
const [city, setcity] = useState("Kolkata");
const [lat, setlat] = useState("null");
const [loon, setloon] = useState("null");
const [Status, setStatus] = useState("");

  useEffect(() => {
    const res = async () => {
        const data = await GET("weather", "", `q=${city}&lon=''`,'','');
        setWeather(data)
        console.log(Weather);
      };
      res()
  },[]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 

  return (
    <div>
      <React.Fragment>
        <SimpleHeading title={title}></SimpleHeading>
        <div className=" p-1 rounded-0 card text-center">
          <FetchCurrentLocation lat={lat} setlat={setlat} loon={loon} setloon={setloon}></FetchCurrentLocation>
          <SearchLocation city={city} setcity={setcity} Weather={Weather} setWeather={setWeather} ></SearchLocation>
          <ShowWeather Weather={Weather} ></ShowWeather>
        </div>
        <SimpleDate></SimpleDate>
      </React.Fragment>
    </div>
  );
};

export default WeatherApp;
