import React, { useEffect, useState } from "react";
import { GET } from "./Network/network";
import SimpleDate from "../../Components/ComponentBlock/SimpleDate";
import SimpleHeading from "../../Components/ComponentBlock/SimpleHeading";
import SearchRecipe from "./SearchRecipe";

const FoodRecipe = () => {
  const [title] = useState("Food Recipe Application");
  const [searchData, SetSearchdata] = useState("chi");
  
  useEffect(() => {
    const getRecipe = async (params) => {
      await  GET('recipes/v2',`q=${searchData}`,'')
    };
    getRecipe();
  },[searchData]);

  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
        <SearchRecipe searchData={searchData} SetSearchdata={SetSearchdata}></SearchRecipe>
      </div>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default FoodRecipe;
