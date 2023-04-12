import React, { useState, useRef, useEffect } from "react";
import {
  notifySuccess,
  notifyerror,
} from "../../Utils/Notification/notify";
import "./styles.scss";
import { calcmock } from "../../Assets/Mock/MockData";
const date = new Date().toDateString();

const RetuenaCalculator = (second) => {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [keyvalue, SetKeyValue] = useState("");

  const inputRef = useRef(null);
  const setInputChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  });
  const clickValueHanlder = (e) => {
    setInput(input + e.target.name);
    console.log(input);
  };
  const calculateHandler = () => {
    console.log(input);
    try {
      setInput(eval(input).toString());
      setTimeout(() => {
        notifySuccess(
          `Your Calculated Data id ${eval(input).toString()}`,
          5000
        );
      }, 200);
    } catch (error) {
      notifyerror(`Please Enter Valid Data ${error}`, 5000);
    }
  };
  const backSpaceHandler = () => {
    setInput(input.slice(0, input.length - 1));
  };
  const clearHandler = () => {
    setInput("");
  };
  return (
    <div>
      <div>
        <div className=" col-8 m-auto">
          <div className=" m-2 rounded-3 card text-center">
            <div className="card-header bg-light">Calculator Page</div>
            <div className="form-group p-3">
              <label className=" pb-4">Calculator Application</label>
              <div>
                <div className="container">
                  <form>
                    <div className="col-4 m-auto">
                      <input
                        type="text"
                        className="form-control"
                        name="value"
                        value={input}
                        ref={inputRef}
                        onChange={setInputChange}
                        id="value"
                        placeholder="0.00"
                      />
                    </div>
                  </form>
                  <div className="card-body">
                    <div className="col-sm-5 m-auto ">
                      <div className="row  row-cols-4">
                        {calcmock.map((item) => (
                          <div key={item.id} className="col">
                            <button
                              onClick={clickValueHanlder}
                              name={item.value}
                              className="btn btn-outline-primary w-100 col"
                            >
                              {item.value}
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="text-center d-flex select_button">
                        <button
                          onClick={backSpaceHandler}
                          id="backSpace"
                          className="btn btn-warning flex-1 "
                        >
                          D
                        </button>
                        <button
                          onClick={clearHandler}
                          id="clear"
                          className="btn btn-danger flex-1 "
                        >
                          C
                        </button>
                        <button
                          onClick={calculateHandler}
                          id="calculate"
                          className="btn flex-3 btn-success"
                        >
                          =
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer text-muted">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RetuenaCalculator;
