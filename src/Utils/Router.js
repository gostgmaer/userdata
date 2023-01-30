

import React from "react";
import { Route, Routes } from "react-router-dom";
import Accordian from "../Applications/Accordian/Accordian";
import Birthday from "../Applications/BirthDayReminder/Birthday";
import Calculator from "../Applications/Calculator";
import ColorGenerator from "../Applications/ColorGenerator.js/ColorGenerator";
import ContactData from "../Applications/ContactList/ContactData";
import ExpanseTracker from "../Applications/ExpanseTRacker/ExpanseTracker";
import FoodRecipe from "../Applications/FoodRecipe/FoodRecipe";
import Homepage from "../Applications/Homepage/Homepage";
import HotelListing from "../Applications/HotelListing/HotelListing";
import ImageGallery from "../Applications/ImageGallery/ImageGallery";
import Login from "../Applications/LoginPage/Login";
import Loremiposm from "../Applications/LoremIpsom/Loremiposm";
import UserDetails from "../Applications/MultiStepForm/userDetails";
import Users from "../Applications/Navigation/users";
import PhotoGallery from "../Applications/PhotoGallery/PhotoGallery";
import Quizapp from "../Applications/QuizApp/Quizapp";
import Quotes from "../Applications/RandomQuote/Quotes";
import FoodList from "../Applications/Rasterorent/FoodList";
import Tabs from "../Applications/ReactTabs/Tabs";
import SearchFilter from "../Applications/SearchFilter/SearchFilter";
import ShoppingList from "../Applications/ShoppingList/ShoppingList";
import Slider from "../Applications/Slider/Slider";
import NotFound from "../Components/404/NotFound";
import Registration from "../Components/Blocks/Registration";

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/accordian" element={<Accordian></Accordian>}></Route>
        <Route path="/calculator" element={<Calculator></Calculator>}></Route>
        <Route path="" element={<Homepage></Homepage>}></Route>
        <Route path="/search" element={<SearchFilter></SearchFilter>}></Route>
        <Route path="/login" element={<Login></Login>}>
     

        
          {/* <Route index element={<SearchFilter></SearchFilter>}></Route> */}
        </Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}></Route>
        <Route path="/users" element={<Users></Users>}>
          <Route path=":userID" element={<UserDetails></UserDetails>}></Route>
        </Route>

        {/* <Route path="users/2" element={<UserDetails></UserDetails>}></Route>
        <Route path="users/3" element={<UserDetails></UserDetails>}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/slider" element={<Slider></Slider>}></Route>
        <Route path="/shopping-list" element={<ShoppingList></ShoppingList>}></Route>
        <Route path="/search-filter" element={<SearchFilter></SearchFilter>}></Route>
        <Route path="/tabs" element={<Tabs></Tabs>}></Route>
        <Route path="/quiz" element={<Quizapp></Quizapp>}></Route>
        <Route path="/image-gallery" element={<ImageGallery></ImageGallery>}></Route>
        <Route path="/loremiposm" element={<Loremiposm></Loremiposm>}></Route>
        <Route path="/food-recipe" element={<FoodRecipe></FoodRecipe>}></Route>
        <Route path="/expense-tracker" element={<ExpanseTracker></ExpanseTracker>}></Route>
        <Route path="/movie-listing" element={<HotelListing></HotelListing>}></Route>
        <Route path="/food-list" element={<FoodList></FoodList>}></Route> 
        <Route path="/quote" element={<Quotes></Quotes>}></Route>
        <Route path="/contact-data" element={<ContactData></ContactData>}></Route>
        <Route path="/color-generator" element={<ColorGenerator></ColorGenerator>}></Route>
        <Route path="/birth-day-list" element={<Birthday></Birthday>}></Route>

      </Routes>
    </React.Fragment>
  );
};

export default Router;
