
import React, { useEffect } from "react";
import { REQUEST } from "../../api/APIService";

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
