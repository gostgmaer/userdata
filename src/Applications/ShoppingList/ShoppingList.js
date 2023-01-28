import React, { useEffect, useState } from "react";
import FormData from "./FormData";
import ListShow from "./ListShow";

const ShoppingList = () => {
  const [itemName, setitemName] = useState("");
  const [price, setprice] = useState("");
  const [ItemsList, setItemsList] = useState([]);
  const [selectItem, setselectItem] = useState(null);
  const [button, setbutton] = useState(true);
 
  console.log(selectItem);
  // console.log(ItemsList);
  return (
    <div>
      <FormData
        setprice={setprice}
        ItemsList={ItemsList}
        price={price}
        itemName={itemName}
        button={button}
        setitemName={setitemName}
        setItemsList={setItemsList}
        selectItem={selectItem}
        setbutton={setbutton}></FormData>

      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 d-flex card text-center">
          <div className="card-header bg-light">
            Please Fill te Form To Continue
          </div>
          <ul class="list-group list-group-numbered">
            {ItemsList.map((item, index) => {
              return (
                <ListShow
                  setbutton={setbutton}
                  setselectItem={setselectItem}
                  setItemsList={setItemsList}
                  ItemsList={ItemsList}
                  key={index}
                  {...item}></ListShow>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
