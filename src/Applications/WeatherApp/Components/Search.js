import React, { Fragment } from "react";
import { GET } from "./api";
import { BiSearch } from "react-icons/bi";


const Search = ({Weather,setWeather,city,setcity}) => {



  const ClickSetSearchdata = (e) => {
    setcity(e.target.value);
  };
  const handleSearch = async () => {
    const res = await GET("weather", "", `q=${city}`, "", "");
    setWeather(res);
    
  };

  return <Fragment>
      <div className="mb-3 col-5 d-flex m-auto mt-3">
        <input
          value={city}
          type="text"
          onChange={ClickSetSearchdata}
          className="form-control"
          name="search"
          id="search"
          aria-describedby="helpId"
          placeholder="Search a City For Get Weather Report"
        />
        <button
          onClick={handleSearch}
          type="button"
          className=" btn p-0 btn-secondary bg-light text-black col-2"
        >
          <BiSearch></BiSearch> Search
        </button>
      </div>
  </Fragment>;
};

export default Search;
