import React from "react";

const Search = ({ setinput, input }) => {
  const setInputData = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className=" col-6 m-auto">
      <div className="form-group  text-center p-2">
        <input
          type="text"
          className="form-control "
          name="searchBox"
          id="searchBox"
          aria-describedby="helpId"
          onChange={setInputData}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
