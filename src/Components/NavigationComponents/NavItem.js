import React from "react";
import { NavLink,Link } from "react-router-dom";

const NavItem = ({ id, text, url, icon }) => {
  return (
    <li className="NavItem">
      <Link className=" nav-link p-2 nav-link px-2 h5" to={url} title={text}>
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
