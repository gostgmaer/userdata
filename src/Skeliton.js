import React, { useEffect, useState } from "react";
import SimpleDate from "./Components/ComponentBlock/SimpleDate";
import { useGlobalContext } from "./Context/Contenxt";
import Router from "./Utils/Router";

// import Shoppingcart from "Applications/ShoppingCart/Shoppingcart";



const Skeliton = () => {
  const { datalog } = useGlobalContext;
  const [title, setTitle] = useState("");
  return (
    <div>
      <div className=" p-1 rounded-0 card text-center">
        <Router></Router>
      </div>

      <SimpleDate></SimpleDate>
    </div>
  );
};

export default Skeliton;
