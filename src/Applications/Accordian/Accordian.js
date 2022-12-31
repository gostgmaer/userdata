import { REQUEST } from "api/APIService";
import React, { Fragment, useEffect, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { Bars } from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import AccordianCard from "./AccordianCard";


 
// import './styles.scss'

const Accordian = ({setTitle}) => {
  const [Questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);


  let data = async () => {
    setLoading(true)
    let object = {
      header: {
        "X-RapidAPI-Key": process.env.REACT_APP_RapidAPIKEY,
        "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
      },
      object: { limit: "30" },
    };
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
    setLoading(false)
  };
  useEffect(() => {
    data();
  }, []);

    // useEffect(() => {
    // setTitle("Accordian Project")
    // }, []);
  
    return (
      <Fragment>
        {loading?<div className="loading"> <Bars height={200} color='white'></Bars></div>: <div className="accordian w-75 m-auto">
          {Questions?.map((q) => (
            <AccordianCard key={q.id} item={q}></AccordianCard>
          ))}
        </div>}
      </Fragment>
    )
    // if (setLoading) {
    //   return (
    //     <div className="accordian w-75 m-auto">
    //       {Questions.map((q) => (
    //         <AccordianCard key={q.id} item={q}></AccordianCard>
    //       ))}
    //     </div>
    //   );
    // } else {
    //   <div className="loading"> <Bars height={200}></Bars></div>;
    // }
}

export default Accordian