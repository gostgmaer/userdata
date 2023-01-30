import React from "react";

const DataCard = ({Hotels}) => {
  return (
    <div>
      <div className="row">
       {
        Hotels?.d?.map(item=>(
          <div key={item.id} className="col-4 card">
         <div className="card-body">
              <h3 className="card-title">{item.l}</h3>
              <p className="card-text">{item.s}</p>
            </div>
        </div>
        ))
       }
      </div>
    </div>
  );
};

export default DataCard;
