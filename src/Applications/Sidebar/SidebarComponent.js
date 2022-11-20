import Navbar from "Components/NavigationComponents/Navbar";
import React from "react";
import { useState } from "react";
import { BsAlarmFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";

const SidebarComponent = ({
  showsidebar,
  setshowsidebar,
  setshowHide,
  showHide,
  SidebarStyles,
  setSidebarStyles,
}) => {
  const toggleSidebar = () => {
    setshowsidebar("");
    setshowHide(!showHide);
    setSidebarStyles({ position: "relative" });
  };
  return (
    <aside className="sidebar-overlay" style={SidebarStyles}>
      {showHide ? (
        ""
      ) : (
        <aside className={`sidebar ${showsidebar}`}>
          <div className="sidebar-header">
            <BsAlarmFill></BsAlarmFill>{" "}
            <button className="btn btn-info" onClick={toggleSidebar}>
              <RiCloseLine></RiCloseLine>
            </button>
          </div>
          <div className="sidebar-body">
            <Navbar></Navbar>
          </div>
        </aside>
      )}
    </aside>
  );
};

export default SidebarComponent;
