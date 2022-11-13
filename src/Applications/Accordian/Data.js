import { REQUEST } from "api/APIService";
import React, { useEffect, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

const Data = ({ Questions, setQuestions }) => {
  const [show, setshow] = useState(false);
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
  const showText = (id) => {
    setshow(true);
  };
  const hideText = (id) => {
    setshow(false);
  };
  if (Questions) {
    return (
      <div className=" m-2 rounded-3 card text-center">
        {Questions.map((q) => {
          return (
            <div className="card-body" key={q.id}>
              <div className="card-header d-flex bg-light">
                <div className=" col-10">
                  <span>{q.question}</span>
                </div>
                <div className=" col-2">
                  <button onClick={() => setshow(!show)} className=" btn ">
                   {show? <BiMinusCircle></BiMinusCircle>:<BiPlusCircle></BiPlusCircle>}
                  </button>
                </div>
              </div>
              {show && (
                <p id="content">
                  <span className="">{q.answer}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  } else {
    <div>Loading....</div>;
  }
};

export default Data;
