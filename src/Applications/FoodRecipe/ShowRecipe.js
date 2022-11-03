import React from "react";
import { ref } from "firebase/database";
import ViewMore from "./ViewMore";

const ShowRecipe = (Recipe, setRecipe) => {
  
  return (
    <React.Fragment>
      <div className=" col-12  m-auto">
        <div className=" rounded-0  text-center">
          <div className="row">
            {Recipe["Recipe"].map((val, key) => {
              return (
                // <div className="card col-4" key={key}>
                //   <div className="card-body" >

                //     <h4 className="card-title">{val["recipe"]["label"]}</h4>
                //     <p className="card-text">Text</p>
                //   </div>
                // </div>
                <div className="card col-3" key={key}>
                  <img src={val["recipe"]["image"]} className=" img-thumbnail" alt={val["recipe"]["label"]}  />
                  <div className="card-body">
                    <h5 className="card-title">{val["recipe"]["label"]}</h5>
                    <p className="card-text">
                      Total Calories = {val["recipe"].calories}
                    </p>
                   
                    <div class="d-flex flex-wrap">
                      <button type="button" class=" m-1 btn btn-outline-info " aria-current="true">ingredients</button>
                     
                    </div>
                    
                    
                  </div>
                  <ViewMore Recipe={val} setRecipe={setRecipe} ></ViewMore>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowRecipe;


