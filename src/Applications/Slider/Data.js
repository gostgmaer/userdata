import { REQUEST } from "api/APIService";
import React, { useEffect, useState } from "react";

const Data = ({ setMovieList }) => {
  const [query, setquery] = useState("");
  let params = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RapidAPIKEY,
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
    params: {
      page: "",
      limit: "20",
      sort: "year",
      type: "movies",
      query: "Ok",
      year: "",
      genres: "accion",
    },
  };
  useEffect(() => {
    apicall();
  }, [query]);

  let apicall = async () => {
    let res = await REQUEST(
      "https://movies-app1.p.rapidapi.com/api/",
      "movies",
      "get",
      "",
      params.headers,
      params.params,
      ""
    );
    setMovieList(res);
   
  };
};

export default Data;
