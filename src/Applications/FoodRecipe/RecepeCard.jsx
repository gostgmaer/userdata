import React, { useState } from 'react'
import ViewMore from './ViewMore';

const RecepeCard = ({ val, setRecipe }) => {
    const [ingredients, setIngredients] = useState(false);
    return (
        <div className="card col-3">
            <img
                src={val["recipe"]["image"]}
                className=" img-thumbnail"
                alt={val["recipe"]["label"]}
            />
            <div className="card-body">
                <h5 className="card-title">{val["recipe"]["label"]}</h5>
                <p className="card-text">
                    Total Calories = {val["recipe"].calories}
                </p>

                <div className="d-flex flex-wrap">
                    {ingredients ? (
                        <button
                            type="button"
                            className=" m-1 btn btn-outline-info"
                            onClick={(e) => setIngredients(false)}
                            aria-current="true">
                            Hide ingredients
                        </button>
                    ) : (
                        <button
                            type="button"
                            className=" m-1 btn btn-outline-info"
                            onClick={(e) => setIngredients(true)}
                            aria-current="true">
                            Show ingredients
                        </button>
                    )}
                </div>
            </div>
            {ingredients ? (
                <ViewMore Recipe={val} setRecipe={setRecipe}></ViewMore>
            ) : (
                ""
            )}
        </div>
    )
}

export default RecepeCard