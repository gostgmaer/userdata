import React, { useState } from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiSkipPrevious,
} from "react-icons/bi";

const UI = ({ MovieList }) => {
  return (
    <div className="card border-primary">
      <div id="carouselExampleControls" className="carousel slide">
        <div className="carousel-inner">
          {MovieList?.results?.map((data) => {
            return (
              <div key={data.id} className="carousel-item active">
                <img
                  src={data?.primaryImage?.url}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <div className="slideElement">
        <button
          className="carousel-control-prev"
         >
         Previous
        </button>
        <button
          className="carousel-control-next"
        > Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default UI;
