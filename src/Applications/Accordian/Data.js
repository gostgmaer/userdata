
import React, { useEffect, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { REQUEST } from "../../api/APIService";
import AccordianCard from "./AccordianCard";

const Data = ({ Questions, setQuestions }) => {
  let object = {
    header: {
      "X-RapidAPI-Key": process.env.REACT_APP_RapidAPIKEY,
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
    object: { limit: "30" },
  };

  let data = async () => {
    const res = await REQUEST(
      "https://trivia-by-api-ninjas.p.rapidapi.com/",
      "v1/trivia",
      "get",
      "",
      object.header,
      object.object,
      ""
    );
    res.forEach((element) => {
      element["id"] = uuidv4();
    });

    setQuestions(res);
  };
  useEffect(() => {
    data();
  }, []);

  if (Questions) {
    return (
      <div className="accordian">
        {Questions.map((q) => (
          <AccordianCard key={q.id} item={q}></AccordianCard>
        ))}
      </div>
    );
  } else {
    <div>Loading....</div>;
  }
};

export default Data;
