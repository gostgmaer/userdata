import React from "react";

const ViewMore = (Recipe, setRecipe) => {
    console.log(Recipe["Recipe"]["recipe"]["ingredients"]);
    let ingredients = Recipe["Recipe"]["recipe"]["ingredients"]
  return (
    <React.Fragment>
      <div className="card">
        <ul className="list-group list-group-flush">
          {ingredients.map((val, key) => {
            return <li className="list-group-item">{val.text}</li>;
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ViewMore;
