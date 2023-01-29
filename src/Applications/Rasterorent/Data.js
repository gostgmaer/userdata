import React, { useEffect, useState } from "react";
import { data } from "./API";
import Card from "./Card";
import FilterButton from "./FilterButton";
import Search from "./Search";

const DataView = () => {
  const [People, setPeople] = useState([]);
  const [input, setinput] = useState("");

  useEffect(() => {
    setPeople(data);
    console.log(input);
  }, [input]);
  return (
    <div>
      <div className=" col-10  m-auto">
        <div className=" rounded-3 text-center m-auto card text-center">
          <Search setinput={setinput}></Search>
          <FilterButton People={People} setinput={setinput} ></FilterButton>

          <div className="row d-flex">
             {People.filter((data) => {
                if (input === "") {
                  return data;
                } else if (
                  data.first_name
                    .toLowerCase()
                    .startsWith(input.toLowerCase()) ||
                  data.stockSector.toLowerCase().includes(input.toLowerCase())
                ) {
                  return data;
                }
              }).map((val) => {
              return <Card key={val.id} {...val}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataView;
