/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const date = new Date().toDateString();
let Token_URL = "waitingroom/search/1";
function TokenList() {
  const [tokens, setToken] = useState([]);
  const [error, setError] = useState({});
  const [search, setSearch] = useState("");




  useEffect(() => {
    axios
      .get(Token_URL)
      .then((res) => {
        setToken(res["data"]);
      })
      .catch((error) => {
        setError(error["response"]["data"]);
      });
    //   console.log(tokens);
  }, []);

  //  console.log(Response);
  if (tokens.length !==0) {
    try {
        return (
            <div>
              <div className=" col-10  m-auto">
                <div className=" m-2 rounded-3 card text-center">
                  <div className="card-header bg-light">
                    Static Table Data With Filter
                  </div>
                  <div className="form-group  p-5">
                    <label className=" pb-4">
                   
                      Search with First name, IP Address or Email from the Table Using
                      this Search Box
                    </label>
        
                    <input
                      type="text"
                      className="form-control"
                      name="searchBox"
                      id="searchBox"
                      aria-describedby="helpId"
                      placeholder="Search..."
                    />
                  </div>
        
                  <div className="card-footer text-muted">{date}</div>
                </div>
              </div>
              <div className=" col-10 m-auto">
                <div className=" m-2 rounded-3 card text-center">
                  <table className="table table-bordered table-hover table-inverse table-responsive">
                    <thead className="thead-inverse">
                      <tr className="table-dark">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Total time</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {tokens["result"].map((val, key) => {
                        return (
                          <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.first_name}</td>
                            <td>{val.last_name}</td>
                            <td>{val.email}</td>
                            <td>{val.Total_time}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div></div>
                </div>
              </div>
            </div>
          );
    } catch (error) {
        console.log(error);
        
    }
     console.log(tokens);
   
  }
 
}

export default TokenList;
