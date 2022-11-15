import React, { useEffect, useState } from "react";
import ColorLists from "./ColorLists";
import Form from "./Form";

const ColorGenerator = ({ setTitle }) => {
  const [colorsList, setcolorsList] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [error, seterror] = useState(false);

  useEffect(() => {
    setTitle("Color Generator Aplication");
    console.log(inputValue);
  }, [inputValue]);
  return (
    <div>
      <Form
        setvalue={setinputValue}
        error={error}
        seterror={seterror}
        value={inputValue}
        list={setcolorsList}
      ></Form>
      <div class="d-flex col-12 flex-wrap">
        {colorsList.map((color, index) => {
        //  console.log(color,index++);
          return <ColorLists key={index} {...color} index={index}></ColorLists>;
        })}
      </div>
    </div>
  );
};

export default ColorGenerator;
