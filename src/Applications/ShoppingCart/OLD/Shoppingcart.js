import React, { useEffect, useState } from "react";
import { data } from "./Data";
import ItemList from "./ItemList";
import "./style.scss";

const Shoppingcart = ({ title }) => {
  const [Items, setItems] = useState([]);
  

  useEffect(() => {
    title("Shpping Cart Function");
    setItems(data);
  }, [title]);

  return (
    <div>
      <ItemList Items={Items} setItems={setItems} ></ItemList>
    </div>
  );
};

export default Shoppingcart;
