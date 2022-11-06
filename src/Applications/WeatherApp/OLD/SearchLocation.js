import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { GET } from './Network/network';


const SearchLocation = ({city, setcity,Weather, setWeather}) => {
  
  const searchWeather = async()=>{
   
    let data = await GET("weather", "", `q=${city}`,'','')
    setWeather(data)
    console.log(data);
  }
  const ChangeSearch = (e)=>{
    setcity(e.target.value)
  }
  return (
    <div>
      <div class="row m-5">
        <div class="col-md-5 mx-auto">
            <div class="small fw-light">search input with icon</div>
            <div class="input-group">
                <input value={city} class="form-control border-end-0 border rounded-pill" type="search" onChange={ChangeSearch}  id="example-search-input"/>
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" onClick={searchWeather} type="button">
                        <FaSearch></FaSearch>
                    </button>
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SearchLocation