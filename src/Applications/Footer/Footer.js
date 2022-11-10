import React,{useEffect, useState} from 'react'
import CopyrightBlock from './Parts/CopyrightBlock'
import moment from "moment/moment";

const Footer = () => {
    const [Year, setYear] = useState();
    const y = new Date();
    console.log(moment(y).format("YYYY"));
    useEffect(()=>{
        setYear(moment(y).format("YYYY"))
    }, [y])
  return (
    <footer className='footer bg-black text-light'>

        <CopyrightBlock  Year={Year} ></CopyrightBlock>
    </footer>
  )
}

export default Footer