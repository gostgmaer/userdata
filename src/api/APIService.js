import axios from "axios";
// import { notifySuccess } from "Utils/Notification/notify";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../Utils/Notification/notify";


export const REQUEST = async (baseURL,endpoint,method, body,headerParams, queryParam, urlParam) => {
  const option = {
    method:method,
    url:baseURL+endpoint,
    headers: headerParams,
    params: queryParam,
    data:body
  };
  let response;
  try {
    response = await axios.request(option);
    notifySuccess("data fetch Successfully!...", 2000);
  } catch (e) {
    // catch error
      notifyerror(e.message,2000)
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
