import React, { useEffect, useState } from "react";
import { GET } from "./Network/network";
import SimpleDate from "../../Components/ComponentBlock/SimpleDate";
import SimpleHeading from "../../Components/ComponentBlock/SimpleHeading";

const FoodRecipe = () => {
  const [title] = useState("Food Recipe Application");
  const query = "new";

  useEffect(() => {
    const getRecipe = async (params) => {
      await GET("api/food-database/search", "", `&ingr=${query}`, "");
    };
    getRecipe();
  });

  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center"></div>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default FoodRecipe;
