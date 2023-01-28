
import React, { useEffect,useState } from "react";
import Data from "./data";
import List from "./LIst";

const Birthday = ({ setTitle }) => {

const [DataRes, setDataRes] = useState([]);

  useEffect(() => {
    setTitle("Birthday Reminder");
    setDataRes(Data)
  }, [setTitle]);

  return <React.Fragment>
    <List DataRes={DataRes} setDataRes={setDataRes} ></List>
  </React.Fragment>;
};

export default Birthday;
