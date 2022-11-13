import React from 'react'
import { useEffect } from 'react';
import Data from "./Data";
// import './styles.scss'
import { useState } from "react";
const Accordian = ({setTitle}) => {
  const [Questions, setQuestions] = useState();
   

    useEffect(() => {
    setTitle("Accordian Project")
    }, []);
  
  return (
    <div>
       <Data Questions={Questions} setQuestions={setQuestions} ></Data>

        
    </div>
  )
}

export default Accordian