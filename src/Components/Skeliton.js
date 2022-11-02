import React from "react";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";

const Skeliton = ({title, setTitle}) => {
  return (
    <React.Fragment>
      <div className="rounded-0 card  text-center">
        <div className="card-header bg-light">{title}</div>
      </div>

      <ToastContainer></ToastContainer>
    </React.Fragment>
  );
};

export default Skeliton;
