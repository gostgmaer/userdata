import React, { useState } from "react";
import { BiMenu, BiToggleRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Socialnavigation from "./Socialnavigation";
import "./ComponentStyles.scss";
import { REQUEST } from "../../api/APIService";



const CustomNavigationDesign = () => {
  const [showMenuPanel, setshowMenuPanel] = useState(false);
  const [text, settext] = useState('false');

  const hamburgerHandler = () => {
    setshowMenuPanel(!showMenuPanel);
  };
const btnClickhandler = async()=>{
  let res = await REQUEST('https://youtube-music1.p.rapidapi.com/v2/','search','get','', {
    'X-RapidAPI-Key': '8842f2a974msh6b0949e628a5e32p13683ejsn3912b12003ed',
    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
  },{query: 'eminem'},''  )
  console.log(res);
  
}
  return (
    <header className="navigation container">
      <nav className="col-12 d-flex align-items-center">
        <div className="text-start col-sm-1  col-6">
          <Brand></Brand>
        </div>
        <div className=" col-sm-11 col-6 d-none d-sm-flex">
          <div className="col-8">
            <Navbar></Navbar>
          </div>
          <div className="col-4">
            <Socialnavigation></Socialnavigation>
          </div>
        </div>
        <div className="col-6 d-block d-sm-none text-end">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={hamburgerHandler}
          >
            {showMenuPanel ? <RiCloseLine></RiCloseLine> : <BiMenu></BiMenu>}
          </button>
        </div>
        {/* <Button classes='btn btn-info' btntext={text} event={btnClickhandler} ></Button> */}
      </nav>
     <div> {showMenuPanel ? (
        <div className="p-0 d-block d-sm-none hambergurPanel">
         
          <Navbar></Navbar>
        </div>
      ) : (
        ""
      )}</div>
    </header>
  );
};

export default CustomNavigationDesign;
