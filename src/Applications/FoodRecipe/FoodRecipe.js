import React, { useEffect, useState } from "react";
import { GET } from "./Network/network";
import SimpleDate from "../../Components/ComponentBlock/SimpleDate";
import SimpleHeading from "../../Components/ComponentBlock/SimpleHeading";
import SearchRecipe from "./SearchRecipe";
import ShowRecipe from "./ShowRecipe";

const FoodRecipe = () => {
  const [title] = useState("Food Recipe Application");
  const [searchData, SetSearchdata] = useState("chi");
  const [Recipe, setRecipe] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await GET("recipes/v2", "", `q=${searchData}`, "");
      setRecipe(data["hits"]);
    };
    getRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
        <SearchRecipe
          searchData={searchData}
          SetSearchdata={SetSearchdata} Recipe={Recipe} setRecipe={setRecipe}
        ></SearchRecipe>
        <ShowRecipe Recipe={Recipe} setRecipe={setRecipe}></ShowRecipe>
      </div>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default FoodRecipe;
