import React, { useState, useRef, useEffect } from "react";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";
import {
  FaBackspace,
  FaDoorClosed,
  FaEquals,
  FaRegWindowClose,
} from "react-icons/fa";
import { BiCalendarCheck, BiEqualizer } from "react-icons/bi";
const date = new Date().toDateString();
function Calculator() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  
  const [keyvalue,SetKeyValue]=useState("");


  const inputRef = useRef(null)
const setInputChange = (event) =>{
  setInput(event.target.value)
  console.log(input);
}
useEffect(()=>{
  inputRef.current.focus()

})
const clickValueHanlder = (e)=>{
setInput(input + e.target.name)

}
const calculateHandler = ()=>{
  try {
    setInput(eval(input).toString());
    notifySuccess(`Your Calculated Data id ${input}`,5000) 
  } catch (error) {
    notifyerror(`Please Enter Valid Data ${error}`,5000)
    
  }

}
const backSpaceHandler = ()=>{
  setInput(input.slice(0,input.length-1))
}
const clearHandler = ()=>{
  setInput("")
  
}
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
                  <div className=" card-body">
                    <div className=" m-auto pb-4">
                      
                      <span> {input} </span>
                    </div>
                    <div className="col-sm-10 m-auto ">
                      <div className="text-center select_button">
                        <button onClick={clickValueHanlder}
                          name="7"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          7
                        </button>
                        <button onClick={clickValueHanlder}
                          name="8"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          8
                        </button>
                        <button onClick={clickValueHanlder}
                          name="9"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          9
                        </button>
                        <button onClick={clickValueHanlder}
                          name="/"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          /
                        </button>
                      </div>

                      <div className="text-center select_button">
                        <button onClick={clickValueHanlder}
                          name="4"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          4
                        </button>
                        <button onClick={clickValueHanlder}
                          name="5"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          5
                        </button>
                        <button onClick={clickValueHanlder}
                          name="6"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          6
                        </button>
                        <button onClick={clickValueHanlder}
                          name="*"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          x
                        </button>
                      </div>
                      <div className="text-center select_button ">
                        <button onClick={clickValueHanlder}
                          name="1"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          1
                        </button>
                        <button onClick={clickValueHanlder}
                          name="2"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          2
                        </button>
                        <button onClick={clickValueHanlder}
                          name="3"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          3
                        </button>
                        <button onClick={clickValueHanlder}
                          name="-"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          -
                        </button>
                      </div>
                      <div className="text-center select_button">
                        <button onClick={clickValueHanlder}
                          name="0"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          0
                        </button>
                        <button onClick={clickValueHanlder}
                          name="."
                          className="btn btn-outline-primary col-sm-1"
                        >
                          .
                        </button>
                        <button onClick={clickValueHanlder}
                          name="00"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          00
                        </button>
                        <button onClick={clickValueHanlder}
                          name="+"
                          className="btn btn-outline-primary col-sm-1"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-center select_button">
                        <button onClick={backSpaceHandler}  id="backSpace" className="btn btn-warning col-sm-1">
                          D
                        </button>
                        <button onClick={clearHandler}  id="clear" className="btn btn-danger col-sm-1">
                          C
                        </button>
                        <button onClick={calculateHandler}
                         
                          id="calculate"
                          className="btn btn-success col-sm-2"
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Calculator;
