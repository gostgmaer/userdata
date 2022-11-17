import React, { useEffect } from "react";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Context";
import Navbar from "./heading";
import "./styles.scss";


const CartItemData = ({ title }) => {
  useEffect(() => {
    title("Shopping Cart");
  });
const {loading}=useGlobalContext()

  if (loading) {
    return (  
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    
    <div className="shoppping ">
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </div>
  );
};

export default CartItemData;
