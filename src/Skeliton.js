import React, { useEffect, useState } from "react";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import SimpleDate from "./Components/ComponentBlock/SimpleDate";
import Birthday from "Applications/BirthDayReminder/Birthday";
import ImageGallery from "Applications/ImageGallery/ImageGallery";

const Skeliton = () => {
  const [title,setTitle]=useState("")
  return (
    <div>
      
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
        {/* <Birthday setTitle={setTitle} ></Birthday> */}
        <ImageGallery setTitle={setTitle} ></ImageGallery>
      </div>

      <SimpleDate></SimpleDate>
    </div>
  );
};

export default Skeliton;
