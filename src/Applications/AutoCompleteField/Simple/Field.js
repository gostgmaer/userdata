// @ts-nocheck

import React from "react";
import { BiSearch } from "react-icons/bi";
import data from "../../../Assets/Mock/Mockero/personalFile.json";

const Field = ({ input, setinput }) => {
  const handleSearch = (data) => {
    setinput(data);
  };

  return (
    <div>
      <div className="mb-3 col-5 d-block m-auto mt-3">
        <div className=" d-flex">
          <input
            type="text"
            className="form-control"
            name="searchBox"
            id="searchBox"
            aria-describedby="helpId"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Search..."
          />
          <button
            onClick={() => handleSearch(input)}
            type="button"
            className=" btn p-0 btn-secondary bg-light text-black col-2"
          >
            <BiSearch></BiSearch> Search
          </button>{" "}
        </div>

        <div className=" d-block">
          <div class="dropdown text-start">
            <div class="dropdown-row bg-light  col-10">
              {data
                .filter((val) => {
                  if (input === "") {
                    return val;
                  } else if (
                    val.first_name
                      .toLowerCase()
                      .startsWith(input.toLowerCase()) &&
                    val.first_name !== input
                  ) {
                    return val;
                  }
                })
                .map((item) => {
                  if (input) {
                    return (
                      <li
                        onClick={() => handleSearch(item.first_name)}
                        className=" dropdown-item btn"
                        key={item.id}
                      >
                        {item.first_name}
                      </li>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
