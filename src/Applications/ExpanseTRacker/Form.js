
import React from "react";
import { useGlobalContext } from "../../Context/Contenxt";

const Form = () => {
  const { setAmount, setText, addExpanse, Amount, Text } = useGlobalContext();

  return (
    <div className=" col-4 m-auto justify-content-center border ">
      
      <div className="card-header col-12">Add Transsection</div>
        <div className="card-body">
       
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              className="form-control form-control-sm"
              name="name"
              id="name"
              value={Text}
              aria-describedby="helpId"
              placeholder="Enter  Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amoumt</label> <br />
            <small>negative is Expense and Positive is Earning</small>
            <input
              type="text"
              onChange={(e) => setAmount(e.target.value)}
              className="form-control form-control-sm"
              name="amount"
              id="amount"
              aria-describedby="helpId"
              value={Amount}
              placeholder="Enter Amount"
            />
          </div>
          <button type="button" onClick={addExpanse} className="btn btn-primary">
            Add Transsection
          </button>
        </div>
      </div>
    
  );
};

export default Form;
