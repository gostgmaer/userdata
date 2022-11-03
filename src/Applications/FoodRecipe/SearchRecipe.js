import React from "react";
import { BiSearch } from "react-icons/bi";
import { GET } from "./Network/network";

const SearchRecipe = ({ searchData, SetSearchdata, Recipe, setRecipe }) => {
    const handleSearch = async(e)=>{
      const data = await GET("recipes/v2", "", `q=${searchData}`, "");
      setRecipe(data["hits"]);
      
    }
    const ClickSetSearchdata= (e)=>{
        SetSearchdata(e.target.value)
    }
  return (
    <React.Fragment>
      <div className="mb-3 col-5 m-auto p-3 d-flex">
        <input
          value={searchData}
          type="text"
          onChange={ ClickSetSearchdata}
          className="form-control"
          name="search"
          id="search"
          aria-describedby="helpId"
          placeholder="Search with Name"
        />
        <button onClick={handleSearch} type="button" className=" btn p-0 btn-secondary bg-light text-black col-2">
         

            <BiSearch></BiSearch> Search
          
        </button>
      </div>
    </React.Fragment>
  );
};

export default SearchRecipe;
