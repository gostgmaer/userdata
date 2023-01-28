import React, { useState } from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiSkipPrevious,
} from "react-icons/bi";

const UI = ({ MovieList }) => {
 

  return (
    <div className="card border-primary">
      <div
        id="carouselExampleControls"
        className="carousel slide"
       
      >
        <div className="carousel-inner">
          {MovieList?.results?.map((data) => {
            return (
              <div key={data.id}  className="carousel-item active">
                <img src={data?.primaryImage?.url} className="d-block w-100" alt="..." />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

  
    </div>
  );
};

export default UI;
