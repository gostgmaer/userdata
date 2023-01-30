import React, { useEffect, useState } from "react";
import { BiColorFill, BiMagnet } from "react-icons/bi";

import Values from "values.js";
import { notifyerror } from "../../Utils/Notification/notify";
const Form = ({ setvalue, value, list }) => {
  const [validField, setValidField] = useState(true);
  const [errorColor, setErrorColor] = useState({ borderCoder: "red" });
  const [error, seterror] = useState("");

  useEffect(() => {
    if (value !== "") {
      setValidField(false);
      setErrorColor({ borderCoder: "none" });
    }
  }, [value]);

  const handleSubmitColor = (e) => {
    e.preventDefault();
    if (value === "") {
      seterror("Field Should Not be Blank");
      notifyerror("Field Should Not be Blank", 2000);
    } else {
      try {
        let colors = new Values(value).all(0.1);
        list(colors);
        console.log(colors);
      } catch (error) {
        notifyerror(error.message, 2000);
      }
    }
  };
  return (
    <div className=" col-5 m-auto">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="#Fdfs54"
          aria-describedby="button-addon2"
          style={errorColor}
          onChange={(e) => setvalue(e.target.value)}
        />
      
        <button
          className="btn btn-outline-primary"
          type="button"
          disabled={validField}
          id="button-addon2"
          onClick={handleSubmitColor}>
          <BiColorFill></BiColorFill>Submit
        </button>
      </div>
     {error && <label style={{color:'red'}} >{error}</label>}
    </div>
  );
};

export default Form;
