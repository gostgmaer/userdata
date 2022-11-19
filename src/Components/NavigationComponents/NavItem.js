import React from "react";
import { NavLink,Link } from "react-router-dom";

const NavItem = ({ id, text, url, icon }) => {
  return (
    <li className="NavItem">
      <NavLink className="nav-link px-2 text-black" to={url} title={text}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
