import React from "react";
import { NavURL } from "./Data";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <ul className="nav">
      {NavURL.map((nav) => {
        return <NavItem key={nav.id} {...nav}></NavItem>;
      })}
    </ul>
  );
};

export default Navbar;
