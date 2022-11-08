import SimpleDate from "Components/ComponentBlock/SimpleDate";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import React from "react";

const Birthday = () => {
  const title = "Birthday Reminder";
  
  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center"></div>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  );
};

export default Birthday;
