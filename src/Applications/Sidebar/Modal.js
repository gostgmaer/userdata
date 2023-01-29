
import React, { useState } from "react";
import { RiCloseFill, RiCloseLine } from "react-icons/ri";
import Calculator from "../Calculator/Calculator";

const Modal = ({ addClass, setaddClass }) => {
  const closeBtn = () => {
    setaddClass("");
  };
  return (
    <div className={`modal-overlay ${addClass} `}>
      <div className="modal-container">
        <div className="modal-dialog col-12" role="document">
          <div className="modal-content">
            <div className="modal-header col-12 ps-4 pe-2">
              <div className="col-10 text-start">
                <h3 className="modal-title">Modal Header</h3>
              </div>
              <div className="col-2 text-end">
                <button className=" btn btn-light" onClick={closeBtn}>
                  <RiCloseFill></RiCloseFill>
                </button>
              </div>
            </div>
            <div className="modal-body col-12 ps-4 pe-2"><Calculator></Calculator></div>
            <div className="modal-footer col-12 ps-4 pe-2">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
