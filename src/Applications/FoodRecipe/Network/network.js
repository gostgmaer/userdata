import axios from 'axios';
import {
    notifySuccess,
    notifydefault,
    notifyerror,
    notifyinfo,
    notifywarning,
  } from "../../../Utils/Notification/notify";
  import { ToastContainer } from "react-toastify";

const Domain = process.env.REACT_APP_edamam_RECIPE_ONE_BASE_url
const apiKEY = process.env.REACT_APP_edamam_RECIPE_ONE_apiKEY
const appID = process.env.REACT_APP_edamam_RECIPE_ONE_app_id

let msg = "Data Update Success"

export const POST = async (endPoint,body,queryParam,urlParam) => {
  let response;
  try {
    response = await axios.post(`${Domain}/${endPoint}`, body);
    notifySuccess(msg,2000)
    
  } catch (e) {
    // catch error
    notifyerror(e.message,2000)
    throw new Error(e.message)
  }

  // if success return value
  return response?.data ? response?.data : null // or set initial value
}
export const GET = async (endpoint,body,queryParam,urlParam) => {
    let response;
    try {
      response = await axios.get(`${Domain}/${endpoint}?app_id=${appID}&app_key=${apiKEY}${queryParam}`);
      notifySuccess('Data Loaded Successfully !!',2000)
    } catch (e) {
      // catch error
      notifyerror(e.message,2000)
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const PUT = async (endpoint,body) => {
    let response;
    try {
      response = await axios.put(`${Domain}/${endpoint}`, body);
      notifySuccess(msg,2000)
    } catch (e) {
      // catch error
      notifyerror(e.message,2000)
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const PATCH = async (endpoint,body) => {
    let response;
    try {
      response = await axios.patch(`${Domain}/${endpoint}`, body);
      notifySuccess(msg,2000)
    } catch (e) {
      // catch error
      notifyerror(e.message,2000)
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const DELETE = async (endpoint,body,id) => {
    let response;
    try {
      response = await axios.delete(`${Domain}/${endpoint}`, body,id);
      notifySuccess(msg,2000)
    } catch (e) {
      // catch error
      notifyerror(e.message,2000)
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
    
  }