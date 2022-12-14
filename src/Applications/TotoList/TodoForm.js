import React, { useEffect, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import {notifySuccess, notifydefault, notifyerror, notifyinfo,notifywarning} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";

function TodoForm({
  name,
  setName,
  city,
  setCity,
  toDos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const setNameEvent = (event) => {
    setName(event.target.value);
  };
  const setCityEvent = (event) => {
    setCity(event.target.value);
  };
//   const updateTodo = (name, city, id, complete) => {
//     const newTodo = toDos.map((todo) => {
//       todo.id === id ? { name, city, id, complete } : todo;
//     });

//     setTodos(newTodo);
//     setEditTodo("");
//   };
  const addTodoData = (e) => {
    e.preventDefault();
    setTodos([
        ...toDos,
        { id: uuidv4(), name: name, city: city, complete: false },
      ],  notifyerror(<div> Title: {name} and City: {city} has added  </div>,2000));
      setName("");
      setCity("");  
  };

  return (
    <div>
      <div className=" col-10  m-auto">
        <div className=" m-4 rounded-3 card text-center">
          <div className="card-header bg-light">Enter To Do data</div>
          <div className=" m-4 d-block">
            <div className=" d-flex">
              <div className=" col">
                <div className="mb-3 p-3 pb-0">
                  <input
                    type="text"
                    className="form-control"
                    name="nameFull"
                    value={name}
                    onChange={setNameEvent}
                    id="nameFull"
                    aria-describedby="helpId"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className=" col">
                <div className="mb-3  p-3 pb-0">
                  <select
                    className="form-select form-select-lg"
                    name="selectCity"
                    value={city}
                    onChange={setCityEvent}
                    id="selectCity"
                  >
                    <option defaultValue={null}>Select one City</option>
                    <option value="newDelhi">New Delhi</option>
                    <option value="instabul">Istanbul</option>
                    <option value="jakarta">Jakarta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" d-block">
              {" "}
              <button
                onClick={addTodoData}
                type="button"
                className="btn btn-primary"
              >
                <BiPlus></BiPlus> Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default TodoForm;
