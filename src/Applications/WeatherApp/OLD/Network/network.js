import axios from "axios";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../../../Utils/Notification/notify";

const baseURL = process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL;
const appID = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const CitybaseURL = "https://wft-geo-db.p.rapidapi.com/v1/";

// let headerPayload = '';
// let signature = '';

export const GETCITY = async (endpoint, body, queryParam, urlParam, header) => {
  const Cityoptions = {
    headers: {
      "X-RapidAPI-Key": "8842f2a974msh6b0949e628a5e32p13683ejsn3912b12003ed",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
    params: queryParam,
  };
  let response;
  try {
    response = await axios.get(`${CitybaseURL}${endpoint}`, Cityoptions);
    notifySuccess("Data GET SUCCESS", 2000);
  } catch (e) {
    // catch error
      notifyerror(e.message,2000)
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};

export const GET = async (endpoint, body, queryParam, urlParam, header) => {
  let response;
  try {
    response = await axios.get(
      `${baseURL}/${endpoint}?units=metric&appid=${appID}&${queryParam}`
    );

    notifySuccess(
      <div>
        {" "}
        <span>{response.data.name}</span>
        <br /> {response.data["coord"]["lat"]}, {response.data["coord"]["lon"]}{" "}
      </div>,
      2000
    );
  } catch (e) {
    // catch error
    notifyerror(e.response.data.message, 2000);
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};

// if success return value
