import React,{useEffect, useState} from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiEuro,
  BiPlus,
} from "react-icons/bi";
import CartItem from "./CartItem";

import { data } from "./Data";

const ItemList = ({ Items, setItems}) => {
    const [count, setCount] = useState(1);
    const [cost, setcost] = useState();
useEffect(()=>{
    Items.map((a)=>{
        a[count]=count
    })
    let data = Items.map((sum,a)=>sum.price)
    console.log(data);
   setcost( data.reduce((a, b) => a + b, 0))
    
},[Items])
   
  return (
    <div className="shopping-items m-5">
      <div class="card ">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Your Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  {Items.length} items
                </div>
              </div>
            </div>
            {Items.map((item)=>{
                
                item["img"]=item['images'][0]
                
                    return  <CartItem key={item._id} {...item} cost={cost} setcost={setcost} count={count} setCount={setCount} Items={Items} setItems={setItems} ></CartItem>
            })}
           

            <button class="back-to-shop btn btn-light">
              <BiArrowFromRight></BiArrowFromRight>
              <span class="text-muted">Back to shop</span>
            </button>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div class="row">
              <div class="col" style={{ paddingLeft: 0 }}>
                ITEMS 3
              </div>
              <div class="col text-right">&euro; {cost}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option class="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div class="row">
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right">&euro; 137.00</div>
            </div>
            <button class="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
