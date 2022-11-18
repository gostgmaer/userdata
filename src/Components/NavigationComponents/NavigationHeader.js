import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Socialnavigation from "./Socialnavigation";
import "./styles.scss";

const NavigationHeader = () => {
  return (
    <div className="navigationHeader">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
          <div className=" text-start">
           
            <NavLink className="navbar-brand" to="/">
              BOOTSTRAP
            </NavLink>
          </div>
          <div class=" d-flex" id="navbarSupportedContent">
            <div className="">
              <Navbar></Navbar>
            </div>
           
          </div>
          <div className="d-flex col-4 text-end">
              <Socialnavigation></Socialnavigation>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationHeader;
