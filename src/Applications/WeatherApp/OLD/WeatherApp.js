import React, { useEffect, useState } from "react";
import SimpleHeading from "../../../Components/ComponentBlock/SimpleHeading";
import SimpleDate from "../../../Components/ComponentBlock/SimpleDate";
import CallAPI from "./CallAPI";
import FetchCurrentLocation from "./FetchCurrentLocation";
import { GET } from "./Network/network";
import SearchLocation from "./SearchLocation";
import ShowWeather from "./ShowWeather";

const WeatherApp = () => {
  const [title] = useState("Simple Weather Application");

  const [param, setParam] = useState({});
  const [Weather, setWeather] = useState({});
  const [city, setcity] = useState("Kolkata");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [lat, setlat] = useState(null);
  const [lon, setlon] = useState(null);
  const [Status, setStatus] = useState("");

  useEffect(() => {
    // const res = async () => {
    //   const data = await GET("weather", "", `lon=${loon}&lat=${lat}`, "", "");
    //   setWeather(data);
    // };
    // res();
  }, []);
  console.log(Weather);
  try {
    return (
      <div>
        <React.Fragment>
          <SimpleHeading title={title}></SimpleHeading>
          <div className=" p-1 rounded-0 card text-center">
            <FetchCurrentLocation
              lat={lat}
              setlat={setlat}
              lon={lon}
              setlon={setlon}
            ></FetchCurrentLocation>
            <SearchLocation
              city={city}
              setcity={setcity}
              lat={lat}
              setlat={setlat}
              lon={lon}
              setlon={setlon}
              Weather={Weather}
              setWeather={setWeather}
            ></SearchLocation>
            <CallAPI
              city={city}
              lat={lat}
              lon={lon} 
              setWeather={setWeather} options={options} setOptions={setOptions} isLoading ={isLoading} setIsLoading={setIsLoading}
            ></CallAPI>
            <ShowWeather Weather={Weather}></ShowWeather>
          </div>
          <SimpleDate></SimpleDate>
        </React.Fragment>
      </div>
    );
  } catch (error) {}
};

export default WeatherApp;
