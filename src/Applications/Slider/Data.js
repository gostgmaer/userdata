
import React, { useEffect, useState } from "react";
import { REQUEST } from "../../api/APIService";
import { cleanQueryparam } from "../../Utils/OthersUtilities";

const Data = ({ setMovieList }) => {
  const [query, setquery] = useState("");
  let params = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RapidAPIKEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
    params: {
      titleType: "",
      genre: "",
      list: "",
      sort: "",
      limit: "50",
      endYear: "",
      year: "",
      info: "",
      page: "1",
      startYear: "",
    },
  };
  cleanQueryparam(params.params);
  useEffect(() => {
    apicall();
  }, []);

  let apicall = async () => {
    let res = await REQUEST(
      "https://moviesdatabase.p.rapidapi.com/",
      "titles",
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
