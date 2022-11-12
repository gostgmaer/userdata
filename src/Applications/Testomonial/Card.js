import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Card = ({ reviews, setcount, count }) => {
  if (reviews) {
    return (
      <div className="  text-center">
        <div className="card w-25 m-auto">
          <img
            src={reviews.avatar}
            width={"50px"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{reviews.name}</h5>
            <p className="card-text">{reviews.message}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <b>{reviews.designation}</b>{" "}
            </li>
            <li className="list-group-item">{reviews.location}</li>
          </ul>
          <div className="card-body">
            <button className="card-link" onClick={() => setcount(count - 1)}>
              <BiArrowBack></BiArrowBack>
            </button>
            <button className="card-link" onClick={() => setcount(count + 1)}>
              <FaArrowAltCircleRight></FaArrowAltCircleRight>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
