import React, { useEffect, useState } from 'react'
import API from './API';
import DataCard from './DataCard'

const HotelListing = ({setTitle}) => {
    const [Hotels, setHotels] = useState([]);
    const [location, setlocation] = useState("New York");


    useEffect(() => {
        setTitle("Hotel Listing Data")
    
    }, []);
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