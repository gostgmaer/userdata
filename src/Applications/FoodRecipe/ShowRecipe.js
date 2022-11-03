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
                <div class="card col-3" key={key}>
                  <img src={val["recipe"]["image"]} class=" img-thumbnail" alt={val["recipe"]["image"]}  />
                  <div class="card-body">
                    <h5 class="card-title">{val["recipe"]["label"]}</h5>
                    <p class="card-text">
                     
                    </p>
                    <button class="btn btn-primary">
                      View More
                    </button>
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
