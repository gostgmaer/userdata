import Calculator from "Applications/Calculator/Calculator";
import React, { useState } from "react";
import { RiCloseFill, RiCloseLine } from "react-icons/ri";

const Modal = ({ addClass, setaddClass }) => {
  const closeBtn = () => {
    setaddClass("");
  };
  return (
    <div className={`modal-overlay ${addClass} `}>
      <div className="modal-container">
        <div class="modal-dialog col-12" role="document">
          <div class="modal-content">
            <div class="modal-header col-12 ps-4 pe-2">
              <div className="col-10 text-start">
                <h3 className="modal-title">Modal Header</h3>
              </div>
              <div className="col-2 text-end">
                <button className=" btn btn-light" onClick={closeBtn}>
                  <RiCloseFill></RiCloseFill>
                </button>
              </div>
            </div>
            <div class="modal-body col-12 ps-4 pe-2"><Calculator></Calculator></div>
            <div class="modal-footer col-12 ps-4 pe-2">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
