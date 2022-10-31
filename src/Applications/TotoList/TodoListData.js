/* eslint-disable array-callback-return */
import React from "react";
import { BiEdit, BiTrash,BiCheckSquare } from "react-icons/bi";
const TodoListData = ({ todos, setTodos }) => {
  return (
    <div>
      <div className=" col-10  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">Basic Toto Data</div>
          <div className=" d-block">
            <section>
              <div className="p-2">
                {todos.map((todo) => {
                  console.log(todo);
                  <li key={todo.id}>
                    <input
                      type="text"
                      value={todo.name}
                      onChange={(e) => e.preventDefault()}
                      class="form-control"
                      name="listd"
                      id="listd"
                    />
                  </li>;
                })}
              </div>
            </section>

            <table className="table table-bordered table-hover table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr className="table-dark">
                  <th>ID</th>
                  <th> Name</th>
                  <th> CIty</th>
                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.id} </td>
                      <td>
                        <input
                          type="text"
                          value={val.name}
                          onChange={(e) => e.preventDefault()}
                          class="form-control"
                          name="tdataname"
                          id="tDataname"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={val.city}
                          onChange={(e) => e.preventDefault()}
                          class="form-control"
                          name="tCity"
                          id="tCity"
                        />
                      </td>
                      <td>
                        <div class="list-group">
                          <button
                            type="button"
                            class="list-group-item list-group-item-action"
                            aria-current="true"
                          >
                            <BiEdit></BiEdit>
                          </button>
                          <button
                            type="button"
                            class="list-group-item list-group-item-action"
                          >
                            <BiTrash></BiTrash>
                          </button>
                          <button
                            type="button"
                            class="list-group-item list-group-item-action"
                          >
                            
                            <BiCheckSquare></BiCheckSquare>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoListData;
