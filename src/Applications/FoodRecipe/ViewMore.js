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
                <div className="">
                  <div className="row g-0">
                  
                    <div className="col-md-9 p-2 text-start">
                      <div className="card-body p-0">
                        <h6 className="card-title">{val.food}</h6>
                        <p className="card-text">
                        {val.text}
                        </p>
                      
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img
                        src={val.image}
                        className="img-fluid p-2 rounded-start"
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
