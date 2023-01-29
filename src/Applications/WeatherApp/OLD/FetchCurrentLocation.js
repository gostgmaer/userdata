import React, { useEffect, useState } from "react";
export const FetchCurrentLocation = ({ lat, setlat, lon, setlon }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlat(position.coords.latitude);
      setlon(position.coords.longitude);
    });
  }, [setlat, setlon]);
};

export default FetchCurrentLocation;
