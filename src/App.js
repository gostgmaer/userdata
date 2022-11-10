import "./App.css";
import Header from "./Components/ComponentsParts/Headers/Header";
import React, { useState } from "react";
import Skeliton from "Skeliton";
import Footer from "Applications/Footer/Footer";

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
