import Accordian from "Applications/Accordian/Accordian";
import Calculator from "Applications/Calculator/Calculator";
import LoginPage from "Applications/LoginPage/Login";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";

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
