import "./App.css";
import Header from "./Components/ComponentsParts/Headers/Header";
import React, { useState } from "react";
import Footer from "Components/ComponentsParts/Footer";
import Skeliton from "Skeliton";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Skeliton></Skeliton>
      <Footer></Footer>
    </div>
  );
}

export default App;
