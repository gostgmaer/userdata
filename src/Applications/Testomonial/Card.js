import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Card = ({ reviews, setcount, count }) => {
  if (reviews) {
    return (
      <div className="  text-center">
        <div class="card w-25 m-auto">
          <img
            src={reviews.avatar}
            width={"50px"}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{reviews.name}</h5>
            <p class="card-text">{reviews.message}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {" "}
              <b>{reviews.designation}</b>{" "}
            </li>
            <li class="list-group-item">{reviews.location}</li>
          </ul>
          <div class="card-body">
            <button class="card-link" onClick={() => setcount(count - 1)}>
              <BiArrowBack></BiArrowBack>
            </button>
            <button class="card-link" onClick={() => setcount(count + 1)}>
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
