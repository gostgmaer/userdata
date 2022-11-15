import React, { useEffect, useState } from "react";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import SimpleDate from "./Components/ComponentBlock/SimpleDate";
import Birthday from "Applications/BirthDayReminder/Birthday";
import ImageGallery from "Applications/ImageGallery/ImageGallery";
import Review from "Applications/Testomonial/Review";
import HotelListing from "Applications/HotelListing/HotelListing";
import Tours from "Applications/Tours/Tours";
import Accordian from "Applications/Accordian/NEW/Accordian";
import FoodList from "Applications/Rasterorent/FoodList";
import Tabs from "Applications/ReactTabs/Tabs";
import Modal from "Modal";
import Slider from "Applications/Slider/Slider";



const Skeliton = () => {
  const [title,setTitle]=useState("")
  return (
    <div>
      
      <SimpleHeading title={title}></SimpleHeading>
      <div className=" p-1 rounded-0 card text-center">
        {/* <Birthday setTitle={setTitle} ></Birthday> */}
         {/* <ImageGallery setTitle={setTitle} ></ImageGallery> */}
         {/* <Review setTitle={setTitle} ></Review> */}
         {/* <HotelListing setTitle={setTitle} ></HotelListing> */}
          {/* <Tours setTitle={setTitle} ></Tours> */}
         {/* <Accordian setTitle={setTitle} ></Accordian> */}
         {/* <Accordian setTitle={setTitle}></Accordian> */}
         {/* <FoodList setTitle={setTitle} ></FoodList> */}
         {/* <Modal></Modal> */}
         {/* <Tabs setTitle={setTitle} ></Tabs> */}
         <Slider setTtitle={setTitle} ></Slider>
         
        
        
      </div>

      <SimpleDate></SimpleDate>
    </div>
  );
};

export default Skeliton;
