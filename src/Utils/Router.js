import Accordian from "Applications/Accordian/Accordian";
import AccordianData from "Applications/Accordian/NEW/AccordianData";
import Birthday from "Applications/BirthDayReminder/Birthday";
import Calculator from "Applications/Calculator/Calculator";
import LoginPage from "Applications/LoginPage/Login";
import UserDetails from "Applications/Navigation/UserDetails";
import Users from "Applications/Navigation/users";
import SearchFilter from "Applications/SearchFilter/SearchFilter";
import NotFound from "Components/404/NotFound";
import Login from "Components/Blocks/Login";
import Registration from "Components/Blocks/Registration";

import React from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="accordian" element={<Accordian></Accordian>}></Route>
        <Route path="calculator" element={<Calculator></Calculator>}></Route>
        <Route path="" element={<LoginPage></LoginPage>}></Route>
        <Route path="login" element={<Login></Login>}>
          <Route path="search" element={<SearchFilter></SearchFilter>}></Route>
          {/* <Route index element={<SearchFilter></SearchFilter>}></Route> */}
        </Route>
        <Route
          path="registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="users" element={<Users></Users>}>
          
        <Route path=':userID' element={<UserDetails></UserDetails>}></Route>
        </Route>
       
        {/* <Route path="users/2" element={<UserDetails></UserDetails>}></Route>
        <Route path="users/3" element={<UserDetails></UserDetails>}></Route> */}
           <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default Router;
