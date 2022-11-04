import React, { useEffect } from "react";

const FetchCurrentLocation = (lat, setlat, loon, setloon) => {
    useEffect(()=>{
       
          getLocation()
    },[])
    const getLocation = () => {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(setlat);
            setlat(position.coords.latitude);
            setloon(position.coords.longitude);
           
          })}
        
      
  return <div>

  </div>;
};

export default FetchCurrentLocation;
