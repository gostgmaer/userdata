import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListData from "./TodoListData";

const date = new Date().toDateString();
function TodoList() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div>
      <div className=" col-12  m-auto">
        <div className=" m-5 rounded-3 card text-center">
          <div className="card-header bg-light">Basic Toto List</div>
          <label className=" p-4">
            Please provide Necessary Data for Continue Registration
          </label>

          <TodoForm
            
          
          
            name={name}
            setName={setName}
            setCity={setCity}
            city={city}
            toDos={todos}
            setTodos={setTodos}
            // editTodo={editTodo}
            // setEditTodo={setEditTodo}
           
          />

          <TodoListData todos={todos} setTodos={setTodos} ></TodoListData>

          <div className="card-footer text-muted">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
