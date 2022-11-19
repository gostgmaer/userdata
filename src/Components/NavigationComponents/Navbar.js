import React from "react";
import { NavURL } from "./Data";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      {NavURL.map((nav) => {
        return <NavItem key={nav.id} {...nav}></NavItem>;
      })}
    </ul>
  );
};

export default Navbar;
