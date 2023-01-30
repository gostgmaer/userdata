import React, { useEffect, useState } from "react";
import ColorLists from "./ColorLists";
import Form from "./Form";

const ColorGenerator = () => {
  let style ={
    borderCoder: "red"
  }
  const [colorsList, setcolorsList] = useState([]);
  const [inputValue, setinputValue] = useState("");
 


 

 




  return (
    <div>
      <Form
        setvalue={setinputValue}
     
        value={inputValue}
        list={setcolorsList}
      ></Form>
      <div className="d-flex col-12 flex-wrap">
        {colorsList.map((color, index) => {
        //  console.log(color,index++);
          return <ColorLists key={index} {...color} index={index}></ColorLists>;
        })}
      </div>
    </div>
  );
};

export default ColorGenerator;
