
import React, { useEffect,useState } from "react";
import Data from "./data";
import List from "./LIst";

const Birthday = () => {

const [DataRes, setDataRes] = useState([]);

  useEffect(() => {
  
    setDataRes(Data)
  }, []);

  return <React.Fragment>
    <List DataRes={DataRes} setDataRes={setDataRes} ></List>
  </React.Fragment>;
};

export default Birthday;
