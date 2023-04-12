import React, { useState } from "react";

import Data from "../../Assets/Mock/Mockero/personalFile.json";

const date = new Date().toDateString();
function SearchFilter() {
  const [search, setSearch] = useState("");

  const SearchData = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className=" col-10  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">
            Static Table Data With Filter
          </div>
          <div className="form-group  p-5">
            <label className=" pb-4">
              {" "}
              Search with First name, IP Address or Email from the Table Using
              this Search Box{" "}
            </label>

            <input
              type="text"
              className="form-control"
              name="searchBox"
              id="searchBox"
              aria-describedby="helpId"
              onChange={(e) => setSearch(e.target.value)}
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
                <th>Ip Address</th>
              </tr>
            </thead>
            <tbody>
              {Data.filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.first_name
                    .toLowerCase()
                    .startsWith(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase()) ||
                  val.ip_address.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              }).map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td>{val.ip_address}</td>
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
}

export default SearchFilter;
