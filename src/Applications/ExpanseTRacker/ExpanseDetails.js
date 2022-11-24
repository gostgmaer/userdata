import React from "react";

const ExpanseDetails = () => {
  return (
    <div><div className="card col-4 justify-content-center m-auto">
    <div className=" card-header">My Balance: <span className=" text-peimary">$ 200.00</span></div>
    <div className="card-body d-flex col-12">
      <div className="col-6 ">
        <h4 className="card-title">Income</h4>
        <p className="card-text text-success">+ $ 200</p>
      </div>
      <div className="col-6 ">
        <h4 className="card-title">Expense</h4>
        <p className="card-text text-danger">- $ 200</p>
      </div>
    </div>
  </div></div>
  );
};

export default ExpanseDetails;
