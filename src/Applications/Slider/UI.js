import React, { useState } from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiSkipPrevious,
} from "react-icons/bi";

const UI = ({ MovieList }) => {
  const [index, setindex] = useState();
  // const sliderImg = () => {
  //   if (MovieList) {
  //     return
  //   }
  // };

  try {
    if (MovieList.length !== 0) {
      console.log(MovieList);
      return (
        <div class="card border-primary">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {MovieList.results.map((data) => {
                return (
                  <div key={data._id}  class="carousel-item active">
                    <img src={data.image} class="d-block w-100" alt="..." />
                  </div>
                );
              })}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

      
        </div>
      );
    }
  } catch (error) {
    return <div>{error.message}</div>;
  }
};

export default UI;
