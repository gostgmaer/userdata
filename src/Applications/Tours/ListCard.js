
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { REQUEST } from "../../api/APIService";

const ListCard = ({ Tours, setTours }) => {
  const [readMore, setreadMore] = useState(false);

  if (Tours.length !== 0) {
    console.log(Tours);
  }
  const listCard = {
    height: "20rem",
    objectFit: "cover",
  };
  const clickNotInterested = (id) => {
    console.log(id);
    let data = Tours.filter((tour) => tour.id !== id);
    setTours(data);
    console.log(data);
  };
  const refreshData = async () => {
    const data = await REQUEST(
      "https://course-api.com/",
      "react-tours-project",
      "get",
      "",
      "",
      "",
      ""
    );
    // console.log(data);
    setTours(data);
  };

  if (Tours.length === 0) {
    return (
      <div className="card col-12 text-center p-0 ">
        <div className="card-body">
          <button className="btn btn-outline-success" onClick={refreshData}>
            Refresh Data
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" listCard m-2  row">
        {Tours.map((tour) => {
          return (
            <div className="card col-6 p-0 " key={tour.id}>
              <img
                src={tour.image}
                className="card-img-top img-thumbnail "
                style={{
                  height: "20rem",
                  objectFit: "cover",
                }}
                alt={tour.name}
              />
              <div className="card-body">
                <div className=" d-flex m-2 ">
                  <span className=" fw-bold col-8 text-start">{tour.name}</span>
                  <h6 className="col-4 text-end text-success">
                    <span className=" rounded p-1 bg-success bg-opacity-10">
                      <BiDollar></BiDollar>
                      {tour.price}
                    </span>
                  </h6>
                </div>

                <p className="card-text">
                  {readMore ? tour.info : `${tour.info.substring(0, 20)}.....`}

                  {readMore ? (
                    <span
                     
                      onClick={(e) => setreadMore(false)}
                      className="btn text-primary"
                    >
                      Read Less
                    </span>
                  ) : (
                    <span
                     
                      onClick={(e) => setreadMore(true)}
                      className="btn text-primary"
                    >
                      Read More
                    </span>
                  )}
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => {
                    clickNotInterested(tour.id);
                  }}
                >
                  Not Interested
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ListCard;
