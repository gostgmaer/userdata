import React from "react";

const FilterButton = ({ People, setinput }) => {
  let newArray = [];

  People.forEach((element) => {
    newArray.push(element.stockSector);
  });
//   console.log(newArray);
  let array = newArray.filter(
    (data, index) => newArray.indexOf(data) === index
  );
//   console.log(array);

  const setInputElement = (data) => {
    console.log(data);
    setinput(data);
  };
  return (
    <div className=" p-2">
      {array.map((data) => {
        return (
          <button key={data}
            type="button"
            className="btn m-1 btn-primary"
            onClick={() => setInputElement(data)}
          >
            {data}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButton;
