import React,{useEffect, useState} from 'react'
import CopyrightBlock from './Parts/CopyrightBlock'
import moment from "moment/moment";
import BeforeCopuright from './Parts/BeforeCopuright';

import Logo from './Parts/Logo';
import SimpleDate from '../../Components/ComponentBlock/SimpleDate';

const Footer = () => {
    const [Year, setYear] = useState();
    
    const y = new Date();
    useEffect(()=>{
      setYear(moment(y).format("YYYY"))
    },[] )
   
  return (
    <footer className='footer bg-black text-light'>
      <Logo></Logo>
        <BeforeCopuright></BeforeCopuright>
        <SimpleDate></SimpleDate>
        <CopyrightBlock  Year={Year} ></CopyrightBlock>
    </footer>
  )
}

export default Footer