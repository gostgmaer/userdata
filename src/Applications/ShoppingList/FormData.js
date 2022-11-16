import React, { useEffect } from "react";
import { BiCart, BiDollar, BiPhone } from "react-icons/bi";
import { push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { notifyerror } from "Utils/Notification/notify";

const FormData = ({
  setItemsList,
  ItemsList,
  setprice,
  price,
  itemName,
  setitemName,
  button,
  selectItem,
}) => {
  const updateItem = async (id, itemName, price) => {
    const newItem = ItemsList.map((item) =>
      item.id === id ? { id, itemName, price } : item
    );
    setItemsList(newItem);
  };
  useEffect(() => {
    if (selectItem) {
      setitemName(selectItem.itemName);
      setprice(selectItem.price);
    }
  });

  const addItems = (e) => {
    e.preventDefault();
    let data = { price: price, item: itemName, id: uuidv4() };
    // if (ItemsList.findIndex((item) => item.itemName === itemName)) {

    // } else {
    //   notifyerror("Please Change Item Name", 2000);
    // }
    setItemsList([...ItemsList, data]);
  };
  const editItems = (e) => {
    updateItem();
  };
  const handleitem = (e) => {
    setitemName(e.target.value);
  };
  const handlePrice = (e) => {
    setprice(e.target.value);
  };
  return (
    <div>
      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">
            Please Fill te Form To Continue
          </div>
          <div className="form-group  p-5">
            <form className="d-block">
              <div className=" m-auto d-flex">
                <div className="mb-3 p-3 col-6 pb-0 d-flex">
                  <span className="input-group-text" id="addon-wrapping">
                    <BiCart></BiCart>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleitem}
                    name="item"
                    value={itemName}
                    id="item"
                    aria-describedby="helpId"
                    placeholder="Item Name"
                  />
                </div>
                <div className="mb-3 p-3 col-6 pb-0 d-flex">
                  <span className="input-group-text" id="addon-wrapping">
                    <BiDollar></BiDollar>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    name="price"
                    id="price"
                    onChange={handlePrice}
                    aria-describedby="helpId"
                    placeholder="Price"
                  />
                </div>
              </div>
            </form>

            <div className=" d-block">
              <div className="col-12">
                <div className="mb-3 p-3 pb-0">
                  {button ? (
                    <button
                      type="button"
                      className="btn btn-primary col-4"
                      onClick={addItems}
                    >
                      Add Item
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary col-4"
                      onClick={editItems}
                    >
                      Edit Item
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
