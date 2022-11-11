import React, { useEffect, useState } from "react";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import SimpleDate from "./Components/ComponentBlock/SimpleDate";
import Birthday from "Applications/BirthDayReminder/Birthday";

const Skeliton = () => {
  const [title,setTitle]=useState("")
  return (
    <content>
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
        <Birthday setTitle={setTitle} ></Birthday>
      </div>

      <SimpleDate></SimpleDate>
    </content>
  );
};

export default Skeliton;
