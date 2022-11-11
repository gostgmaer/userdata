import React, { useEffect } from "react";
import Data from "./Data";
import moment from "moment/moment";

const List = () => {
  const today = new Date();
  // Data.forEach((element) => {
  //   let date = moment(element.dbo).format("MM/DD");
  //   console.log(date);
  // });
  let arrray;
  try {
    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
    
    }, [arrray]);

 
    arrray = Data.filter(
      (element) =>
        moment(element.dbo).format("MM/DD") === moment(today).format("MM/DD")
    );
  } catch (error) {
    console.log(error);
    
  }
  const clearAllHandle = () => {
    arrray.length = 0;
    console.log(arrray);

   
  };
  
 

  try {
    return (
      <div className=" m-auto col-5">
        <div className="card border-primary ">
          <div className="card-body">
            <h4 className="card-title">{arrray.length} Birthday Today</h4>
            <ul className=" list-group">
              {arrray.map((data) => {
                return (
                  <li className="list-group-item d-flex" key={data.id}>
                    <img
                      className=""
                      width={50}
                      height={50}
                      src={data.image}
                      alt={data.first_name}
                    />
                    <div>
                      <p className="card-text ms-2">
                        {data.first_name} {data.last_name}
                      </p>
                      <p className="card-text ms-2">
                        {moment(today).format("YYYY") -
                          moment(data.dbo).format("YYYY")}{" "}
                        Years Old
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" card-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={clearAllHandle}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    
  }
 
};

export default List;
