import "./App.css";
import Header from "./Components/ComponentsParts/Headers/Header";
import React, { useState } from "react";
import Skeliton from "Skeliton";
import Footer from "Applications/Footer/Footer";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Accordian from "Applications/Accordian/Accordian";
import Calculator from "Applications/Calculator/Calculator";
import LoginPage from "Applications/LoginPage/Login";
import Router from "Utils/Router";
import NavigationHeader from "Components/NavigationComponents/NavigationHeader";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavigationHeader></NavigationHeader>
      <Skeliton></Skeliton>
      {/* <Router></Router> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
