import React from "react";
import { BiEdit, BiTrash, BiCheckSquare } from "react-icons/bi";

const Lists = ({ contactlist, setContactList }) => {
  return (
    <div>
      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">Basic Toto Data</div>
          <div className=" d-block">
            <div>
              <div className="p-2 unstyled">
                {contactlist.map((val, key) => {
                  console.log(val);
                  return (
                    <li className=" list-unstyled bg-light m-1" key={key}>
                      <div className=" col-12 d-flex">
                        <div className=" col-9 p-1 text-start ms-3">
                          <span>{val.firstName}     </span> 
                          
                          <span>{val.lastName}</span>
                        </div>
                        <div className=" col-3">
                          <div className="list-group list-group-horizontal m-0">
                          <button
                              type="button"
                              className="list-group-item me-1 bg-success text-light"
                            >
                              <BiCheckSquare></BiCheckSquare>
                            </button>
                            <button
                              type="button"
                              className="list-group-item text-light bg-info  me-1"
                              aria-current="true"
                            >
                              <BiEdit></BiEdit>
                            </button>
                            <button
                              type="button"
                              className="list-group-item me-1 text-light bg-warning"
                            >
                              <BiTrash></BiTrash>
                            </button>
                           
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
