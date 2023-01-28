import React, { useEffect, useState } from "react";
import Data from "./Data";
import UI from "./UI";

const Slider = () => {
  const [MovieList, setMovieList] = useState([]);

  // if (MovieList) {
  //   console.log("MovieList",MovieList);
  // }

  return (
    <div>
      <Data setMovieList={setMovieList}></Data>;
      <div className=" card col-5">
        <UI MovieList={MovieList} ></UI>
      </div>
    </div>
  );
};

export default Slider;
