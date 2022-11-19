import React, { useState } from "react";
import { BiMenu, BiToggleRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Socialnavigation from "./Socialnavigation";
import "./ComponentStyles.scss";

const CustomNavigationDesign = () => {
  const [showMenu, setshowMenu] = useState(false);

  const hamburgerHandler = () => {
    setshowMenu(!showMenu);
  };
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
            class="btn btn-outline-dark"
            onClick={hamburgerHandler}
          >
            {showMenu ? <RiCloseLine></RiCloseLine> : <BiMenu></BiMenu>}
          </button>
        </div>
      </nav>
      {showMenu?<div className="p-0 hambergurPanel"> <Navbar></Navbar></div>:''}
    </header>
  );
};

export default CustomNavigationDesign;
