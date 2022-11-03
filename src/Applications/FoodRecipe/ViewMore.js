import React from "react";

const ViewMore = (Recipe, setRecipe) => {
  let ingredients = Recipe["Recipe"]["recipe"]["ingredients"];
  return (
    <React.Fragment>
      <div className="card viewMore">
        <div className="card-header bg-light">ingredients </div>
        <ol className="list-group list-group-flush">
          {ingredients.map((val, key) => {
            return (
              <li className=" list-group-item p-0" key={key}>
                <div class="">
                  <div class="row g-0">
                  
                    <div class="col-md-9 p-2 text-start">
                      <div class="card-body p-0">
                        <h6 class="card-title">{val.food}</h6>
                        <p class="card-text">
                        {val.text}
                        </p>
                      
                      </div>
                    </div>
                    <div class="col-md-3">
                      <img
                        src={val.image}
                        class="img-fluid p-2 rounded-start"
                        alt={val.label}
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default ViewMore;
