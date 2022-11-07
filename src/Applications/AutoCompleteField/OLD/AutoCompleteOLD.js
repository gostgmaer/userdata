import axios from "axios";
import React, { useEffect, useState } from "react";
const AutoCompleteOLD = () => {
  const [Country, setCountry] = useState([]);
  const [CountryMatch, setCountryMatch] = useState([]);
  useEffect(() => {
    const loadCountry = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountry(res.data);
    };
    loadCountry();
  }, []);
  console.log(Country);
  const onChangeHandler = (e) => {
    let matches = Country.filter((C) => {
      const regex = new RegExp(`${e}`, "gi");
      return C.name.common.match(regex) || C.name.official.match(regex);
    });
    setCountryMatch(matches);
  };
  // console.log(search);
  console.log(CountryMatch);
  return (
    <React.Fragment>
      <div className=" p-1 rounded-0 card text-center">
        <div className="m-auto col-4">
          <input
            type="text"
            className="form-control"
            name="auto"
            onChange={(e) => onChangeHandler(e.target.value)}
            id="auto"
            aria-describedby="helpId"
            placeholder="search Data"
          />
        </div>
      </div>

      {CountryMatch &&
        CountryMatch.map((item, index) => {
          <div className=" p-1 rounded-0 card text-center">
            <div className="m-auto col-4">Ttile : {item.name.common}</div>
          </div>;
        })}
    </React.Fragment>
  );
};

export default AutoCompleteOLD;
