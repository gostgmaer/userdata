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
import Loremiposm from "Applications/LoremIpsom/Loremiposm";
import ColorGenerator from "Applications/ColorGenerator.js/ColorGenerator";
import ShoppingList from "Applications/ShoppingList/ShoppingList";
import CartItemData from "Applications/ShoppingCart/CartItemData";
import Router from "Utils/Router";
import { useGlobalContext } from "Context/Contenxt";
// import Shoppingcart from "Applications/ShoppingCart/Shoppingcart";

const {datalog}=useGlobalContext
const Skeliton = () => {
  const [title, setTitle] = useState("");
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
        {/* <Slider setTtitle={setTitle} ></Slider> */}
        {/* <Loremiposm setTitle={setTitle} ></Loremiposm> */}
        {/* <ColorGenerator setTitle={setTitle}></ColorGenerator> */}
        {/* <ShoppingList title={setTitle} ></ShoppingList> */}
        {/* <Shoppingcart title={setTitle} ></Shoppingcart> */}
        {/* <CartItemData title={setTitle}></CartItemData> */}
        {/* <button onClick={datalog}>ButttonLog</button> */}
        <Router></Router>
      </div>

      <SimpleDate></SimpleDate>
    </div>
  );
};

export default Skeliton;
