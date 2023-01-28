

import React from "react";
import { Route, Routes } from "react-router-dom";
import Accordian from "../Applications/Accordian/Accordian";
import Calculator from "../Applications/Calculator";
import Homepage from "../Applications/Homepage/Homepage";
import Login from "../Applications/LoginPage/Login";
import UserDetails from "../Applications/MultiStepForm/userDetails";
import Users from "../Applications/Navigation/users";
import SearchFilter from "../Applications/SearchFilter/SearchFilter";
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
      </Routes>
    </React.Fragment>
  );
};

export default Router;
