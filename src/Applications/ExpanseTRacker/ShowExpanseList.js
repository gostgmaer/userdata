import React from "react";

import { Bars, Circles, ThreeDots } from "react-loader-spinner";
import { useGlobalContext } from "../../Context/Contenxt";
import Transsection from "./Transsection";
const ShowExpanseList = () => {
  const { expanseHistory, loading } = useGlobalContext();
  console.log(expanseHistory);

  return (
    <div className=" card col-12 m-auto justify-content-center border">
      <div className=" card-header">History</div>
      <div className="card-body ">
        <div className=" list-group col-12">
          {loading ? (
            <div>
              <ThreeDots width="" height="20" color="red"></ThreeDots>
            </div>
          ) : (
            <ul className="list-group list-group-numbered">
              {expanseHistory.map((expance) => {
                const { id, name, amount } = expance;
                return <Transsection key={id} expance={expance}></Transsection>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowExpanseList;
