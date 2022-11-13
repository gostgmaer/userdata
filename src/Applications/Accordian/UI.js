import React from "react";
import Data from "./Data";
import { useState } from "react";
const UI = () => {
  const [Questions, setQuestions] = useState();
  return (
    <div className=" col-6  m-auto">
      <Data Questions={Questions} setQuestions={setQuestions} ></Data>
    </div>
  );
};

export default UI;
