import React, { useEffect, useState } from "react";

import { useRef } from "react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../../Context/Contenxt";

const SubmenuComponents = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [Column, setColumn] = useState('col-2');
  
  useEffect(() => {
    setColumn('col-2')
    const subMenu = container.current;
    const { center, bottom } = location;
    subMenu.style.left = `${center}px`;
    subMenu.style.top = `${bottom}px`;
    if (links.length===3) {
      setColumn('col-3')
    }else if(links.length>3){
      setColumn('col-4')
    }
  },[location,links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${Column}`}>
      {links.map((link,index)=>{
        const {label,icon,url}=link
        return <Link to={url} key={index}>{icon}{label}</Link>
      })}
      </div>
    </aside>
  );
};

export default SubmenuComponents;
