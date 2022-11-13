import React, { useState } from "react";

const Card = ({
  first_name,
  last_name,
  occupation,
  stockSector,
  image,
  text,email
}) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <div class="card col-3">
      <img src={image} class="card-img-top img-thumbnail" alt={first_name} />
      <div class="card-body">
        <h5 class="card-title">
          {first_name} {last_name}
        </h5>
        <p class="card-text">
          {readMore ? text : `${text.substring(0, 140)}.....`}
          {readMore ? (
            <span onClick={(e) => setreadMore(false)} className=" fw-bold btn text-warning">
              Read less
            </span>
          ) : (
            <span className="fw-bold text-primary btn" onClick={(e) => setreadMore(true)}>
              read More
            </span>
          )}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{email}</small>
      </div>
    </div>
  );
};

export default Card;
