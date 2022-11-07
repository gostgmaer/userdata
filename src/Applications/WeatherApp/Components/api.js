import axios from "axios";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../../Utils/Notification/notify";

const baseURL = process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL;
const appID = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

let msg = "Weather Report Generate Successfully";
export const GET = async (endpoint, body, queryParam, urlParam, header) => {
  let response;
  try {
    response = await axios.get(
      `${baseURL}/${endpoint}?units=metric&appid=${appID}&${queryParam}`
    );
   
    const data = response.data;
    notifySuccess(
      <div> <span>{data.name} </span> Coordinates:<span> {data.coord.lat} {data.coord.lon}</span>
      </div>,
      5000
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
