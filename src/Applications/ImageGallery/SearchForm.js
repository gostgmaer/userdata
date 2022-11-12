import React from "react";
import { BiSearch } from "react-icons/bi";
import APIcall from "./APIcall";
import axios from "axios";
import { notifyerror,notifySuccess } from "Utils/Notification/notify";

const SearchForm = ({ queryData, setqueryData, img, setimg }) => {
  let query = {
    client_id: "i5Kt1JQq4jZRXZeB2oO8D3J8avpZ_Xgy3ShUlYFNHh4",
    query: queryData,
    per_page: 100,
    order_by: "relevant",
  };
  const itemSearch = (e) => {
    setqueryData(e.target.value);
  };
  const searchImages = async () => {
    try {
        let res = await axios.get("https://api.unsplash.com/search/photos", {
            params: query,
          });
          setimg(res.data);
          notifySuccess("Image Loaded Successful!",2000)

    } catch (error) {
        notifyerror(error.response.data,5000)
        
    }
   
    
  };
  return (
    <div>
      <div className="mb-3 col-6 col-md-4 col-sm-4 col-xs-6 m-auto p-3 pb-0 d-flex">
        <input
          value={queryData}
          type="text"
          onChange={itemSearch}
          className="form-control"
          name="search"
          id="search"
          aria-describedby="helpId"
          placeholder="Search with Name"
        />{" "}
        <button
          onClick={searchImages}
          className="input-group-text"
          id="search-button"
        >
          <BiSearch></BiSearch>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
