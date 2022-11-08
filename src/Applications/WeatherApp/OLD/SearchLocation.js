import axios from "axios";
import React, { createRef, useState } from "react";
import { Typeahead, AsyncTypeahead } from "react-bootstrap-typeahead";
import CallAPI from "./CallAPI";
import { GET, GETCITY } from "./Network/network";
const SearchLocation = ({
  lat,
  setlat,
  lon,
  setlon,
  city,
  setcity,
  setWeather,
  Weather,
}) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (query) => {
    const res = await GETCITY(
      "geo/cities",
      "",
      { namePrefix: query, minPopulation: "1000000" },
      "",
      ""
    );
    setOptions(res.data);
  };

  const filterBy = () => true;
  const handleGetWeather = () => {
    let data = ref.current.getInput();
    setcity(data.value);
    let newary = options.filter((obj) => obj.city === city);
    let newObj;
    newary.forEach((element) => {
      newObj = element;
    });
    if (newObj) {
      setlat(newObj.latitude);
      setlon(newObj.longitude);
    }
  };
  const ref = createRef();

  return (
    <React.Fragment>
      <div className=" d-flex m-auto">
        <AsyncTypeahead
          filterBy={filterBy}
          id="async-example"
          isLoading={isLoading}
          labelKey="name"
          ref={ref}
          minLength={3}
          onSearch={handleSearch}
          options={options}
          placeholder="Search for a Github user..."
          renderMenuItemChildren={(option) => (
            <>
              <span>{option.name}</span>
            </>
          )}
        />
        <button
          type="button"
          onClick={handleGetWeather}
          className="btn btn-primary"
        >
          Button
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchLocation;
