
import axios from "axios";
import React ,{useEffect} from "react";


const API = ({ setHotels, location, setlocation }) => {
//   const queryParam = {q: 'new york', locale: 'en_US', langid: '1033', siteid: '300000001'}
  const option = {
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPIKEY}`,
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
    // params: queryParam,
  };
useEffect(() => {
    
    GetData("v2/get-meta-data")
   
}, [location]);



  const GetData = async(endPoint)=>{
  let  response = await axios.get(`https://hotels4.p.rapidapi.com/${endPoint}`, option);
  console.log(response);
  }

  return <div></div>;
};

export default API;
