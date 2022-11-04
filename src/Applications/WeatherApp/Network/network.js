import axios from 'axios';
import {
    notifySuccess,
    notifydefault,
    notifyerror,
    notifyinfo,
    notifywarning,
} from "../../../Utils/Notification/notify";





const baseURL = process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL
const appID = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
// let headerPayload = '';
// let signature = '';

 let msg = "Data Load SuccessFully"
export const GET = async (endpoint, body, queryParam, urlParam,header) => {
    let response;
    try {
      response = await axios.get(`${baseURL}/${endpoint}?appid=${appID}&${queryParam}`);
      notifySuccess(msg,2000)
      console.log(response);
    } catch (e) {
      // catch error
      notifyerror(e.message,2000)
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }


    // if success return value
 

