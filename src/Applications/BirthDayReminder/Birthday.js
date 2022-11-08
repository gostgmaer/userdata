import SimpleDate from "Components/ComponentBlock/SimpleDate";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import React, { useEffect } from "react";
import Data from "./Data";
import List from "./List";

console.log(Data);
const Birthday = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Birthday Reminder");
  }, [setTitle]);

  return <React.Fragment>
    
  </React.Fragment>;
};

export default Birthday;
