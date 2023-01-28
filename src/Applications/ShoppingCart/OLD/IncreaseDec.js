import React from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiCrosshair,
  BiEuro,
  BiPlus,
  BiTrash,
} from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { notifyinfo } from "../../../Utils/Notification/notify";
const IncreaseDec = ({ count, setCount }) => {
    if (count<0) {
        setCount(0)
    notifyinfo("Item Quentity sound not be negative",2000)
        
    }
  return (
    <div class="col-3 d-flex">
      <button type="button" class="btn btn-light"     onClick={() => setCount(count - 1)}>
        <BiMinus></BiMinus>
      </button>

      <span className=" btn "> {count}</span>
      <button
        type="button"
        class="btn btn-light"
        onClick={() => setCount(count + 1)}
      >
        <BiPlus></BiPlus>
      </button>
    </div>
  );
};

export default IncreaseDec;
