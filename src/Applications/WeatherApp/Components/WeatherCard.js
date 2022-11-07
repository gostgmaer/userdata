import React, { Fragment } from "react";
import Timestamp from "react-timestamp";
import {
  BsCloudHaze,
  BsMusicNoteList,
  BsFillSunriseFill,
  BsSunrise,
  BsSunset,
  BsSunsetFill,
} from "react-icons/bs";
import { WiBarometer, WiCelsius, WiHumidity } from "react-icons/wi";
import { GrMapLocation } from "react-icons/gr";
import {
  FaAirFreshener,
  FaCalendar,
  FaClock,
  FaCloud,
  FaGoogleWallet,
  FaLocationArrow,
  FaSearchLocation,
  FaSnowboarding,
  FaWind,
} from "react-icons/fa";

const WeatherCard = ({ Weather }) => {
  let weatherDesk = {};
  try {
    Weather.weather.forEach((element) => {
     
      Weather["des"] = element;
    });
    let dess = Weather["des"]["main"];
    const Des = () => {
      switch (dess) {
        case "Clouds":
          return <FaCloud></FaCloud>;
        case "Clear":
          return <FaCalendar></FaCalendar>;
        case "Snow":
          return <FaSnowboarding></FaSnowboarding>;
        case "Mist":
          return <BsMusicNoteList />;
        case "Haze":
          return <BsCloudHaze></BsCloudHaze>;

        default:
          break;
      }
    };

  
    
    return (
      <Fragment>
        <div className=" col-5  m-auto">
          <div className=" mb-5 rounded-3 card text-center">
            <div className="card-body">
              <div className="card p-4 col-12">
                <div className="d-flex col-12 text-center">
                  <div className=" col-6  text-start d-block">
                    <h6 className="flex-grow-1">
                      
                      <GrMapLocation></GrMapLocation> {Weather.name}
                    </h6>

                    <p>
                    
                      <span>
                      
                        {Weather["coord"]["lat"]}, {Weather["coord"]["lon"]}
                      </span>
                    </p>
                  </div>

                  <div className=" d-block col-6 text-end">
                    <span className="flex-grow-1">
                      <BsSunrise></BsSunrise>
                      <Timestamp date={Weather.sys.sunrise} />
                    </span>{" "}
                    <br />
                    <span className="flex-grow-1">
                      <BsSunsetFill></BsSunsetFill>{" "}
                      <Timestamp date={Weather.sys.sunset} />
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column temp mt-5 mb-3">
                  <h1 className="mb-0 font-weight-bold" id="heading">
                    <Des></Des> {Weather.main.temp} <WiCelsius></WiCelsius>
                  </h1>
                  <div className=" fw-bold">
                    Feels like {Weather.main.feels_like}
                    <WiCelsius></WiCelsius>. {Weather.des.main}.
                    {Weather.des.description}{" "}
                  </div>
                </div>

                <div className="d-flex">
                  <div className="temp-details flex-grow-1">
                    <p className="my-1">
                      <span>
                        <FaWind></FaWind> {Weather.wind.speed} km/h{" "}
                      </span>
                    </p>

                    <p className="my-1">
                      <span>
                        Humidity: <WiHumidity /> {Weather.main.humidity}%{" "}
                      </span>
                    </p>

                    <p className="my-1">
                      <span>
                        {" "}
                        Pressure: <WiBarometer />
                        {Weather.main.pressure} hPa
                      </span>
                    </p>
                  </div>

                  <div></div>
                </div>
                <h6>
                  <FaClock></FaClock> <Timestamp date={Weather.dt} />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } catch (error) {
    console.log(error);
  }
};

export default WeatherCard;
