import "./App.css";
import Header from "./Components/ComponentsParts/Headers/Header";
import React, { useState } from "react";
import Skeliton from "Skeliton";
import Footer from "Applications/Footer/Footer";
import { useGlobalContext } from "Context/Contenxt";
import ShoppingList from "Applications/ShoppingList/ShoppingList";

function App() {
  const { loading } = useGlobalContext();
  return (
    <div className="App">
      <Header></Header>
      <Skeliton></Skeliton>
      <ShoppingList></ShoppingList>
      <Footer></Footer>
    </div>
  );
}

export default App;
