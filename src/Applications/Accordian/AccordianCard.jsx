import React, { useState } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
const AccordianCard = ({ item }) => {
  const [show, setshow] = useState(false);

  return (
    <div class="card">
      <div className="card-header d-flex bg-light">
        <div className=" col-11">
          <span>{item.question}</span>
        </div>
        <div className=" col-1">
          <button onClick={() => setshow(!show)} className=" btn ">
            {show ? (
              <BiMinusCircle></BiMinusCircle>
            ) : (
              <BiPlusCircle></BiPlusCircle>
            )}
          </button>
        </div>
      </div>
      {show && (
        <div className="card-body">
          <p id="content">
            <span className="">{item.answer}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordianCard;
