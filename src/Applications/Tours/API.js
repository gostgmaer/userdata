import { REQUEST } from "api/APIService";
import React, { useEffect } from "react";

const API = ({ setTours }) => {
  useEffect(() => {
    req();
  }, []);
  const req = async () => {
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

};

export default API;
