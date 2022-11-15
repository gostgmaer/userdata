import React from "react";
import { BiColorFill, BiMagnet } from "react-icons/bi";
import { notifyerror } from "Utils/Notification/notify";
import Values from "values.js";
const Form = ({ setvalue, value, seterror, list }) => {
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleSubmitColor = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(value).all(0.5);
      // console.log(colors);
      list(colors);
       console.log(colors);
    } catch (error) {
      seterror(true);
      notifyerror(`value "${value}" is not corruct format`, 2000);
      console.log(error);
    }
  };
  return (
    <div className=" col-5 m-auto">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="#Fdfs54"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={handleSubmitColor}
        >
          <BiColorFill></BiColorFill>Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
