import React, { useEffect, useRef } from "react";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";

const ContactForm = (
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone
) => {
  const submitData = (e) => {};
  const firstnameRef = useRef();
  useEffect(() => {
    firstnameRef.current.focus();
  });
  const FirstnameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };
  console.log(firstName);
  return (
    <div>
      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">
            Please Fill te Form To Continue
          </div>
          <div className="form-group  p-5">
            <div>
              <form className="d-block">
                <div className=" d-flex">
                  <div className="col">
                    <div className="mb-3 p-3 pb-0">
                      <input
                        value={firstName}
                        type="text"
                        ref={firstnameRef}
                        onChange={FirstnameChange}
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        aria-describedby="helpId"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 p-3 pb-0">
                      <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        name="phoneNumber"
                        id="PhoneNumber"
                        aria-describedby="helpId"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3 p-3 pb-0">
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        aria-describedby="helpId"
                        placeholder="last Name"
                      />
                    </div>
                    <div className="mb-3 p-3 pb-0">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder="info@mail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className=" d-block">
                  <div className="col-12">
                    <div className="mb-3 p-3 pb-0">
                      <button
                        type="button"
                        onClick={submitData}
                        className="btn btn-primary col-4"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
