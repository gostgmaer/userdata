import React from "react";
import Data from "./Data";

const List = () => {
  const today = new Date().formatUTC()
  console.log(today.toLocaleString());
  // Data.forEach(element => {
  //    console.log(element.dbo.toLocaleString());
    
  // });
  // let arrray = Data.filter((dbo)=>dbo.dbo.getUTCMonth()===today.getUTCMonth())
  // console.log(arrray);
  return (
    <div className=" m-auto col-5">
       <div class="card border-primary ">
      <div class="card-body">
        <h4 class="card-title">{Data.length} Birthday Today</h4>
        <div>
          <img class="card-img-top" src="holder.js/100px180/" alt="" />
          <p class="card-text">Text</p>
        </div>
      </div>
      <div className=" card-footer">
        <button type="button" class="btn btn-primary">Clear All</button>
      </div>
    </div>

    </div>
   
  );
};

export default List;
