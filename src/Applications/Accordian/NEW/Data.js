import { REQUEST } from "api/APIService";
import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import UI from "./UI";

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
      <div className=" col-6  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          {Questions.map((data)=>{
            return <UI key={data.id}  {...data}></UI>
          })}
        </div>
      </div>
    );
  } else {
    <div>Loading....</div>;
  }
};

export default Data;
