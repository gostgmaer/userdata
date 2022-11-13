import React , { useEffect } from "react";
import Data from "./Data";

const FoodList = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Stock Sector People");
  }, []);
  return (
    <div>
      <Data></Data>
    </div>
  );
};

export default FoodList;
