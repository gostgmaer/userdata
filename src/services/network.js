// import { Axios, axios } from "axios";

// export const addContactOnServer = async (fname, lname, phone, email) => {
//   try {
//     const { data } = await axios.post(
//       `${process.env.REACT_APP_FIREBASE_DOMAIN_BACKEND}/contacts.json`,
//       { fname, lname, phone, email }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
import { database } from "./Firebase"
import axios from 'axios';
import {
    notifySuccess,
    notifydefault,
    notifyerror,
    notifyinfo,
    notifywarning,
  } from "../Utils/Notification/notify";
  import { ToastContainer } from "react-toastify";

const Domain = database["app"]["options"]["databaseURL"];

export const POST = async (endpoint,body) => {
  let response;
  try {
    response = await axios.post(`${Domain}/${endpoint}`, body);
    
  } catch (e) {
    // catch error
    notifyerror(e.message,2000)
    throw new Error(e.message)
  }

  // if success return value
  return response?.data ? response?.data : null // or set initial value
}
export const GET = async (endpoint,body) => {
    let response;
    try {
      response = await axios.get(`${Domain}/${endpoint}`, body);
    } catch (e) {
      // catch error
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const PUT = async (endpoint,body) => {
    let response;
    try {
      response = await axios.put(`${Domain}/${endpoint}`, body);
    } catch (e) {
      // catch error
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const PATCH = async (endpoint,body) => {
    let response;
    try {
      response = await axios.patch(`${Domain}/${endpoint}`, body);
    } catch (e) {
      // catch error
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  export const DELETE = async (endpoint,body) => {
    let response;
    try {
      response = await axios.delete(`${Domain}/${endpoint}`, body);
    } catch (e) {
      // catch error
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
    
  }