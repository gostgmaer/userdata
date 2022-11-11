import SimpleDate from "Components/ComponentBlock/SimpleDate";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import React, { useEffect } from "react";
import List from "./List";

const Birthday = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Birthday Reminder");
  }, [setTitle]);

  return <React.Fragment>
    <List></List>
  </React.Fragment>;
};

export default Birthday;
