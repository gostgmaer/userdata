import React, { useState } from "react";
import RecepeCard from "./RecepeCard";
import ViewMore from "./ViewMore";

const ShowRecipe = (Recipe, setRecipe) => {
 
  return (
    <React.Fragment>
      <div className=" col-12  m-auto">
        <div className=" rounded-0  text-center">
          <div className="row">
            {Recipe["Recipe"].map((val) => {
              return (
                <RecepeCard setRecipe={setRecipe} val={val} ></RecepeCard>
             
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowRecipe;
