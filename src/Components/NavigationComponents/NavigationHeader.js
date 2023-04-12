import React, { useState } from "react";
import { BiMenu, BiToggleRight } from "react-icons/bi";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { FaCross, FaFacebook } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Brand from "./Brand";
import Navbar from "./Navbar";
import Socialnavigation from "./Socialnavigation";
import "./styles.scss";

const NavigationHeader = () => {
  const [showMenu, setshowMenu] = useState(false);

  const hanburgerHandler = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className="NavigationHeader">
      <header className="navigationHeader">
        <nav className="navbar navbar-light bg-light">
          <div className="container ">
            <div className="">
              <Brand></Brand>
            </div>
            <div className=" d-flex navigation-container d-none d-sm-flex">
              <div className=" d-flex" id="navbarSupportedContent">
                <div className="">
                  <Navbar></Navbar>
                </div>
              </div>
              {/* <div className="d-flex  col-4 text-end">
                <Socialnavigation></Socialnavigation>
              </div> */}
            </div>
            <div className="d-block d-sm-none">
              <button
                type="button"
                className="btn btn-primary"
                onClick={hanburgerHandler}
              >
                {showMenu ? <RiCloseLine></RiCloseLine> : <BiMenu></BiMenu>}
              </button>
            </div>
          </div>
        </nav>
        <div className=" mobile-header d-block d-sm-none">
          {showMenu ? <Navbar></Navbar> : ""}
        </div>
      </header>
    </div>
  );
};

export default NavigationHeader;
