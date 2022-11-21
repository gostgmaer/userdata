import { useGlobalContext } from "Context/Contenxt";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

const NavbarComponents = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className=" nav-header">
          <RiReactjsFill></RiReactjsFill>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <BiMenu></BiMenu>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className=" link-btn ">products</button>
          </li>
          <li>
            <button className=" link-btn ">developers</button>
          </li>
          <li>
            <button className=" link-btn ">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Signin</button>
      </div>
    </nav>
  );
};

export default NavbarComponents;
