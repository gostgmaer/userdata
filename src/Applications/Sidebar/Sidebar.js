import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Button from "Resuable/Button/Button";
import Modal from "./Modal";
import SidebarComponent from "./SidebarComponent";
import "./stylees.scss";

const Sidebar = () => {
  const [addClass, setaddClass] = useState("");
  const [showHide, setshowHide] = useState(true);
  const [showsidebar, setshowsidebar] = useState("");
  const [SidebarStyles, setSidebarStyles] = useState({});
  const hambergerEvent = () => {
    setshowHide(!showHide);
    setshowsidebar("show-sidebar");
    console.log(showHide);
    setSidebarStyles({ position: "fixed" });
  };
  const btntext = () => {
    return <div> {showHide ? <BiMenu /> : <GrClose />}</div>;
  };
  const showModal = () => {
    setaddClass("show-modal");
  };
  return (
    <div className="sidebar-page">
      <Button
        classes="btn btn-primary"
        btntext={btntext()}
        event={hambergerEvent}
      ></Button>
      <SidebarComponent
        showsidebar={showsidebar}
        SidebarStyles={SidebarStyles}
        setSidebarStyles={setSidebarStyles}
        setshowsidebar={setshowsidebar}
        setshowHide={setshowHide}
        showHide={showHide}
      ></SidebarComponent>

      <div>
        <Button
          classes=" btn btn-secondary"
          btntext="Show Modal"
          event={showModal}
        ></Button>
      </div>
      <Modal addClass={addClass} setaddClass={setaddClass}></Modal>
    </div>
  );
};

export default Sidebar;
