import React, { useEffect, useState } from 'react'
import API from './API';
import DataCard from './DataCard'

const HotelListing = () => {
    const [Hotels, setHotels] = useState([]);
    const [location, setlocation] = useState("New York");


  
    if (Hotels.v) {
        console.log(Hotels);
    }
 
  return (
    <React.Fragment>
        <DataCard Hotels={Hotels}  ></DataCard>
        <API setHotels={setHotels} location={location} setlocation={setlocation} ></API>
    </React.Fragment>
  )
}

export default HotelListing