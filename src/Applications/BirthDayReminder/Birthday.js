import SimpleDate from "Components/ComponentBlock/SimpleDate";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import React, { useEffect,useState } from "react";
import List from "./List";
import Data from "./Data";
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
