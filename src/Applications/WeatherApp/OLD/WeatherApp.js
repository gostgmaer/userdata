import React, { useEffect, useState } from "react";
import SimpleHeading from "../../../Components/ComponentBlock/SimpleHeading";
import SimpleDate from "../../../Components/ComponentBlock/SimpleDate";
import CallAPI from "./CallAPI";
import FetchCurrentLocation from "./FetchCurrentLocation";
import { GET } from "./Network/network";
import SearchLocation from "./SearchLocation";
import ShowWeather from "./ShowWeather";

const WeatherApp = () => {
  const [title] = useState("Weather Application With Auto Complete City");

  const [param, setParam] = useState({});
  const [Weather, setWeather] = useState({});
  const [city, setcity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [lat, setlat] = useState(null);
  const [lon, setlon] = useState(null);
  const [Status, setStatus] = useState("");

  useEffect(() => {
  }, []);
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
              lat={lat}
              setlat={setlat}
              lon={lon}
              setlon={setlon}
              city={city}
              setcity={setcity}
              Weather={Weather}
              setWeather={setWeather}
              options={options}
              setOptions={setOptions}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            ></SearchLocation>
            <CallAPI
              city={city}
              lat={lat}
              lon={lon}
              setWeather={setWeather}
              options={options}
              setOptions={setOptions}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
