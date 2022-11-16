import React,{useState} from "react";
import { BiEdit, BiTrash } from "react-icons/bi";


const ListShow = ({ price, item, id, ItemsList, setItemsList,idName,setbutton,setselectItem }) => {

  const editListBox =  (e) => {
   const dataItem =   ItemsList.find((item)=>item.id===e)
   setselectItem(dataItem)
   setbutton(false)
  };
  const deleteItem = async (e) => {
    setItemsList(ItemsList.filter((data) => data.id !== e));
   
  };
  return (
    <div>
      <li class="list-group-item d-flex">
        <div className="col-7 text-start">
          <span>{item}</span> ${price}
        </div>
        <div className=" col-5 text-end">
          <div className="list-group list-group-horizontal m-0">
            <button
              type="button"
              onClick={(e)=>editListBox(id)}
              className="list-group-item text-light bg-info  me-1"
              aria-current="true"
            >
              <BiEdit></BiEdit>
            </button>
            <button
              type="button"
              className="list-group-item me-1 text-light bg-warning"
              onClick={(e) => deleteItem(id)}
            >
              <BiTrash></BiTrash>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ListShow;
