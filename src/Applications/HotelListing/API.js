// import axios from "axios";
// import React ,{useEffect} from "react";

// const API = ({ setHotels, location, setlocation }) => {
// //   const queryParam = {q: 'new york', locale: 'en_US', langid: '1033', siteid: '300000001'}
//   const option = {
//     headers: {
//       "X-RapidAPI-Key": `${process.env.REACT_APP_RapidAPIKEY}`,
//       "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//     },
//     // params: queryParam,
//   };
// useEffect(() => {

//     GetData("v2/get-meta-data")

// }, [location]);

//   const GetData = async(endPoint)=>{
//   let  response = await axios.get(`https://hotels4.p.rapidapi.com/${endPoint}`, option);
//   console.log(response);
//   }

//   return <div></div>;
// };

// export default API;
import { REQUEST } from "api/APIService";
import React, { useEffect } from "react";

const API = ({ setHotels, location, setlocation }) => {


    useEffect(()=>{
        req()
        
    },[])
  const option = {
    headers: {
      "X-RapidAPI-Key": "8842f2a974msh6b0949e628a5e32p13683ejsn3912b12003ed",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
    params: { q: "game" },
  };

 const req =async ()=>{
  const data= await REQUEST(
        "https://imdb8.p.rapidapi.com/",
        "auto-complete",
        "get",
        "",
        option.headers,
        option.params,
        ""
      );
//   console.log(data);
  setHotels(data)
    
 } 
  return <div></div>;
};

export default API;
