import React,{useEffect, useState} from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiCrosshair,
  BiEuro,
  BiPlus,
  BiTrash,
} from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import IncreaseDec from "./IncreaseDec";

const CartItem = ({
  title,
  images,
  price,
  _id,
  size,
  description,
  category,cost,
  brand,
  img,
  stock,setItems,Items,setcost
}) => {
  stock = Number(stock);
  const [count, setCount] = useState(1);
  const [total, settotal] = useState(0);
  useEffect(()=>{
    settotal(count*price)
    setcost=cost+total
  },[count, price, total])
  
  console.log(total);


  const deleteItems = (id)=>{
 
    setItems(Items.filter((item)=>item._id!==id))
  }
  return (
    <div class="row border-top border-bottom">
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={img} alt={title} />
        </div>
        <div class="col-4">
          <div class="row text-muted">{title}</div>
          <div class="row">
            {category}, {brand}
          </div>
        </div>
        <IncreaseDec count={count} setCount={setCount} ></IncreaseDec>
        <div class="col-3 d-flex text-end">
          <div className="col-8 text-center p-1">
            <span>
              <BiEuro></BiEuro> {price}
            </span>
          </div>
          <span className="col-4">
            <button class=" btn btn-outline-danger" onClick={()=>deleteItems(_id)}>
              <BiTrash></BiTrash>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
