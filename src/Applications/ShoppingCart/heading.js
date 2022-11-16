import React from "react";
import { BiCart } from "react-icons/bi";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const {amount}=useGlobalContext()
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
         <BiCart></BiCart>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
