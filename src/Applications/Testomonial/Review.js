import React, { useEffect, useState } from "react";
import API from "./API";
import Card from "./Card";

const Review = ({ setTitle }) => {
  const [reviews, setreviews] = useState({});
  const [count, setcount] = useState(1);
  useEffect(() => {
    if (count===0) {
            setcount(1)
    }
    setTitle("Review");
  });
  return (
    <div>
      <Card setcount={setcount} count={count} reviews={reviews} ></Card>
      <API setreviews={setreviews}  count={count}></API>
    </div>
  );
};

export default Review;
