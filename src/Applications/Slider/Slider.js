import React, { useEffect, useState } from "react";
import Data from "./Data";
import UI from "./UI";

const Slider = ({ setTtitle }) => {
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    setTtitle("Slider Application");
  }, []);
  // if (MovieList) {
  //   console.log("MovieList",MovieList);
  // }

  return (
    <div>
      <Data setMovieList={setMovieList}></Data>;
      <div className=" card col-5">
        <UI MovieList={MovieList} ></UI>
        {/* {MovieList.length!==0? MovieList["results"].map((movie) => {
          const {
            _id,
            image,
            title,
            rating,
            year,
            titleOriginal,
            uuid,
            description,
          } = movie;
          return (
            <div key={_id} class="carousel-item active">
              <img src={image} class="d-block w-100" alt={title} />
              <div class="carousel-caption bg-dark text-light">
                <h5>{title}</h5>
                <p>{`${description.substring(0, 140)}.....`}</p>
              </div>
            </div>
          );
        }):''} */}
      </div>
    </div>
  );
};

export default Slider;
