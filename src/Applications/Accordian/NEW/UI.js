import React, { useState } from "react";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const UI = ({ question, answer }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="card-body">
      <div className="card-header d-flex bg-light">
        <div className=" col-10">
          <span>{question}</span>
        </div>
        <div className=" col-2">
          <button className=" btn " onClick={() => setshow(!show)}>
            {show ? (
              <BiMinusCircle></BiMinusCircle>
            ) : (
              <BiPlusCircle></BiPlusCircle>
            )}
          </button>
        </div>
      </div>

      {!show ? (
        ""
      ) : (
        <p id="content">
          <span className="">{answer}</span>
        </p>
      )}
    </div>
  );
};

export default UI;
