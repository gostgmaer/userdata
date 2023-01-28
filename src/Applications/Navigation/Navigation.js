
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Accordian from "../Accordian/Accordian";
import Calculator from "../Calculator";
import LoginPage from "../LoginPage/Login";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Accordian></Accordian>}></Route>
        <Route path="cal" element={<Calculator></Calculator>}></Route>
        <Route path="*" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
