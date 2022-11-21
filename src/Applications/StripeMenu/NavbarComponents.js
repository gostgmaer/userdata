import { useGlobalContext } from "Context/Contenxt";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

const NavbarComponents = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e)=>{
    console.log(e.target.textContent);
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = (tempBtn.left +tempBtn.right)/2;
    const bottom = tempBtn.bottom-3

    openSubmenu(page,{center,bottom})
  }
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
            <button className=" link-btn " onMouseOver={displaySubmenu} >products</button>
          </li>
          <li>
            <button className=" link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className=" link-btn " onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn" >Signin</button>
      </div>
    </nav>
  );
};

export default NavbarComponents;
